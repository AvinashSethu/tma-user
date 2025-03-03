"use client";
import Header from "@/src/Components/Header/Header";
import { Stack, Typography } from "@mui/material";
import TestSeries from "./Components/TestSeries";
import ResponsiveTestSeries from "./Components/ResponsiveTestSeries";

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
      </Stack>

      <ResponsiveTestSeries />
    </Stack>
  );
}
