import { East } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import mocks from "@/public/icons/mocks.svg";
import PrimaryCard from "@/src/Components/PrimaryCard/PrimaryCard";

export default function Exams() {
  const examList = [
    {
      title: "Placement",
      icon: mocks.src,
      subtitle: "20-08-2024",
      actionButton: (
        <Button
          variant="text"
          endIcon={<East sx={{ width: "16px", height: "16px" }} />}
          sx={{
            textTransform: "none",
            fontFamily: "Lato",
            color: "var(--primary-color)",
            fontSize: "12px",
          }}
        >
          Start
        </Button>
      ),
    },
  ];
  return (
    <Stack gap="20px" overflowy="auto">
      {examList.map((item, index) => (
        <PrimaryCard key={index} {...item} />
      ))}
    </Stack>
  );
}
