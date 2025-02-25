import PrimaryCard from "@/src/Components/PrimaryCard/PrimaryCard";
import { East } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

export default function GoalsList() {
  const goalDetails = [
    {
      title: "GATE CSE",
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
          Enrolled
        </Button>
      ),
    },
    {
      title: "Banking",
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
          Enrolled
        </Button>
      ),
    },
    {
      title: "Placements",
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
          View
        </Button>
      ),
    },
    {
      title: "Placements",
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
          View
        </Button>
      ),
    },
  ];
  return (
    <Stack flexDirection="row" gap="20px">
      {goalDetails.map((item, index) => (
        <PrimaryCard
          key={index}
          title={item.title}
          actionButton={item.button}
        />
      ))}
    </Stack>
  );
}
