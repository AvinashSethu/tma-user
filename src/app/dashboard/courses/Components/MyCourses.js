"use client";
import { Button, Stack } from "@mui/material";
import defaultThumbnail from "@/public/images/defaultThumbnail.svg";
import CourseCard from "@/src/Components/CourseCard/CourseCard";
import { East } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MyCourses() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const courseList = [
    {
      title: "General Aptitude",
      thumbnail: defaultThumbnail.src,
      lessons: "16",
      hours: "48 hours",
      actionButton: (
        <Button
          variant="text"
          endIcon={<East sx={{ width: "16px", height: "16px" }} />}
          sx={{
            textTransform: "none",
            color: "var(--primary-color)",
            fontSize: "12px",
          }}
          onClick={() => {
            router.push("/dashboard/courses/1");
          }}
        >
          View
        </Button>
      ),
    },
    {
      title: "General Aptitude",
      thumbnail: defaultThumbnail.src,
      lessons: "16",
      hours: "48 hours",
      actionButton: (
        <Button
          variant="text"
          endIcon={<East sx={{ width: "16px", height: "16px" }} />}
          sx={{
            textTransform: "none",
            color: "var(--primary-color)",
            fontSize: "12px",
          }}
        >
          View
        </Button>
      ),
    },
  ];
  return (
    <Stack flexDirection="row" flexWrap="wrap" rowGap="20px" columnGap="10px">
      {courseList.length > 0
        ? courseList.map((item, index) => <CourseCard key={index} {...item} />)
        : "No Courses"}
    </Stack>
  );
}
