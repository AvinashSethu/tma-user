"use client";
import SearchBox from "@/src/Components/SearchBox/SearchBox";
import SecondaryCard from "@/src/Components/SecondaryCard/SecondaryCard";
import { Button, Stack, Typography } from "@mui/material";
import mocks from "@/public/icons/mocks.svg";
import Header from "@/src/Components/Header/Header";
import { useRouter } from "next/navigation";

export default function History() {
  const router = useRouter();
  const historyList = [
    {
      title: "Placements (Institute)",
      icon: mocks.src,
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
      icon: mocks.src,
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
      icon: mocks.src,
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
    <Stack padding="20px" gap="20px">

      <Stack sx={{ display: { xs: "none", md: "block" } }}>
              <Header />
            </Stack>
      <Stack
        sx={{
          border: "1px solid var(--border-color)",
          padding: "20px",
          backgroundColor: "var(--white)",
          borderRadius: "10px",
          minHeight: "90vh",
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
          <Stack flexDirection="row" gap="10px">
            <SearchBox />
            <Button
              variant="contained"
              onClick={() => {router.push("/dashboard/exam/results")}}
              sx={{
                textTransform: "none",
                backgroundColor: "var(--primary-color)",
                width: "120px",
                fontFamily: "Lato",
              }}
            >
              Filters
            </Button>
          </Stack>
        </Stack>
        <Stack
          flexDirection="row"
          flexWrap="wrap"
          gap="15px"
          justifyContent="space-between"
        >
          {historyList.length > 0
            ? historyList.map((item, index) => (
                <SecondaryCard key={index} {...item} cardWidth="49%" />
              ))
            : ""}
        </Stack>
      </Stack>
    </Stack>
  );
}
