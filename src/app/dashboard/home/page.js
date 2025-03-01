"use client";
import { Button, Stack, Typography } from "@mui/material";
import homeBanner from "@/public/images/homeBanner.svg";
import Header from "@/src/Components/Header/Header";
import GoalsList from "./Components/GoalsList";
import FreeTest from "./Components/FreeTest";
import PracticeTest from "./Components/PracticeTest";
import CrackTest from "./Components/CrackTest";
import InfoCard from "./Components/InfoCard";
import MobileHeader from "@/src/Components/MobileHeader/MobileHeader";
import Store from "../courses/Components/Store";
import { East } from "@mui/icons-material";

export default function HomePage() {
  return (
    <>
      <MobileHeader />
      <Stack padding={{ xs: "10px", md: "20px" }} gap="20px">
        <Stack sx={{ display: { xs: "none", md: "block" } }}>
          <Header />
        </Stack>
        <Stack width="100%">
          <img
            src={homeBanner.src}
            alt="banner"
            style={{ borderRadius: "15px" }}
          />
        </Stack>
        <InfoCard />
        <Stack gap="20px">
          <Typography
            component="span"
            sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
          >
            Goals
          </Typography>
          <GoalsList />
        </Stack>
        <Stack sx={{ display: { xs: "flex", md: "none" } }}>
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ marginBottom: "15px" }}
          >
            <Typography
              sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
            >
              Store
            </Typography>
            <Button
              variant="text"
              endIcon={<East />}
              sx={{
                textTransform: "none",
                color: "var(--primary-color)",
                fontSize: "12px",
              }}
            >
              View Store
            </Button>
          </Stack>
          <Store />
        </Stack>
        <Stack gap="20px">
          <Typography
            component="span"
            sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
          >
            Free Tests
          </Typography>
          <FreeTest />
        </Stack>
        <Stack gap="20px">
          <Typography
            component="span"
            sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
          >
            Practice Test
          </Typography>
          <PracticeTest />
        </Stack>
        <CrackTest />
      </Stack>
    </>
  );
}
