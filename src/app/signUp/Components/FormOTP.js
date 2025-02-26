"use client";
import StyledTextField from "@/src/Components/StyledTextField/StyledTextField";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function FormOTP({ onNext }) {
  const router = useRouter();
  return (
    <Stack
      sx={{
        width: "350px",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <Stack justifyContent="space-between" gap="15px">
        <Typography
          sx={{ fontSize: "Lato", fontSize: "16px", fontWeight: "500" }}
        >
          Enter OTP
        </Typography>
        <Stack flexDirection="row" gap={1}>
          <StyledTextField sx={{ width: "40px" }} />
          <StyledTextField sx={{ width: "40px" }} />
          <StyledTextField sx={{ width: "40px" }} />
          <StyledTextField sx={{ width: "40px" }} />
        </Stack>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "16px",
            color: "var(--sec-color)",
          }}
        >
          Resend it
        </Typography>
      </Stack>

      <Stack>
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
          onClick={onNext}
          disableElevation
        >
          Submit
        </Button>
      </Stack>
    </Stack>
  );
}
