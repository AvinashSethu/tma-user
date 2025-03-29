"use client";
import { useRouter, usePathname } from "next/navigation";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import home from "@/public/icons/home_icon.svg";
import exam from "@/public/icons/exam_icon.svg";
import courses from "@/public/icons/courses_icon.svg";
import myLearning from "@/public/icons/myLearning.svg";
import Image from "next/image";

export default function MobileBottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const routeMap = [
    "/dashboard/home",
    "/dashboard",
    "/dashboard/exam/exams",
    "/dashboard/courses",
    "/dashboard/profile",
  ];
  const currentIndex = routeMap.indexOf(pathname);
  const value = currentIndex !== -1 ? currentIndex : 0;

  const handleNavigationChange = (event, newValue) => {
    if (newValue !== value) {
      router.push(routeMap[newValue]);
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
      {[
        { label: "Home", icon: home, index: 0 },
        { label: "My Learning", icon: myLearning, index: 1 },
        { label: "Exam", icon: exam, index: 2 },
        { label: "Courses", icon: courses, index: 3 },
        { label: "Profile", icon: home, index: 4 },
      ].map(({ label, icon, index }) => (
        <BottomNavigationAction
          key={index}
          label={label}
          icon={
            <Image
              src={icon.src}
              alt={label}
              width={16}
              height={20}
              style={{ opacity: value === index ? 1 : 0.6 }}
            />
          }
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontSize: value === index ? "12px" : "10px",
              color: value === index ? "var(--primary-color)" : "var(--text3)",
              marginTop: "3px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          }}
        />
      ))}
    </BottomNavigation>
  );
}
