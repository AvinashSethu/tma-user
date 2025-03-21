"use client";
import StyledTextField from "@/src/Components/StyledTextField/StyledTextField";
import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import validatePassword from "@/src/utils/passwordValidator";
import { enqueueSnackbar, closeSnackbar } from "notistack";

export default function FormRecover() {
  const searchParams = useSearchParams();
  const [token, setToken] = useState(searchParams.get("token"));
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setToken(searchParams.get("token"));
    if (token) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  }, [searchParams, token]);

  const handleGetOTP = async () => {
    setIsLoading(true);
    if (!email) {
      enqueueSnackbar("Email is required", {
        variant: "error",
        autoHideDuration: 3000,
      });
      setIsLoading(false);
      return;
    }
    try {
      const result = await fetch("/api/auth/forget-password", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      const data = await result.json();
      if (data.success) {
        setIsOTPSent(true);
      } else {
        enqueueSnackbar(data.message, {
          variant: "error",
          autoHideDuration: 3000,
        });
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    setIsLoading(true);
    if (!otp) {
      enqueueSnackbar("OTP is required", {
        variant: "error",
        autoHideDuration: 3000,
      });
      setIsLoading(false);
      return;
    }
    try {
      const result = await fetch("/api/auth/forget-password/verify-otp", {
        method: "POST",
        body: JSON.stringify({ email, otp }),
      });
      const data = await result.json();
      if (data.success) {
        router.push(`/forget-password?token=${data.data.token}`);
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePassword = async () => {
    setIsLoading(true);
    if (!password) {
      enqueueSnackbar("Password is required", {
        variant: "error",
        autoHideDuration: 3000,
      });
      setIsLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      enqueueSnackbar("Passwords do not match", {
        variant: "error",
        autoHideDuration: 3000,
      });
      setIsLoading(false);
      return;
    }
    if (validatePassword(password).error) {
      enqueueSnackbar(validatePassword(password).error, {
        variant: "error",
        autoHideDuration: 3000,
      });
      setIsLoading(false);
      return;
    }
    try {
      const result = await fetch("/api/auth/forget-password/update-password", {
        method: "POST",
        body: JSON.stringify({ password, token }),
      });
      const data = await result.json();
      console.log(data);
      if (data.success) {
        enqueueSnackbar("Updated successfully", {
          variant: "success",
          autoHideDuration: 3000,
        });
        router.push("/signIn");
      } else {
        enqueueSnackbar(data.message, {
          variant: "error",
          autoHideDuration: 3000,
        });
        if (data.message === "Time out") {
          setIsLoading(false);
          setIsVerified(false);
          setIsOTPSent(false);
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setOtp("");
          setToken(null);
          router.replace("/forget-password");
        }
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack
      sx={{
        width: "350px",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {!isOTPSent && !isVerified ? (
        <GetOTP
          email={email}
          setEmail={setEmail}
          handleGetOTP={handleGetOTP}
          isLoading={isLoading}
        />
      ) : isVerified ? (
        <ChangePassword
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          isLoading={isLoading}
          handleChangePassword={handleChangePassword}
        />
      ) : (
        <VerifyOTP
          otp={otp}
          setOtp={setOtp}
          handleVerifyOTP={handleVerifyOTP}
          isLoading={isLoading}
          email={email}
        />
      )}
    </Stack>
  );
}

const GetOTP = ({ email, setEmail, handleGetOTP, isLoading }) => {
  return (
    <Stack gap={2}>
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography
          sx={{ fontSize: "Lato", fontSize: "16px", fontWeight: "500" }}
        >
          Email
        </Typography>
        <Link href="/signUp">
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "16px",
              fontWeight: "500",
              color: "var(--sec-color)",
              cursor: "pointer",
            }}
            onClick={() => router.push("/signUp")}
          >
            Create new account
          </Typography>
        </Link>
      </Stack>
      <StyledTextField
        placeholder="Enter your email"
        sx={{ width: "350px" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Stack flexDirection="row" gap="5px">
        <Typography sx={{ fontFamily: "Lato", fontSize: "16px" }}>
          Know password
        </Typography>
        <Link href="/signIn">
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "16px",
              color: "var(--sec-color)",
            }}
          >
            Login
          </Typography>
        </Link>
      </Stack>
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          backgroundColor: "var(--primary-color)",
          borderRadius: "4px",
          fontFamily: "Lato",
          fontSize: "18px",
          height: "40px",
          width: "350px",
        }}
        disabled={isLoading}
        startIcon={isLoading ? <CircularProgress size={20} /> : null}
        disableElevation
        onClick={handleGetOTP}
      >
        Get OTP
      </Button>
    </Stack>
  );
};

const VerifyOTP = ({ otp, setOtp, handleVerifyOTP, isLoading, email }) => {
  const [resendOTPTime, setResendOTPTime] = useState(60);

  useEffect(() => {
    if (resendOTPTime > 0) {
      setTimeout(() => setResendOTPTime(resendOTPTime - 1), 1000);
    }
  }, [resendOTPTime]);

  const handleResendOTP = () => {
    setResendOTPTime(10);
  };

  return (
    <Stack gap={2}>
      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
        Verify OTP
      </Typography>
      <Typography
        color="var(--sec-color)"
        sx={{ fontSize: "14px", fontWeight: "400" }}
      >
        Enter the OTP sent to {email} to verify your account
      </Typography>
      <MuiOtpInput
        value={otp}
        onChange={(value) => setOtp(value)}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid var(--primary-color)",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: "2px solid var(--primary-color)",
            },
        }}
        autoFocus
        onComplete={handleVerifyOTP}
        validateChar={(value, index) => {
          const isNumber = typeof value === "number";
          const isString = typeof value === "string";
          return (
            (isNumber || (isString && value !== "")) && !isNaN(Number(value))
          );
        }}
      />
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "400",
            color: "var(--text4)",
          }}
        >
          Didn&apos;t receive the OTP?
          {resendOTPTime > 0 ? (
            <Typography
              sx={{
                color: "var(--sec-color)",
                fontSize: "14px",
                display: "inline-block",
                p: "8px",
              }}
            >
              Resend OTP in {resendOTPTime} seconds
            </Typography>
          ) : (
            <Button
              variant="text"
              onClick={handleResendOTP}
              sx={{ color: "var(--sec-color)", textTransform: "none" }}
              // disabled={resendOTP}
            >
              Resend OTP
            </Button>
          )}
        </Typography>
      </Stack>
      <Button
        variant="contained"
        onClick={handleVerifyOTP}
        sx={{
          textTransform: "none",
          backgroundColor: "var(--primary-color)",
          borderRadius: "4px",
          fontFamily: "Lato",
          fontSize: "18px",
          height: "40px",
          width: "350px",
        }}
        disabled={isLoading}
        startIcon={isLoading ? <CircularProgress size={20} /> : null}
        disableElevation
      >
        Verify OTP
      </Button>
    </Stack>
  );
};

const ChangePassword = ({
  handleChangePassword,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  isLoading,
}) => {
  return (
    <Stack gap={2}>
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography
          sx={{ fontSize: "Lato", fontSize: "16px", fontWeight: "500" }}
        >
          Update Password
        </Typography>
      </Stack>
      <StyledTextField
        placeholder="Enter your new password"
        sx={{ width: "350px" }}
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledTextField
        placeholder="Confirm your new password"
        sx={{ width: "350px" }}
        value={confirmPassword}
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        helperText={
          password !== confirmPassword ? "Passwords do not match" : ""
        }
        error={password !== confirmPassword}
      />
      <Stack>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "400",
            color: "var(--delete-color)",
          }}
        >
          {password && validatePassword(password).error}
        </Typography>
      </Stack>
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          backgroundColor: "var(--primary-color)",
          borderRadius: "4px",
          fontFamily: "Lato",
          fontSize: "18px",
          height: "40px",
          width: "350px",
        }}
        disabled={
          isLoading ||
          password !== confirmPassword ||
          validatePassword(password).error
        }
        startIcon={isLoading ? <CircularProgress size={20} /> : null}
        disableElevation
        onClick={handleChangePassword}
      >
        Change Password
      </Button>
    </Stack>
  );
};
