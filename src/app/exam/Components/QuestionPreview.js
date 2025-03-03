import { ExpandMore } from "@mui/icons-material";
import { Button, Radio, Stack, Typography } from "@mui/material";

export default function QuestionPreview({ qNum, question, isCorrect }) {
  return (
    <Stack
      sx={{
        border: "1px solid var(--border-color)",
        borderRadius: "10px",
        padding: "15px",
        minHeight: "50vh",
        gap: "12px",
        width: "100%",
      }}
    >
      <Stack flexDirection="row" alignItems="center" gap="10px">
        <Typography
          sx={{ fontFamily: "Lato", fontSize: "14px", fontWeight: "700" }}
        >
          {qNum}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--sec-color-acc-1)",
            color: "var(--sec-color)",
            height: "22px",
            textTransform: "none",
            fontSize: "10px",
            fontFamily: "Lato",
            gap: "10px",
          }}
          disableElevation
        >
          MCQ
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--primary-color-acc-2)",
            color: "var(--primary-color)",
            height: "22px",
            textTransform: "none",
            fontSize: "10px",
            fontFamily: "Lato",
          }}
          disableElevation
        >
          Numerical Ability
        </Button>
      </Stack>
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography sx={{ fontFamily: "Lato", fontSize: "14px" }}>
          {question}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "12px",
            color: "var(--primary-color)",
          }}
        >
          +4
        </Typography>
      </Stack>
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        gap="20px"
        padding={{ xs: "0px", md: "10px" }}
      >
        <Stack
          gap="10px"
          sx={{
            border: "2px solid var(--primary-color)",
            padding: "10px",
            width: "520px",
            minHeight: "90px",
            borderRadius: "5px",
            justifyContent: "center",
          }}
        >
          <Stack flexDirection="row" alignItems="center" gap="10px">
            <Radio
              checked={true}
              sx={{
                color: "var(--border-color)",
                padding: "0px",
                "&.Mui-checked": { color: "var(--primary-color)" },
              }}
            />
            <Typography>49500</Typography>
          </Stack>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "12px",
              fontWeight: "700",
              color: "var(--primary-color)",
            }}
          >
            Correct Answer
          </Typography>
        </Stack>
        <Stack
          gap="10px"
          sx={{
            border: "1px solid var(--border-color)",
            padding: "10px",
            width: "520px",
            minHeight: "90px",
            borderRadius: "5px",
            justifyContent: "center",
          }}
        >
          <Stack flexDirection="row" alignItems="center" gap="10px">
            <Radio
              sx={{
                color: "var(--border-color)",
                padding: "0px",
                "&.Mui-checked": { color: "var(--primary-color)" },
              }}
            />
            <Typography>49500</Typography>
          </Stack>
        </Stack>
        <Stack
          gap="10px"
          sx={{
            border: "1px solid var(--border-color)",
            padding: "10px",
            width: "520px",
            minHeight: "90px",
            borderRadius: "5px",
            justifyContent: "center",
          }}
        >
          <Stack flexDirection="row" alignItems="center" gap="10px">
            <Radio
              sx={{
                color: "var(--border-color)",
                padding: "0px",
                "&.Mui-checked": { color: "var(--primary-color)" },
              }}
            />
            <Typography>49500</Typography>
          </Stack>
        </Stack>
        <Stack
          gap="10px"
          sx={{
            border: "1px solid var(--border-color)",
            padding: "10px",
            width: "520px",
            minHeight: "90px",
            borderRadius: "5px",
            justifyContent: "center",
          }}
        >
          <Stack flexDirection="row" alignItems="center" gap="10px">
            <Radio
              sx={{
                color: "var(--border-color)",
                padding: "0px",
                "&.Mui-checked": { color: "var(--primary-color)" },
              }}
            />
            <Typography>49500</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        flexDirection="row"
        alignItems="center"
        gap="5px"
        sx={{ cursor: "pointer" }}
      >
        <Typography
          sx={{ fontFamily: "Lato", fontSize: "14px", fontWeight: "700" }}
        >
          View Solution
        </Typography>
        <ExpandMore />
      </Stack>
    </Stack>
  );
}
