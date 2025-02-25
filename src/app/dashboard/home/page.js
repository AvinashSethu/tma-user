"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import homeBanner from "@/public/images/homeBanner.svg";
import Header from "@/src/Components/Header/Header";
import GoalsList from "./Components/GoalsList";
import FreeTest from "./Components/FreeTest";
import PracticeTest from "./Components/PracticeTest";
import CrackTest from "./Components/CrackTest";

export default function Home() {
  return (
    <Stack padding="20px" gap="20px">
      <Stack>
        <Header />
      </Stack>
      <Stack width="100%">
        <Image
          src={homeBanner.src}
          alt="banner"
          width={1180}
          height={500}
          style={{ borderRadius: "10px" }}
        />
      </Stack>
      <Stack
        sx={{
          border: "1px solid var(--border-color)",
          borderRadius: "5px",
          width: "100%",
          minHeight: "120px",
          backgroundColor: "var(--white)",
        }}
      ></Stack>
      <Stack gap="20px">
        <Typography
          sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
        >
          Goals
        </Typography>
        <GoalsList />
      </Stack>
      <Stack gap="20px">
        <Typography
          sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
        >
          Free Tests
        </Typography>
        <FreeTest />
      </Stack>
      <Stack gap="20px">
        <Typography
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
