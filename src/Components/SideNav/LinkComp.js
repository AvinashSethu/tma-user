"use client";
import { ExpandMore } from "@mui/icons-material";
import { Stack, Tooltip, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import home from "@/public/icons/home_icon.svg";
import dashboard from "@/public/icons/dashboard_icon.svg";
import exam from "@/public/icons/exam_icon.svg";
import courses from "@/public/icons/courses_icon.svg";
import classroom from "@/public/icons/classroom_icon.svg";

export default function LinkComp({ isSideNavOpen }) {
  return (
    <Stack
      sx={{
        gap: "10px",
        maxHeight: "100%",
        overflowY: "auto",
        scrollbarWidth: "thin",
      }}
    >
      {[
        { icon:home.src, title: "Home", href: "/dashboard/home" },
        {
          icon: dashboard.src,
          title: "Dashboard",
          href: "/dashboard",
        },
        {
          icon: exam.src,
          title: "Exam",
          href: "#",
          list: [
            // { title: "Course Bank", href: "/dashboard/exam/coursebank" },
            // { title: "All Questions", href: "/dashboard/exam/allQuestions" },
            // { title: "All Subjects", href: "/dashboard/exam/allSubjects" },
            // { title: "All Exams", href: "/dashboard/exam/allExams" },
          ],
        },

        {
          icon: courses.src,
          title: "Courses",
          href: "/dashboard/courses",
        },
        {
          icon: classroom.src,
          title: "My Classroom",
          href: "/dashboard/myClassroom",
        },
      ].map((item, index) => (
        <NavComp key={index} {...item} isSideNavOpen={isSideNavOpen} isRoot={true} />
      ))}
    </Stack>
  );
}

const NavComp = ({ icon, title, list, href, isSideNavOpen }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(!isSideNavOpen);

  // const isActive = pathname === href || pathname.startsWith(href + "/");
  const isActive =
  pathname === href || (href !== "/dashboard" && pathname.startsWith(href + "/"));
  const isChildActive = list?.some((item) => pathname.startsWith(item.href));

  const handleNavigation = (url) => {
    router.push(url);
    setIsNavOpen(false);
  };

  useEffect(() => {
    setIsNavOpen(!isSideNavOpen);
  }, [isSideNavOpen]);

  return (
    <Stack>
      <Tooltip title={title} disableHoverListener={!isSideNavOpen}>
        <Stack
          sx={{
            minHeight: "40px",
            padding: "10px 20px",
            cursor: "pointer",
            alignItems: isSideNavOpen ? "center" : "flex-start",
            backgroundColor: isActive
              ? "var(--primary-color-acc-2)"
              : "transparent",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor:
                list && isNavOpen
                  ? "transparent"
                  : "var(--primary-color-acc-2)",
            },
          }}
          onClick={() => !list && handleNavigation(href)}
        >
          <Stack
            flexDirection="row"
            alignItems="center"
            onClick={() => list && setIsNavOpen((prev) => !prev)}
          >
            <Stack direction="row" alignItems="center" gap="10px" height="20px">
              <Image src={icon} alt={title} width={16} height={16} />
              {!isSideNavOpen && (
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "var(--primary-color)",
                  }}
                >
                  {title}
                </Typography>
              )}
            </Stack>
            {list && !isSideNavOpen && (
              <ExpandMore
                sx={{
                  color: "var(--primary-color)",
                  transform: isNavOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  marginLeft:"auto"
                }}
              />
            )}
          </Stack>
        </Stack>
      </Tooltip>

      {isNavOpen && list && (
        <Stack sx={{ pl: "15px", mt: "10px", gap: "2px" }}>
          {list.map((item, index) => (
            <Typography
              key={index}
              onClick={() => handleNavigation(item.href)}
              sx={{
                fontFamily: "Lato",
                fontSize: "14px",
                fontWeight: "700",
                color: pathname.startsWith(item.href)
                  ? "var(--primary-color)"
                  : "var(--text3)",
                whiteSpace: "nowrap",
                borderRadius: "20px",
                height: "28px",
                paddingTop: "4px",
                paddingLeft: "15px",
                backgroundColor: pathname.startsWith(item.href)
                  ? "var(--primary-color-acc-2)"
                  : "transparent",
                "&:hover": { backgroundColor: "var(--primary-color-acc-2)" },
                cursor: "pointer",
              }}
            >
              {item.title}
            </Typography>
          ))}
        </Stack>
      )}
    </Stack>
  );
};
