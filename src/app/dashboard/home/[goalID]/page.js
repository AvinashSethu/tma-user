import GoalHead from "@/src/Components/GoalHead/GoalHead";
import { Stack, Typography } from "@mui/material";

export default function GoalID() {
  return (
    <Stack padding="20px" gap="20px">
      <GoalHead title="GATE CSE" />

      <Stack gap="15px">
        <Typography
          sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
        >
          Overview
        </Typography>
        <Stack flexDirection="row" gap="25px">
          <Stack
            sx={{
              border: "1px solid var(--border-color)",
              backgroundColor: "var(--white)",
              width: "900px",
              maxWidth:"950px",
              height: "600px",
              borderRadius: "10px",
              padding:"15px"
            }}
          ></Stack>
          <Stack
            sx={{
              borderRadius: "10px",
              backgroundColor: "var(--white)",
              width: "230px",
              height: "250px",
            }}
          ></Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
