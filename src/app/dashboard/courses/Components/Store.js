"use client";
import { Button, Stack } from "@mui/material";
import defaultThumbnail from "@/public/images/defaultThumbnail.svg";
import CourseCard from "@/src/Components/CourseCard/CourseCard";
import { ShoppingBagRounded } from "@mui/icons-material";
import { useState } from "react";

export default function Store() {
  const [isLoading, setIsLoading] = useState(false);
  const storeList = [
    {
      title: "General Aptitude",
      thumbnail: defaultThumbnail.src,
      lessons: "16",
      hours: "48 hours",
      actionButton: (
        <Button
          variant="text"
          endIcon={
            <ShoppingBagRounded sx={{ width: "16px", height: "16px" }} />
          }
          sx={{
            textTransform: "none",
            color: "var(--primary-color)",
            fontSize: "12px",
          }}
        >
          Purchase
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
          endIcon={
            <ShoppingBagRounded sx={{ width: "16px", height: "16px" }} />
          }
          sx={{
            textTransform: "none",
            color: "var(--primary-color)",
            fontSize: "12px",
          }}
        >
          Purchase
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
          endIcon={
            <ShoppingBagRounded sx={{ width: "16px", height: "16px" }} />
          }
          sx={{
            textTransform: "none",
            color: "var(--primary-color)",
            fontSize: "12px",
          }}
        >
          Purchase
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
          endIcon={
            <ShoppingBagRounded sx={{ width: "16px", height: "16px" }} />
          }
          sx={{
            textTransform: "none",
            color: "var(--primary-color)",
            fontSize: "12px",
          }}
        >
          Purchase
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
          endIcon={
            <ShoppingBagRounded sx={{ width: "16px", height: "16px" }} />
          }
          sx={{
            textTransform: "none",
            color: "var(--primary-color)",
            fontSize: "12px",
          }}
        >
          Purchase
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
          endIcon={
            <ShoppingBagRounded sx={{ width: "16px", height: "16px" }} />
          }
          sx={{
            textTransform: "none",
            color: "var(--primary-color)",
            fontSize: "12px",
          }}
        >
          Purchase
        </Button>
      ),
    },
  ];
  return (
    <Stack flexDirection="row" flexWrap="wrap" rowGap="20px" columnGap="10px">
      {storeList.length > 0
        ? storeList.map((item, index) => <CourseCard key={index} {...item} />)
        : "No Courses"}
    </Stack>
  );
}
