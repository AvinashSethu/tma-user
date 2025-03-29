"use client";
import Header from "@/src/Components/Header/Header";
import { Stack, Typography, Button } from "@mui/material";
import TestSeries from "./Components/TestSeries";
import ResponsiveTestSeries from "./Components/ResponsiveTestSeries";
import PrimaryCard from "@/src/Components/PrimaryCard/PrimaryCard";
import Practice from "@/public/icons/practice.svg";
import mocks from "@/public/icons/mocks.svg";
import { East } from "@mui/icons-material";
import troffy from "@/public/icons/week2.svg";

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
        <Stack flexDirection="row" gap="20px" alignItems="center">
          <Stack gap="20px">
            <Typography
              sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
            >
              Practice test (0/5)
            </Typography>
            <PrimaryCard
              title="Practice"
              icon={Practice.src}
              actionButton={
                <Button
                  variant="text"
                  endIcon={<East />}
                  sx={{
                    textTransform: "none",
                    color: "var(--primary-color)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                  }}
                >
                  Take Test
                </Button>
              }
            />
          </Stack>
          <Stack gap="20px">
            <Typography
              sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
            >
              Scheduled tests
            </Typography>
            <PrimaryCard
              title="Placement"
              icon={mocks.src}
              actionButton={
                <Button
                  variant="text"
                  endIcon={<East />}
                  sx={{
                    textTransform: "none",
                    color: "var(--primary-color)",
                    fontFamily: "Lato",
                    fontSize: "12px",
                  }}
                >
                  Start
                </Button>
              }
            />
          </Stack>
        </Stack>
        <Stack gap="20px">
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
          >
            Exam groups
          </Typography>
          <PrimaryCard
            title="Weekly test"
            icon={troffy.src}
            actionButton={
              <Button
                variant="text"
                // onClick={() => router.push("/exam/1/instruction")}
                endIcon={<East />}
                sx={{
                  textTransform: "none",
                  color: "var(--primary-color)",
                  fontFamily: "Lato",
                  fontSize: "12px",
                }}
              >
                Take Test
              </Button>
            }
          />
        </Stack>
      </Stack>

      <ResponsiveTestSeries />
    </Stack>
  );
}
