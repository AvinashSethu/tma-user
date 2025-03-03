"use client";
import SecondaryCard from "@/src/Components/SecondaryCard/SecondaryCard";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import mocks from "@/public/icons/mocks.svg";
import Overview from "@/src/app/exam/Components/Overview";
import QuestionPreview from "@/src/app/exam/Components/QuestionPreview";

export default function Results() {
  const router = useRouter();
  return (
    <Stack
      padding={{ xs: "9px", md: "30px" }}
      sx={{ backgroundColor: "var(--sec-color-acc-2)" }}
    >
      <Stack
        sx={{
          backgroundColor: "var(--white)",
          minHeight: "100vh",
          border: "1px solid var(--border-color)",
          borderRadius: "10px",
          padding: { xs: "8px", md: "20px" },
          gap: "20px",
          width: "100%",
        }}
      >
        <Stack flexDirection="row" gap="6px" alignItems="center">
          <ArrowBackIosNewRounded
            fontSize="small"
            onClick={() => router.push("/dashboard/exam/exams")}
            sx={{ cursor: "pointer" }}
          />
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
          >
            Results
          </Typography>
        </Stack>
        <Stack>
          <SecondaryCard
            title="Placement"
            subTitle={
              <Stack flexDirection="row" gap="20px">
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "14px",
                    color: "var(--text3)",
                  }}
                >
                  2024-08-05
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "14px",
                    color: "var(--text3)",
                  }}
                >
                  120 Questions
                </Typography>
              </Stack>
            }
            icon={mocks}
          />
        </Stack>
        <Overview />
        <QuestionPreview
          qNum="Q1"
          question="What is the difference in the place value of 5 in the numeral 754853?"
        />
        <QuestionPreview
          qNum="Q2"
          question="What is the difference in the place value of 5 in the numeral 754853?"
        />
        <QuestionPreview
          qNum="Q3"
          question="What is the difference in the place value of 5 in the numeral 754853?"
        />
      </Stack>
    </Stack>
  );
}
