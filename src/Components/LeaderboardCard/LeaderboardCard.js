import { Avatar, Stack, Typography } from "@mui/material";

export default function LeaderboardCard({ name }) {
  return (
    <Stack
      flexDirection="row"
      sx={{
        width: "310px",
        height: "70px",
        backgroundColor: "var(--sec-color-acc-2)",
        borderRadius: "10px",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <Stack flexDirection="row" alignItems="center" gap="10px">
        <Stack
          sx={{
            fontSize: "14px",
            color: "var(--text3)",
            border: "1px solid var(--border-color)",
            borderRadius: "50%",
            width: "24px",
            height: "24px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          1
        </Stack>
        <Avatar />
        <Stack gap="5px">
          <Typography sx={{ fontFamily: "Lato", fontSize: "14px" }}>
            {"name"}
          </Typography>
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "10px", color: "var(--text3)" }}
          >
            {"Points"}
          </Typography>
        </Stack>
      </Stack>
      <Avatar />
    </Stack>
  );
}
