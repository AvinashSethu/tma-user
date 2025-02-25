import PrimaryCard from "@/src/Components/PrimaryCard/PrimaryCard";
import { East } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

export default function PracticeTest() {
  const practiceTest = [
    {
      title: "GATE CSE",
      subtitle: "Top 5 Questions Quiz",
      button: (
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
          Take Test
        </Button>
      ),
    },
    {
      title: "Banking",
      subtitle: "Programming Quiz",
      button: (
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
          Take Test
        </Button>
      ),
    },
    {
      title: "Placements",
      subtitle: "Digital Logic Quiz",
      button: (
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
          Take Test
        </Button>
      ),
    },
    {
      title: "Placements",
      subtitle: "Mathematics Quiz",
      button: (
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
          Take Test
        </Button>
      ),
    },
  ];
  return (
    <Stack flexDirection="row" gap="20px">
      {practiceTest.map((item, index) => (
        <PrimaryCard
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          actionButton={item.button}
        />
      ))}
    </Stack>
  );
}
