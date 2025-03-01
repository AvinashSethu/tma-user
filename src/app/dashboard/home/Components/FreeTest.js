import SecondaryCard from "@/src/Components/SecondaryCard/SecondaryCard";
import { East } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import mocks from "@/public/icons/mocks.svg";
import PrimaryCard from "@/src/Components/PrimaryCard/PrimaryCard";

export default function FreeTest() {
  const goalDetails = [
    {
      title: "GATE CS Mock Test ",
      icon: mocks.src,
      // subtitle: (
      //   <Stack flexDirection="row" gap="20px">
      //     <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
      //       GATE CSE 2024
      //     </Typography>
      //     <Typography sx={{ fontFamily: "Lato", fontSize: "12px",display:{xs:"none",md:"block"} }}>
      //       120 Questions
      //     </Typography>
      //     <Typography sx={{ fontFamily: "Lato", fontSize: "12px",display:{xs:"none",md:"block"} }}>
      //       30 Minutes
      //     </Typography>
      //   </Stack>
      // ),
      actionButton: (
        <Button
          variant="text"
          endIcon={<East />}
          sx={{
            textTransform: "none",
            fontFamily: "Lato",
            color: "var(--primary-color)",
            fontSize: "12px",
            padding: "2px",
          }}
        >
          Start now
        </Button>
      ),
    },
    {
      title: "Banking Mock Test ",
      icon: mocks.src,
      // subtitle: (
      //   <Stack flexDirection="row" gap="20px">
      //     <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
      //       Banking 2024
      //     </Typography>
      //     <Typography sx={{ fontFamily: "Lato", fontSize: "12px",display:{xs:"none",md:"block"} }}>
      //       120 Questions
      //     </Typography>
      //     <Typography sx={{ fontFamily: "Lato", fontSize: "12px",display:{xs:"none",md:"block"} }}>
      //       30 Minutes
      //     </Typography>
      //   </Stack>
      // ),
      actionButton: (
        <Button
          variant="text"
          endIcon={<East />}
          sx={{
            textTransform: "none",
            fontFamily: "Lato",
            color: "var(--primary-color)",
            fontSize: "12px",
            padding: "2px",
          }}
        >
          Start now
        </Button>
      ),
    },
    {
      title: "Banking Mock Test ",
      icon: mocks.src,
      // subtitle: (
      //   <Stack flexDirection="row" gap="20px">
      //     <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
      //       Banking 2024
      //     </Typography>
      //     <Typography sx={{ fontFamily: "Lato", fontSize: "12px",display:{xs:"none",md:"block"} }}>
      //       120 Questions
      //     </Typography>
      //     <Typography sx={{ fontFamily: "Lato", fontSize: "12px",display:{xs:"none",md:"block"} }}>
      //       30 Minutes
      //     </Typography>
      //   </Stack>
      // ),
      actionButton: (
        <Button
          variant="text"
          endIcon={<East />}
          sx={{
            textTransform: "none",
            fontFamily: "Lato",
            color: "var(--primary-color)",
            fontSize: "12px",
            padding: "2px",
          }}
        >
          Start now
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
    <Stack gap="15px" flexDirection="row" flexWrap="wrap" width="100%">
      {goalDetails.map((item, index) => (
        <PrimaryCard key={index} {...item} />
      ))}
    </Stack>
    </Box>
  );
}
