"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Form from "./Form";
import FormOTP from "./FormOTP";
import validatePassword from "@/src/utils/passwordValidator";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const { status } = useSession();
  const [validationError, setValidationError] = useState("");
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Validate password on change
  useEffect(() => {
    const error = password ? validatePassword(password).error : null;
    setValidationError(error);
  }, [password]);

  // Memoized error display helper
  const showError = useCallback((message) => {
    enqueueSnackbar(message, { variant: "error" });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log(status);
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  // Get OTP handler
  const handleGetOTP = useCallback(async () => {
    setIsLoading(true);

    // Field validation
    if (!email || !password || !confirmPassword) {
      return showError("Please fill all the fields");
    }
    if (password !== confirmPassword) {
      return showError("Passwords do not match");
    }
    if (validationError) {
      return showError(validationError);
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsOTPSent(true);
      } else {
        showError(data.message || "Failed to send OTP");
      }
    } catch (error) {
      showError(error.message || "Failed to send OTP");
    } finally {
      setIsLoading(false);
    }
  }, [email, password, confirmPassword, validationError, showError]);

  // Verify OTP handler
  const handleVerifyOTP = useCallback(
    async (enteredOTP) => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/auth/verify-otp", {
          method: "POST",
          body: JSON.stringify({ email, otp: enteredOTP || otp }),
        });
        const data = await res.json();
        if (data.success) {
          enqueueSnackbar("Account created successfully", {
            variant: "success",
          });
          router.push("/signIn");
        } else {
          showError(data.message || "Failed to verify OTP");
        }
      } catch (error) {
        showError(error.message || "Failed to verify OTP");
      } finally {
        setIsLoading(false);
      }
    },
    [email, otp, router, showError]
  );

  // Resend OTP handler
  const handleResendOTP = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/resend-otp", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setIsOTPSent(true);
        enqueueSnackbar("OTP resent", { variant: "success" });
      } else {
        showError(data.message || "Failed to resend OTP");
        setIsOTPSent(false);
        setOtp("");
        setIsLoading(false);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setValidationError("");
      }
    } catch (error) {
      showError(error.message || "Failed to resend OTP");
    } finally {
      setIsLoading(false);
    }
  }, [email, showError]);

  return (
    <Stack
      width="50%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        sx={{ justifyContent: "center", alignItems: "center", height: "100vh" }}
      >
        {/* Logo Section */}
        <Stack
          sx={{
            width: "110px",
            height: "110px",
            backgroundColor: "var(--border-color)",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              width: "70px",
              height: "70px",
              backgroundColor: "var(--white)",
              borderRadius: "50px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/masters-logo.svg"
              alt="logo"
              width={48}
              height={48}
            />
          </Stack>
        </Stack>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "24px",
            fontWeight: "600",
            color: "var(--text1)",
            marginTop: "15px",
            marginBottom: "35px",
          }}
        >
          Create your account
        </Typography>

        {/* Conditional Form Rendering */}
        {status === "loading" || status === "authenticated" ? (
          <CircularProgress />
        ) : isOTPSent ? (
          <FormOTP
            otp={otp}
            setOtp={setOtp}
            handleVerifyOTP={handleVerifyOTP}
            isLoading={isLoading}
            handleResendOTP={handleResendOTP}
          />
        ) : (
          <Form
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            handleGetOTP={handleGetOTP}
            isLoading={isLoading}
            validationError={validationError}
          />
        )}
      </Stack>
      {/* Footer */}
      <Stack
        flexDirection="row"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        sx={{ fontFamily: "Lato", padding: "20px", marginTop: "auto" }}
      >
        <Typography
          sx={{
            marginTop: "auto",
            marginRight: "auto",
            fontFamily: "Lato",
            fontSize: "16px",
            fontWeight: "700",
            color: "var(--text4)",
          }}
        >
          ©2025 @ The Masters Academy
        </Typography>
        <Stack flexDirection="row" alignItems="flex-end" gap="10px">
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "12px",
              fontWeight: "700",
              color: "var(--text4)",
            }}
          >
            Designed By
          </Typography>
          <Image
            src="/images/incrix-logo.svg"
            alt="incrix"
            width={104}
            height={24}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
