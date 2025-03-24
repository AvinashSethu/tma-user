"use client";
import Header from "@/src/Components/Header/Header";
import { Stack, Typography } from "@mui/material";
import TestSeries from "./Components/TestSeries";
import ResponsiveTestSeries from "./Components/ResponsiveTestSeries";
import ExamGroupCard from "@/src/Components/ExamGroupCard.js/ExamGroupCard";

export default function Exams() {
  return (
    <Stack>
      <Stack
        spacing={2}
        padding="20px"
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Header />
        <Stack gap="20px">
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
          >
            Test Series
          </Typography>
          <TestSeries />
        </Stack>
        <Stack gap="20px">
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
          >
            Exam groups
          </Typography>
          <ExamGroupCard />
          <Stack>
            
          </Stack>
        </Stack>
      </Stack>

      <ResponsiveTestSeries />
    </Stack>
  );
}
