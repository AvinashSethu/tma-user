import { Stack, Typography } from "@mui/material";

export default function LessonCard({
  iconStart,
  iconEnd,
  LessonName,
  duration,
  now,
}) {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      sx={{
        width: "340px",
        maxWidth: "350px",
        maxHeight: "70px",
        height: "70px",
        padding: "10px",
        backgroundColor: now ? "var(--sec-color-acc-1)" : "var(--white)",
        borderRadius: "8px",
        gap: "12px",
      }}
    >
      {iconStart}
      <Stack gap="2px">
        <Typography sx={{ fontFamily: "Lato", fontSize: "16px" }}>
          {LessonName}
        </Typography>
        <Typography
          sx={{ fontFamily: "Lato", fontSize: "12px", color: "var(--text3)" }}
        >
          {duration}
        </Typography>
      </Stack>
      <Stack sx={{ marginLeft: "auto" }}>{iconEnd}</Stack>
    </Stack>
  );
}
