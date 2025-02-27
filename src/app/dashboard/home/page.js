"use client";
import { Stack, Typography } from "@mui/material";
import homeBanner from "@/public/images/homeBanner.svg";
import Header from "@/src/Components/Header/Header";
import GoalsList from "./Components/GoalsList";
import FreeTest from "./Components/FreeTest";
import PracticeTest from "./Components/PracticeTest";
import CrackTest from "./Components/CrackTest";
import InfoCard from "./Components/InfoCard";

export default function HomePage() {
  return (
    <Stack padding="20px" gap="20px">
      <Stack>
        <Header />
      </Stack>
      <Stack width="100%">
        <img
          src={homeBanner.src}
          alt="banner"
          style={{ borderRadius: "15px" }}
        />
      </Stack>
      <InfoCard />
      <Stack gap="20px">
        <Typography
          component="span"
          sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
        >
          Goals
        </Typography>
        <GoalsList />
      </Stack>
      <Stack gap="20px">
        <Typography
          component="span"
          sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
        >
          Free Tests
        </Typography>
        <FreeTest />
      </Stack>
      <Stack gap="20px">
        <Typography
          component="span"
          sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
        >
          Practice Test
        </Typography>
        <PracticeTest />
      </Stack>
      <CrackTest />
    </Stack>
  );
}
