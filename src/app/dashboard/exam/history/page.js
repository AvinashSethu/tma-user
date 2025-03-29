"use client";
import SearchBox from "@/src/Components/SearchBox/SearchBox";
import SecondaryCard from "@/src/Components/SecondaryCard/SecondaryCard";
import { Button, Stack, Typography } from "@mui/material";
import mocks from "@/public/icons/mocks.svg";
import Header from "@/src/Components/Header/Header";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowBackIos } from "@mui/icons-material";
import MobileHeader from "@/src/Components/MobileHeader/MobileHeader";
import MobileFilter from "@/src/Components/MobileFilter/MobileFilter";

export default function History() {
  const router = useRouter();
  const historyList = [
    {
      title: "Placements (Institute)",
      icon: <Image src={mocks.src} alt="" width={24} height={24} />,
      subTitle: (
        <Stack flexDirection="row" gap="20px">
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
            Placements
          </Typography>
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
            120 Questions
          </Typography>
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
            2024-08-05
          </Typography>
        </Stack>
      ),
    },
    {
      title: "Monday (August)",
      icon: <Image src={mocks.src} alt="" width={24} height={24} />,
      subTitle: (
        <Stack flexDirection="row" gap="20px">
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
            GATE CSE 2024
          </Typography>
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
            120 Questions
          </Typography> 
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
            2024-08-05
          </Typography>
        </Stack>
      ),
    },
    {
      title: "Practice Test",
      icon: <Image src={mocks.src} alt="" width={24} height={24} />,
      subTitle: (
        <Stack flexDirection="row" gap="20px">
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
            GATE CSE 2024
          </Typography>
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
            120 Questions
          </Typography>
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
            2024-08-05
          </Typography>
        </Stack>
      ),
    },
  ];

  return (
    <>
      <Stack sx={{ display: { xs: "block", md: "none" } }}>
        <MobileHeader />
      </Stack>
      <Stack
        padding={{ xs: "10px", md: "20px" }}
        sx={{ marginBottom: { xs: "60px", md: "0px" } }}
        gap="20px"
      >
        <Stack
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Header
          back
            button={[
              <SearchBox key="search" />,
              <Button
                key="filter"
                variant="contained"
                sx={{
                  textTransform: "none",
                  backgroundColor: "var(--primary-color)",
                  width: "120px",
                  fontFamily: "Lato",
                }}
              >
                Filters
              </Button>,
            ]}
          />
        </Stack>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack flexDirection="row" gap="4px" alignItems="center">
            <ArrowBackIos
              onClick={() => router.back()}
              fontSize="small"
              sx={{ cursor: "pointer", display: { xs: "flex", md: "none" } }}
            />
            <Typography
              sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
            >
              Exam History
            </Typography>
          </Stack>
          <Stack gap="10px" display={{ xs: "flex", md: "none" }}>
            <MobileFilter />
          </Stack>
        </Stack>
        <Stack display={{ xs: "block", md: "none" }}>
          <SearchBox />
        </Stack>
        <Stack
          sx={{
            border: { xs: "none", md: "1px solid var(--border-color)" },
            padding: { xs: "0px", md: "20px" },
            backgroundColor: { xs: "transparent", md: "var(--white)" },
            borderRadius: "10px",
            minHeight: { xs: "auto", md: "90vh" },
            gap: "20px",
          }}
        >
          <Stack flexDirection="row" flexWrap="wrap" gap="20px">
            {historyList.length > 0
              ? historyList.map((item, index) => (
                  <SecondaryCard key={index} {...item} cardWidth="500px" />
                ))
              : ""}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
