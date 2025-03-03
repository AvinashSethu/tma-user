import { Stack, Typography } from "@mui/material";
import ExamQuestion from "../../../Components/ExamQuestion";
import ExamHeader from "../../../Components/ExamHeader";
import SaveQuestion from "../../../Components/SaveQuestion";
import ExamSection from "../../../Components/ExamSection";

export default function Exam() {
  return (
    <Stack
      sx={{ backgroundColor: "var(--sec-color-acc-2)", minHeight: "100vh" }}
    >
      <ExamHeader />
      <Stack flexDirection="row" sx={{ padding: "12px",display:{xs:"flex",md:"none"} }}>
        
        <Typography>Q1 of 36</Typography>
        <Typography sx={{ marginLeft: "auto" }}>00:14:59</Typography>
      </Stack>
      <Stack flexDirection="row" width="100%">
        <Stack
          sx={{
            padding: { xs: "12px", md: "30px" },
            width: { xs: "100%", md: "75%" },
            minHeight: "89vh",
          }}
        >
          <ExamQuestion />
          <SaveQuestion />
        </Stack>
        <Stack
          sx={{
            padding: "20px",
            width: "25%",
            backgroundColor: "var(--white)",
            display: { xs: "none", md: "block" },
          }}
        >
          <ExamSection />
        </Stack>
      </Stack>
    </Stack>
  );
}
