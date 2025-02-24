"use client";
import * as React from "react";
import { useSnackbar } from "notistack";
import { Button, IconButton, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { Login, TrendingFlat } from "@mui/icons-material";
import PrimaryCard from "@/Components/PrimaryCard/PrimaryCard";
import LeaderboardCard from "@/Components/LeaderboardCard/LeaderboardCard";
import StatisticCard from "@/Components/StatisticCard/StatisticCard";
import SecondaryCard from "@/Components/SecondaryCard/SecondaryCard";
import CourseCard from "@/Components/CourseCard/CourseCard";

export default function Home() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar("This is a success message!", { variant });
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{ textTransform: "none", margin: "10px" }}
        onClick={handleClickVariant("success")}
      >
        variant snackbar
      </Button>
      <IconButton onClick={() => router.push("/signIn")}>
        <Login />
      </IconButton>
      <Stack padding="20px" gap={3}>
        <PrimaryCard
          icon="/icons/week1.svg"
          title="Week 1"
          actionButton={
            <Button
              variant="text"
              endIcon={<TrendingFlat />}
              sx={{
                width: "100px",
                fontFamily: "Lato",
                fontSize: "12px",
                fontWeight: "400",
                textTransform: "none",
                color: "var(--primary-color)",
              }}
            >
              Start Test
            </Button>
          }
        />
        <LeaderboardCard />
        <StatisticCard title="Total Practice" count="25" />
        <SecondaryCard cardWidth="300px" />
        {/* <CourseCard /> */}
      </Stack>
    </>
  );
}
