"use client";
import Header from "@/src/Components/Header/Header";
import { CircularProgress, Stack, Typography } from "@mui/material";
import defaultThumbnail from "@/public/images/defaultThumbnail.svg";
import LessonCard from "@/src/Components/LessonCard.js/LessonCard";
import CheckoutCard from "@/src/Components/CheckoutCard.js/CheckoutCard";
import {
  CheckCircle,
  Lock,
  PauseCircle,
  PlayCircle,
} from "@mui/icons-material";

export default function MyCourse() {
  const lessonList = [
    {
      LessonName: "Introduction",
      duration: "20 mins",
      iconStart: <PlayCircle sx={{ color: "var(--sec-color)" }} />,
      iconEnd: <CheckCircle sx={{ color: "var(--primary-color)" }} />,
    },
    {
      LessonName: "Number System",
      duration: "20 mins",
      iconStart: <PauseCircle sx={{ color: "var(--sec-color)" }} />,
      iconEnd: (
        <CircularProgress
          variant="determinate"
          value={75}
          size={20}
          sx={{ color: "var(--sec-color)" }}
        />
      ),
      now: true,
    },
    ...Array(5).fill({
      LessonName: "Linear Integration",
      duration: "20 mins",
      iconStart: <PlayCircle sx={{ color: "var(--primary-color)" }} />,
      iconEnd: <Lock sx={{ color: "var(--primary-color)" }} />,
    }),
  ];

  return (
    <Stack padding={{ xs: "10px", sm: "20px" }} alignItems="center">
      <Stack gap="20px">
        <Header back />
        <Stack
          direction={{ xs: "column", lg: "row" }}
          gap={{ xs: "20px", lg: "30px" }}
          justifyContent="space-between"
        >
          <Stack gap="15px" flex={1} width="100%">
            <Typography
              sx={{ typography: { xs: "h6", sm: "h5" }, fontWeight: "700" }}
            >
              General Aptitude
            </Typography>

            <Stack>
              <img
                src={defaultThumbnail.src}
                alt="Course Thumbnail"
                style={{
                  borderRadius: "15px",
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                }}
              />
            </Stack>
            <Typography
              sx={{
                typography: { xs: "subtitle1", sm: "h6" },
                fontWeight: "500",
              }}
            >
              About this course
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                color: "var(--text3)",
                lineHeight: "1.7",
                maxWidth: "800px",
                textAlign: "justify",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It has been the industry’s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Typography>
          </Stack>

          <Stack
            gap="20px"
            alignItems={{ xs: "center", lg: "flex-end" }}
            flex={{ xs: "auto", lg: 0.6 }}
            width="100%"
            sx={{ marginBottom: { xs: "60px", md: "0px" } }}
          >
            <CheckoutCard />

            <Stack width="100%" maxWidth="310px" gap="15px" alignItems="center">
              <Stack
                width="100%"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "20px" },
                    fontWeight: "700",
                  }}
                >
                  Lectures
                </Typography>
                <Typography sx={{ fontSize: "16px", color: "var(--text3)" }}>
                  1/20
                </Typography>
              </Stack>

              {lessonList.map((item, index) => (
                <LessonCard key={index} {...item} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
