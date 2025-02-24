"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Form from "./Form";
import { useState } from "react";
import FormOTP from "./FormOTP";
import FormCreate from "./FormCreate";

export default function SignupPage() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };
  return (
    <Stack
      width="50%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
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
              src="images/masters-logo.svg"
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
          Sign up with your account
        </Typography>
        {step === 1 && <Form onNext={handleNextStep} />}
        {step === 2 && <FormOTP onNext={handleNextStep} />}
        {step === 3 && <FormCreate />}
      </Stack>
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
            src="images/incrix-logo.svg"
            alt="incrix"
            width={104}
            height={24}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
