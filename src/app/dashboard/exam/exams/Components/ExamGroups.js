import { Button, Stack, Typography } from "@mui/material";

export default function ExamGroups() {
  return (
    <Stack>
      <Stack
        sx={{
          border: "1px solid var(--border-color)",
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "var(--white)",
          gap: "10px",
        }}
      >
        <Stack gap="10px">
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "14px", fontWeight: "700" }}
          >
            Weekly Test
          </Typography>
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "14px", fontWeight: "600" }}
          >
            Attempt the weekly test & unlock your rewards!
          </Typography>
          <Typography>100+ learners competing</Typography>
          <Stack>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "var(--primary-color)",
              }}
            >
              Attempt(1/10)
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
