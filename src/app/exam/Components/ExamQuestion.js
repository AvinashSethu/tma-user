import { Button, Radio, Stack, Typography } from "@mui/material";

export default function ExamQuestion() {
  return (
    <Stack
      sx={{
        border: "1px solid var(--border-color)",
        borderRadius: "10px",
        minHeight: "350px",
        width: "100%",
        backgroundColor: "var(--white)",
        padding: "20px",
        gap: "10px",
      }}
    >
      <Stack flexDirection="row" alignItems="center" gap="10px">
        <Typography
          sx={{ fontFamily: "Lato", fontSize: "14px", fontWeight: "700" }}
        >
          Q1
        </Typography>
      </Stack>
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography sx={{ fontFamily: "Lato", fontSize: "14px" }}>
          {"question"}
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
      <Stack flexDirection="row" flexWrap="wrap" gap="20px">
        <Stack
          gap="10px"
          sx={{
            border: "1px solid var(--border-color)",
            padding: "10px",
            width: "490px",
            minHeight: "70px",
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
                "&.Mui-checked": { color: "var(--text3)" },
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
            width: "490px",
            minHeight: "70px",
            borderRadius: "5px",
            justifyContent: "center",
          }}
        >
          <Stack flexDirection="row" alignItems="center" gap="10px">
            <Radio
              sx={{
                color: "var(--border-color)",
                padding: "0px",
                "&.Mui-checked": { color: "var(--text3)" },
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
            width: "490px",
            minHeight: "70px",
            borderRadius: "5px",
            justifyContent: "center",
          }}
        >
          <Stack flexDirection="row" alignItems="center" gap="10px">
            <Radio
              sx={{
                color: "var(--border-color)",
                padding: "0px",
                "&.Mui-checked": { color: "var(--text3)" },
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
            width: "490px",
            minHeight: "70px",
            borderRadius: "5px",
            justifyContent: "center",
          }}
        >
          <Stack flexDirection="row" alignItems="center" gap="10px">
            <Radio
              sx={{
                color: "var(--border-color)",
                padding: "0px",
                "&.Mui-checked": { color: "var(--text3)" },
              }}
            />
            <Typography>49500</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
