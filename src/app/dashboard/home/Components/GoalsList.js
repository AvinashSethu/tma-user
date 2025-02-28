import PrimaryCard from "@/src/Components/PrimaryCard/PrimaryCard";
import { East } from "@mui/icons-material";
import { Button, Stack, Box } from "@mui/material";
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
    <Box
      sx={{
        overflowX: { xs: "auto", md: "" },
        whiteSpace: "nowrap",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
        width: "100%",
      }}
    >
      <Stack
        flexDirection="row"
        flexWrap={{ xs: "wrap" }}
        gap="10px"
        sx={{
          minWidth: { xs: "max-content", md: "100%" },
        }}
      >
        {goalDetails.map((item, index) => (
          <Box key={index} sx={{ flex: "0 0 auto", width: "150px" }}>
            <PrimaryCard
              title={item.title}
              actionButton={item.button}
              icon={item.icon}
              enrolled={item.enrolled}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
