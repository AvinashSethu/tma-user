"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession, signOut } from "next-auth/react";
import StyledTextField from "@/src/Components/StyledTextField/StyledTextField";
import { Button, Stack, Typography } from "@mui/material";

export default function FormSignIn({ onNext }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleCredentialsLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res.error) {
      setErrorMsg(res.error);
    } else {
      router.push("/dashboard");
    }
  };

  const handleGoogleSignIn = async () => {
    // Initiates the Google OAuth flow
    await signIn("google");
  };

  if (status === "loading") {
    return <Typography>Loading...</Typography>;
  }

  if (session) {
    return (
      <Stack alignItems="center" spacing={2}>
        <Typography>
          Already logged in as {session.user.name || session.user.email}
        </Typography>
        <Button variant="contained" onClick={() => router.push("/dashboard")}>
          Go to Dashboard
        </Button>
        <Button variant="contained" onClick={() => signOut()}>
          Sign Out
        </Button>
      </Stack>
    );
  }

  return (
    <Stack
      sx={{
        width: "350px",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack gap={1}>
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "16px",
              fontWeight: "500",
            }}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Stack>
      <Stack gap={1}>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          Password
        </Typography>
        <StyledTextField
          placeholder="Enter your password"
          type="password"
          sx={{ width: "350px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "16px",
            color: "var(--sec-color)",
            cursor: "pointer",
          }}
          onClick={onNext}
        >
          Forgot Password
        </Typography>
      </Stack>
      {errorMsg && (
        <Typography sx={{ color: "red", fontFamily: "Lato" }}>
          {errorMsg}
        </Typography>
      )}
      <Stack spacing={2}>
        <Button
          variant="contained"
          onClick={handleCredentialsLogin}
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
          Sign In
        </Button>
        <Button
          variant="outlined"
          onClick={handleGoogleSignIn}
          sx={{
            textTransform: "none",
            borderRadius: "4px",
            fontFamily: "Lato",
            fontSize: "18px",
            height: "40px",
            width: "350px",
            color: "var(--primary-color)",
            borderColor: "var(--primary-color)",
          }}
        >
          Sign In with Google
        </Button>
      </Stack>
    </Stack>
  );
}
