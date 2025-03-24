"use client";
import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PrimaryCard from "@/src/Components/PrimaryCard/PrimaryCard";
import { East, Lock } from "@mui/icons-material";
import Header from "@/src/Components/Header/Header";
import StatisticCard from "@/src/Components/StatisticCard/StatisticCard";
import practice from "@/public/icons/practice.svg";
import mocks from "@/public/icons/mocks.svg";
import hours from "@/public/icons/hours.svg";
import courses from "@/public/icons/courses.svg";
import week1 from "@/public/icons/week1.svg";
import week2 from "@/public/icons/week2.svg";
import Subscribe from "./Components/Subscribe";
import Leaderboard from "./Components/Leaderboard";
import DailyProgress from "./Components/DailyProgress";
import PrimaryCardSkeleton from "@/src/Components/SkeletonCards/PrimaryCardSkeleton";
import MobileHeader from "@/src/Components/MobileHeader/MobileHeader";
import MyCourses from "./courses/Components/MyCourses";

export default function Home() {
  const [quiz, setQuiz] = useState([
    {
      title: "Week 1",
      icon: week1.src,
      button: (
        <Button
          variant="text"
          endIcon={<East />}
          sx={{
            textTransform: "none",
            color: "var(--primary-color)",
            fontSize: "12px",
          }}
        >
          Start Test
        </Button>
      ),
    },
    {
      title: "Week 2",
      icon: week2.src,
      button: (
        <Button
          variant="text"
          endIcon={<Lock />}
          sx={{
            textTransform: "none",
            color: "var(--primary-color)",
            fontSize: "12px",
          }}
          disabled
        >
          Start Test
        </Button>
      ),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setQuiz(quiz);
  }, []);

  return (
    <>
      <MobileHeader />
      <Stack gap="20px" alignItems="center">
        <Stack
          padding={{ xs: "10px", md: "20px" }}
          gap="20px"
          sx={{ marginBottom: { xs: "60px", md: "0px" } }}
        >
          <Header />
          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            gap="30px"
            justifyContent="center"
          >
            <Stack gap="15px">
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "20px",
                  fontWeight: "700",
                  display: { xs: "none", md: "block" },
                }}
              >
                Dashboard
              </Typography>
              <Stack flexDirection="row" gap="10px" flexWrap="wrap">
                <StatisticCard
                  title="Total Practice"
                  count="25"
                  icon={practice}
                />
                <StatisticCard title="Total Mocks" count="3" icon={mocks} />
                <StatisticCard title="Total Hours" count="10" icon={hours} />
                <StatisticCard title="Courses" count="2" icon={courses} />
              </Stack>
              <Stack sx={{ display: { xs: "block", md: "none" } }}>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  My Courses
                </Typography>
                <MyCourses />
              </Stack>
              <Subscribe />
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                Weekly quiz
              </Typography>
              <Stack flexDirection="row" flexWrap="wrap" gap="15px">
                {!isLoading
                  ? quiz.length > 0
                    ? quiz.map((item, index) => (
                        <PrimaryCard
                          key={index}
                          title={item.title}
                          actionButton={item.button}
                          icon={item.icon}
                        />
                      ))
                    : "No data found"
                  : [...Array(3)].map((_, index) => (
                      <PrimaryCardSkeleton key={index} />
                    ))}
              </Stack>
            </Stack>
            <Stack gap="15px">
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                Daily Progress
              </Typography>
              <Stack
                sx={{
                  border: "1px solid var(--border-color)",
                  borderRadius: "10px",
                  backgroundColor: "var(--white)",
                  width: { xs: "100%", md: "350px" },
                  height: "320px",
                }}
              >
                <DailyProgress />
              </Stack>
              <Leaderboard />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
