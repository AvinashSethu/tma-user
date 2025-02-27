import PrimaryCard from "@/src/Components/PrimaryCard/PrimaryCard";
import { East } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import gate_cse from "@/public/icons/gate_cse.svg";
import banking from "@/public/icons/banking.svg";
import placements from "@/public/icons/placements.svg";
import { useRouter } from "next/navigation";

export default function GoalsList() {
  const router = useRouter();
  const goalDetails = [
    {
      title: "GATE CSE",
      icon: gate_cse.src,
      button: (
        <Button
          variant="text"
          endIcon={<East />}
          onClick={() => router.push("/dashboard/home/1")}
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
      enrolled: true,
    },
    {
      title: "Banking",
      icon: banking.src,
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
      icon: placements.src,
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
      icon: placements.src,
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
      {goalDetails.length > 0
        ? goalDetails.map((item, index) => (
            <PrimaryCard
              key={index}
              title={item.title}
              actionButton={item.button}
              icon={item.icon}
              enrolled={item.enrolled}
            />
          ))
        : "No Data"}
    </Stack>
  );
}
