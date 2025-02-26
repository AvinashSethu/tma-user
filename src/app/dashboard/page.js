"use client";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import PrimaryCard from "@/src/Components/PrimaryCard/PrimaryCard";
import { East, Lock } from "@mui/icons-material";
import Header from "@/src/Components/Header/Header";
import LeaderboardCard from "@/src/Components/LeaderboardCard/LeaderboardCard";
import StatisticCard from "@/src/Components/StatisticCard/StatisticCard";
import practice from "@/public/icons/practice.svg";
import mocks from "@/public/icons/mocks.svg";
import hours from "@/public/icons/hours.svg";
import courses from "@/public/icons/courses.svg";
import week1 from "@/public/icons/week1.svg";
import week2 from "@/public/icons/week2.svg";

export default function Home() {
  const leaderboardList = [
    { sNo: 1, name: "Mira", points: "200 points" },
    { sNo: 2, name: "Priya", points: "180 points" },
    { sNo: 3, name: "Aarav", points: "160 points" },
    { sNo: 4, name: "Mira", points: "150 points" },
    { sNo: 5, name: "Mira", points: "140 points" },
  ];
  const [quiz, setQuiz] = useState([]);
  const weeklyQuiz = [
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
  ];

  useEffect(() => {
    setQuiz(weeklyQuiz);
  }, []);

  return (
    <Stack padding="20px" gap="20px">
      <Header />
      <Stack flexDirection="row" width="100%" gap="30px">
        <Stack gap="15px">
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
          >
            Dashboard
          </Typography>
          <Stack flexDirection="row" gap="10px">
            <StatisticCard title="Total Practice" count="25" icon={practice} />
            <StatisticCard title="Total Mocks" count="3" icon={mocks} />
            <StatisticCard title="Total Hours" count="10" icon={hours} />
            <StatisticCard title="Courses" count="2" icon={courses} />
          </Stack>
          <Stack
            flexDirection="row"
            sx={{
              border: "1px solid var(--border-color)",
              borderRadius: "10px",
              backgroundColor: "var(--white)",
              maxWidth: "690px",
              minHeight: "300px",
              padding: "20px",
              gap: "10px",
            }}
          >
            <Stack gap="25px" width="60%">
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "var(--text3)",
                }}
              >
                Get unlimited practice tests with PRO subscription
              </Typography>
              <Stack gap="8px">
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "12px",
                    color: "var(--text3)",
                  }}
                >
                  Track your perfomance with unlimited daily practice tests
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "12px",
                    color: "var(--text3)",
                  }}
                >
                  Get access to test quizzes
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "12px",
                    color: "var(--text3)",
                  }}
                >
                  Attempt mock with pro questions
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "12px",
                    color: "var(--text3)",
                  }}
                >
                  Get access to video lectures
                </Typography>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  backgroundColor: "var(--primary-color)",
                  width: "130px",
                  marginTop: "auto",
                }}
                disableElevation
              >
                Subscribe
              </Button>
            </Stack>
            <Stack>
              <Image
                src="/images/subscribeBanner.svg"
                alt="subscribe"
                width={300}
                height={280}
              />
            </Stack>
          </Stack>
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
          >
            Weekly quiz
          </Typography>
          <Stack flexDirection="row" flexWrap="wrap" gap="15px">
            {quiz.map((item, index) => (
              <PrimaryCard
                key={index}
                title={item.title}
                actionButton={item.button}
                icon={item.icon}
              />
            ))}
          </Stack>
        </Stack>
        <Stack gap="15px">
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
          >
            Daily Progress
          </Typography>
          <Stack
            sx={{
              border: "1px solid var(--border-color)",
              borderRadius: "10px",
              backgroundColor: "var(--white)",
              width: "350px",
              height: "320px",
            }}
          ></Stack>
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
          >
            LeaderBoard
          </Typography>
          <Stack
            sx={{
              border: "1px solid var(--border-color)",
              borderRadius: "10px",
              backgroundColor: "var(--white)",
              width: "350px",
              minHeight: "370px",
              padding: "18px",
              gap: "10px",
            }}
          >
            {leaderboardList.map((item, index) => (
              <LeaderboardCard key={index} {...item} />
            ))}
            <Typography
              sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
            >
              Your Rank
            </Typography>
            <LeaderboardCard sNo={1} name="Mira" points="200 points" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
