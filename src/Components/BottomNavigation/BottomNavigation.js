"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import home from "@/public/icons/home_icon.svg";
import exam from "@/public/icons/exam_icon.svg";
import courses from "@/public/icons/courses_icon.svg";
import classroom from "@/public/icons/classroom_icon.svg";
import Image from "next/image";

export default function MobileBottomNav() {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleNavigationChange = (event, newValue) => {
    if (newValue !== value) {
      setValue(newValue);
      if (newValue === 0) router.push("/dashboard/home");
      if (newValue === 1) router.push("/dashboard");
      if (newValue === 2) router.push("/dashboard/exam/exams");
      if (newValue === 3) router.push("/dashboard/myClassroom");
      if (newValue === 4) router.push("/dashboard/profile");
    }
  };

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={handleNavigationChange}
      sx={{
        display: { xs: "flex", md: "none" },
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        bgcolor: "var(--white)",
        zIndex: 1,
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={
          <Image
            src={home.src}
            alt="Home"
            width={16}
            height={20}
            style={{ opacity: value === 0 ? 1 : 0.6 }}
          />
        }
        sx={{
          "& .MuiBottomNavigationAction-label": {
            fontSize: value === 0 ? "12px" : "10px",
            color: value === 0 ? "var(--primary-color)" : "var(--text3)",
            marginTop: "3px",
          },
        }}
      />
      <BottomNavigationAction
        label="My Learning"
        icon={
          <Image
            src={courses.src}
            alt="Home"
            width={18}
            height={20}
            style={{ opacity: value === 1 ? 1 : 0.6 }}
          />
        }
        sx={{
          "& .MuiBottomNavigationAction-label": {
            fontSize: value === 1 ? "12px" : "10px",
            color: value === 1 ? "var(--primary-color)" : "var(--text3)",
            marginTop: "3px",
            whiteSpace: "nowrap",
            overflow: "hidden",
          },
        }}
      />
      <BottomNavigationAction
        label="Exam"
        icon={
          <Image
            src={exam.src}
            alt="Home"
            width={16}
            height={18}
            style={{ opacity: value === 2 ? 1 : 0.6 }}
          />
        }
        sx={{
          "& .MuiBottomNavigationAction-label": {
            fontSize: value === 2 ? "12px" : "10px",
            color: value === 2 ? "var(--primary-color)" : "var(--text3)",
            marginTop: "3px",
          },
        }}
      />
      <BottomNavigationAction
        label="Classroom"
        icon={
          <Image
            src={classroom.src}
            alt="Home"
            width={18}
            height={20}
            style={{ opacity: value === 3 ? 1 : 0.6 }}
          />
        }
        sx={{
          "& .MuiBottomNavigationAction-label": {
            fontSize: value === 3 ? "12px" : "10px",
            color: value === 3 ? "var(--primary-color)" : "var(--text3)",
            marginTop: "3px",
          },
        }}
      />
      <BottomNavigationAction
        label="Profile"
        icon={
          <Image
            src={home.src}
            alt="Home"
            width={16}
            height={18}
            style={{ opacity: value === 4 ? 1 : 0.6 }}
          />
        }
        sx={{
          "& .MuiBottomNavigationAction-label": {
            fontSize: value === 4 ? "12px" : "10px",
            color: value === 4 ? "var(--primary-color)" : "var(--text3)",
            marginTop: "3px",
          },
        }}
      />
    </BottomNavigation>
  );
}
