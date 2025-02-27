import PrimaryCard from "@/src/Components/PrimaryCard/PrimaryCard";
import { Button, Stack } from "@mui/material";
import mocks from "@/public/icons/mocks.svg";
import { East } from "@mui/icons-material";

export default function TestSeries() {
  const seriesList = [
    {
      icon: mocks.src,
      title: "Mock test 1",
      subtitle: "GATE CSE 2024",
      actionButton: (
        <Button
          variant="text"
          endIcon={<East />}
          sx={{
            textTransform: "none",
            fontFamily: "Lato",
            color: "var(--primary-color)",
            fontSize: "12px",
          }}
        >
          Free
        </Button>
      ),
    },
    {
      icon: mocks.src,
      title: "Mock test 1",
      subtitle: "GATE CSE 2024",
      actionButton: (
        <Button
          variant="text"
          endIcon={<East />}
          sx={{
            textTransform: "none",
            fontFamily: "Lato",
            color: "var(--primary-color)",
            fontSize: "12px",
          }}
        >
          Free
        </Button>
      ),
    },
    {
      icon: mocks.src,
      title: "Mock test 1",
      subtitle: "GATE CSE 2024",
      actionButton: (
        <Button
          variant="text"
          endIcon={<East />}
          sx={{
            textTransform: "none",
            fontFamily: "Lato",
            color: "var(--primary-color)",
            fontSize: "12px",
          }}
        >
          Free
        </Button>
      ),
    },
  ];
  return (
    <Stack flexDirection="row" flexWrap="wrap" gap="15px">
      {seriesList.length > 0
        ? seriesList.map((item, index) => <PrimaryCard key={index} {...item} />)
        : ""}
    </Stack>
  );
}
