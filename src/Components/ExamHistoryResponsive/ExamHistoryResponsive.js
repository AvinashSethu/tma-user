"use client";
import { East } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import SecondaryCard from "../SecondaryCard/SecondaryCard";
import Image from "next/image";
import mocks from "@/public/icons/mocks.svg";
import { useRouter } from "next/navigation";

export default function ExamHistoryResponsive() {
  const router = useRouter();
  return (
    <Stack
      padding={{ xs: "10px", md: "20px" }}
      sx={{ marginBottom: { xs: "60px", md: "0px" } }}
      gap="20px"
    >
      <Stack
        sx={{
          border: "1px solid var(--border-color)",
          padding: "20px",
          backgroundColor: "var(--white)",
          borderRadius: "10px",
        //   minHeight: { xs: "auto", md: "90vh" },
          gap: "20px",
        }}
      >
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
          >
            Exam History
          </Typography>
          <Stack sx={{ display: { xs: "block", md: "none" } }}>
            <Button
              variant="text"
              endIcon={<East />}
              onClick={() => router.push("/dashboard/exam/history")}
              sx={{
                textTransform: "none",
                color: "var(--primary-color)",
                fontFamily: "Lato",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              View All
            </Button>
          </Stack>
        </Stack>
        <Stack flexDirection="row" flexWrap="wrap" gap="20px">
          <SecondaryCard
            title="Placements (Institute)"
            icon={<Image src={mocks.src} alt="" width={24} height={24} />}
            subTitle="Placements"
            cardWidth="500px"
          />
          <SecondaryCard
            title="Placements (Institute)"
            icon={<Image src={mocks.src} alt="" width={24} height={24} />}
            subTitle="Placements"
            cardWidth="500px"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
