"use client";
import MasterLogo from "@/src/Components/SideNav/MasterLogo";
import StatisticCard from "@/src/Components/StatisticCard/StatisticCard";
import { Close, East, Verified } from "@mui/icons-material";
import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import practice from "@/public/icons/practice.svg";
import hours from "@/public/icons/hours.svg";

export default function ExamInstruction() {
  const router = useRouter();
  return (
    <Stack
      sx={{ backgroundColor: "var(--sec-color-acc-2)", minHeight: "100vh" }}
    >
      <Stack
        sx={{
          borderBottom: "1px solid var(--border-color)",
          minHeight: "60px",
          backgroundColor: "var(--white)",
          padding: "20px",
        }}
        justifyContent="center"
      >
        <MasterLogo />
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "90vh" }}
      >
        <Stack
          sx={{
            border: "1px solid var(--border-color)",
            borderRadius: "10px",
            backgroundColor: "var(--white)",
            width: { xs: "95%", md: "800px" },
            minHeight: "410px",
            padding: { xs: "10px", md: "20px" },
            gap: "30px",
          }}
        >
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{ fontFamily: "Lato", fontSize: "18px", fontWeight: "700" }}
            >
              Instruction
            </Typography>
            <Close onClick={() => router.back()} />
          </Stack>
          <Stack alignItems="center" gap="20px" minHeight="310px">
            <Stack flexDirection="row" gap="20px">
              <StatisticCard
                title="Total Questions"
                count="60"
                icon={practice}
              />
              <StatisticCard title="Time" count="120" icon={hours} />
            </Stack>
            <Typography
              sx={{
                fontSize: { xs: "13px", md: "16px" },
                fontFamily: "Lato",
                width: { xs: "100%", md: "530px" },
                textAlign: "center",
              }}
            >
              All the questions were given as multiple choice questions and
              there is no time limit for each questions.
            </Typography>
            <Stack
              flexDirection={{ xs: "column", md: "row" }}
              gap="15px"
              alignItems="center"
            >
              <Stack flexDirection="row" gap="10px" alignItems="center">
                <CircularProgress
                  size={14}
                  variant="determinate"
                  value={75}
                  color="inherit"
                  sx={{
                    color: "var(--text2)",
                  }}
                />
                <Typography sx={{ fontFamily: "Lato", fontSize: "14px" }}>
                  Browser Compatibility
                </Typography>
              </Stack>
              <Stack flexDirection="row" gap="10px" alignItems="center">
                <Verified sx={{ color: "var(--primary-color)" }} />
                <Typography sx={{ fontFamily: "Lato", fontSize: "14px" }}>
                  Device Compatibility
                </Typography>
              </Stack>
              <Stack flexDirection="row" gap="10px" alignItems="center">
                <Verified sx={{ color: "var(--primary-color)" }} />
                <Typography sx={{ fontFamily: "Lato", fontSize: "14px" }}>
                  Internet Compatibility
                </Typography>
              </Stack>
            </Stack>
            <Button
              variant="text"
              endIcon={<East />}
              onClick={() => router.push("/exam/1/instruction/attempt")}
              sx={{
                textTransform: "none",
                color: "var(--primary-color)",
                fontSize: "12px",
                fontFamily: "Lato",
                marginTop: "auto",
              }}
            >
              Start test
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
