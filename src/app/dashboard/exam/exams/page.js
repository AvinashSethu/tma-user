import Header from "@/src/Components/Header/Header";
import { Stack, Typography } from "@mui/material";
import TestSeries from "./Components/TestSeries";

export default function Exams() {
    
  return (
    <Stack padding="20px" gap="20px">
      <Header />
      <Stack gap="20px">
        <Typography
          sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
        >
          Test Series
        </Typography>
        <TestSeries />
      </Stack>
    </Stack>
  );
}
