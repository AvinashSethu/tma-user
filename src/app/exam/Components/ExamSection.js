import { Stack, Typography, Box, Button } from "@mui/material";

export default function ExamSection() {
  const questions = [
    { number: 1, status: "answered" },
    { number: 2, status: "marked" },
    { number: 3, status: "unanswered" },
    { number: 4, status: "unanswered" },
    { number: 5, status: "unanswered" },
    { number: 6, status: "unanswered" },
    { number: 7, status: "unanswered" },
    { number: 8, status: "unanswered" },
    { number: 9, status: "unanswered" },
    { number: 10, status: "unanswered" },
  ];

  return (
    <Stack gap="10px">
      <Typography
        sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
      >
        NDA - Section 1
      </Typography>

      <Stack flexDirection="row" gap="10px" alignItems="center">
        <Stack
          sx={{
            width: 16,
            height: 16,
            bgcolor: "var(--primary-color)",
            borderRadius: 1,
          }}
        ></Stack>
        <Typography fontSize="14px" fontFamily= "Lato">1 answered</Typography>
        <Stack
          sx={{
            width: 16,
            height: 16,
            bgcolor: "var(--sec-color)",
            borderRadius: 1,
          }}
        />
        <Typography fontSize="14px" fontFamily= "Lato">1 marked</Typography>
        <Stack
          sx={{
            width: 16,
            height: 16,
            border: "1px solid var(--border-color)",
            borderRadius: 1,
          }}
        />
        <Typography fontSize="14px" fontFamily= "Lato">10 unanswered</Typography>
      </Stack>

      <Stack flexDirection="row" flexWrap="wrap" gap={4}>
        {questions.map((q) => (
          <Button
            key={q.number}
            variant="outlined"
            sx={{
              width: 35,
              height: 35,
              minWidth: 35,
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "14px",
              fontFamily:"Lato",
              borderColor:
                q.status === "answered"
                  ? "var(--primary-color)"
                  : q.status === "marked"
                  ? "var(--sec-color)"
                  : "var(--border-color)",
              backgroundColor:
                q.status === "answered"
                  ? "var(--primary-color-acc-2)"
                  : q.status === "marked"
                  ? "var(--sec-color-acc-1)"
                  : "transparent",
              color: "var(--text2)",
            }}
          >
            {q.number}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}
