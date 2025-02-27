import Header from "@/src/Components/Header/Header";
import { CircularProgress, duration, Stack, Typography } from "@mui/material";
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
    {
      LessonName: "Linear Integration",
      duration: "20 mins",
      iconStart: <PlayCircle sx={{ color: "var(--primary-color)" }} />,
      iconEnd: <Lock sx={{ color: "var(--primary-color)" }} />,
    },
    {
      LessonName: "Linear Integration",
      duration: "20 mins",
      iconStart: <PlayCircle sx={{ color: "var(--primary-color)" }} />,
      iconEnd: <Lock sx={{ color: "var(--primary-color)" }} />,
    },
    {
      LessonName: "Linear Integration",
      duration: "20 mins",
      iconStart: <PlayCircle sx={{ color: "var(--primary-color)" }} />,
      iconEnd: <Lock sx={{ color: "var(--primary-color)" }} />,
    },
    {
      LessonName: "Linear Integration",
      duration: "20 mins",
      iconStart: <PlayCircle sx={{ color: "var(--primary-color)" }} />,
      iconEnd: <Lock sx={{ color: "var(--primary-color)" }} />,
    },
    {
      LessonName: "Linear Integration",
      duration: "20 mins",
      iconStart: <PlayCircle sx={{ color: "var(--primary-color)" }} />,
      iconEnd: <Lock sx={{ color: "var(--primary-color)" }} />,
    },
  ];

  return (
    <Stack
      padding="20px"
      gap="20px"
      justifyContent="center"
      alignItems="center"
    >
      <Stack gap="20px">
        <Header back />
        <Stack flexDirection="row" gap="30px">
          <Stack gap="15px">
            <Typography
              sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
            >
              General Aptitude
            </Typography>
            <div
              style={{
                position: "relative",
                width: "800px",
                paddingTop: "56.25%", // 16:9 
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src={defaultThumbnail.src}
                alt="thumbnail"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <Typography
              sx={{ fontFamily: "Lato", fontSize: "18px", fontWeight: "500" }}
            >
              About this course
            </Typography>
            <Typography
              sx={{
                width: "800px",
                fontFamily: "Lato",
                fontSize: "16px",
                color: "var(--text3)",
                lineHeight: "29px",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Stack>
          <Stack gap="20px" paddingTop="43px">
            <CheckoutCard />
            <Stack gap="15px">
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  Lectures
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "16px",
                    color: "var(--text3)",
                    paddingRight: "5px",
                  }}
                >
                  1/20
                </Typography>
              </Stack>

              {lessonList.length > 0
                ? lessonList.map((item, index) => (
                    <LessonCard key={index} {...item} />
                  ))
                : ""}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
