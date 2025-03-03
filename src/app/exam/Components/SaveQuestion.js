"use client";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SaveQuestion() {
  const router = useRouter();
  return (
    <Stack
      flexDirection="row"
      sx={{
        border: "1px solid var(--border-color)",
        borderRadius: "10px",
        minHeight: "60px",
        width: "100%",
        backgroundColor: "var(--white)",
        marginTop: "auto",
        padding: "10px",
      }}
    >
      <Stack flexDirection="row" gap="10px">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--sec-color-acc-1)",
            textTransform: "none",
            width: "140px",
            height: "40px",
            color: "var(--sec-color)",
            display: { xs: "none", md: "block" },
          }}
          disableElevation
        >
          Mark for review
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--border-color)",
            textTransform: "none",
            width: "140px",
            height: "40px",
            color: "var(--text3)",
          }}
          disableElevation
        >
          Clear response
        </Button>
      </Stack>
      <Button
        variant="contained"
       
        sx={{
          backgroundColor: "var(--primary-color)",
          textTransform: "none",
          width: "120px",
          height: "40px",
          marginLeft: "auto",
        }}
        disableElevation
      >
        Save & Next
      </Button>
    </Stack>
  );
}
