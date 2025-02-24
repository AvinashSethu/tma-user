"use client";
import StyledTextField from "@/Components/StyledTextField/StyledTextField";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function FormRecover() {
  const router = useRouter();
  return (
    <Stack
      sx={{
        width: "350px",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <Stack gap={1}>
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography
            sx={{ fontSize: "Lato", fontSize: "16px", fontWeight: "500" }}
          >
            Email
          </Typography>
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
        </Stack>
        <StyledTextField
          placeholder="Enter your email"
          sx={{ width: "350px" }}
        />
      </Stack>
      <Stack flexDirection="row" gap="5px">
        <Typography sx={{ fontFamily: "Lato", fontSize: "16px" }}>
          Know password
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "16px",
            color: "var(--sec-color)",
          }}
          onClick={() => router.push("/signIn")}
        >
          Login
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
          disableElevation
        >
          Get OTP
        </Button>
      </Stack>
    </Stack>
  );
}
