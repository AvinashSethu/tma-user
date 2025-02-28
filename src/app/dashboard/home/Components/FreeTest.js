import SecondaryCard from "@/src/Components/SecondaryCard/SecondaryCard";
import { East } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import mocks from "@/public/icons/mocks.svg";

export default function FreeTest() {
  const goalDetails = [
    {
      title: "GATE CS Full Mock Test ",
      icon: mocks.src,
      subtitle: (
        <Stack flexDirection="row" gap="20px">
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
            GATE CSE 2024
          </Typography>
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px",display:{xs:"none",md:"block"} }}>
            120 Questions
          </Typography>
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px",display:{xs:"none",md:"block"} }}>
            30 Minutes
          </Typography>
        </Stack>
      ),
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
      title: "Banking Full Mock Test ",
      icon: mocks.src,
      subtitle: (
        <Stack flexDirection="row" gap="20px">
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
            Banking 2024
          </Typography>
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px",display:{xs:"none",md:"block"} }}>
            120 Questions
          </Typography>
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px",display:{xs:"none",md:"block"} }}>
            30 Minutes
          </Typography>
        </Stack>
      ),
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
      title: "Banking Full Mock Test ",
      icon: mocks.src,
      subtitle: (
        <Stack flexDirection="row" gap="20px">
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
            Banking 2024
          </Typography>
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px",display:{xs:"none",md:"block"} }}>
            120 Questions
          </Typography>
          <Typography sx={{ fontFamily: "Lato", fontSize: "12px",display:{xs:"none",md:"block"} }}>
            30 Minutes
          </Typography>
        </Stack>
      ),
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
  ];
  return (
    <Stack
      justifyContent="space-between"
      gap="15px"
      flexDirection="row"
      flexWrap="wrap"
      width="100%"
    >
      {goalDetails.map((item, index) => (
        <SecondaryCard
          cardWidth="49%"
          key={index}
          title={item.title}
          subTitle={item.subtitle}
          button={item.button}
          icon={item.icon}
        />
      ))}
    </Stack>
  );
}
