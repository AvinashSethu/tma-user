"use client";
import Header from "@/src/Components/Header/Header";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import Courses from "./Components/Courses";
import Exams from "./Components/Exams";
import { useRouter } from "next/navigation";

export default function Classroom() {
  const router = useRouter();
  return (
    <Stack padding="20px" gap="20px">
      <Stack
        flexDirection="row"
        alignItems="center"
        gap="6px"
        sx={{
          backgroundColor: "var(--white)",
          borderRadius: "10px",
          height: "60px",
          border: "1px solid var(--border-color)",
          padding: "10px",
        }}
      >
        <ArrowBackIosNewRounded
          fontSize="small"
          onClick={() => router.back()}
          sx={{ cursor: "pointer" }}
        />
        <Typography
          sx={{ fontFamily: "Lato", fontSize: "18px", fontWeight: "700" }}
        >
          Ece 3rd year
        </Typography>
      </Stack>
      <Stack gap="10px">
        <Typography
          sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
        >
          Courses
        </Typography>
        <Courses />
      </Stack>
      <Stack gap="10px">
        <Typography
          sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
        >
          Exams
        </Typography>
        <Exams />
      </Stack>
    </Stack>
  );
}
