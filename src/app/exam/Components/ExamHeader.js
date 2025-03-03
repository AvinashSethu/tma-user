"use client";
import MasterLogo from "@/src/Components/SideNav/MasterLogo";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ExamHeader() {
  const router = useRouter();
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      sx={{
        backgroundColor: "var(--white)",
        minHeight: "80px",
        borderBottom: "1px solid var(--border-color)",
        padding: "20px",
      }}
    >
      <MasterLogo />
      <Stack
        flexDirection="row"
        alignItems="center"
        sx={{ marginLeft: "auto", gap: "20px" }}
      >
        <Typography
          sx={{
            display: { xs: "none", md: "block" },
            fontFamily: "Lato",
            fontSize: "14px",
          }}
        >
          00:14:59
        </Typography>
        <Button
          variant="outlined"
          onClick={() => router.push("/exam/1/instruction/attempt/result")}
          sx={{
            borderColor: "var(--primary-color)",
            textTransform: "none",
            color: "var(--primary-color)",
            fontFamily: "Lato",
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          End Test
        </Button>
      </Stack>
    </Stack>
  );
}
