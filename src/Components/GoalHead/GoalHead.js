"use client";
import { Button, Skeleton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import gate_cse from "@/public/icons/gate_cse.svg";
import { ArrowBackIosRounded, East } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function GoalHead({ goal, goalLoading,title }) {
  const router = useRouter();

  return (
    <Stack
      sx={{
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        border: "1px solid var(--border-color)",
        borderRadius: "10px",
        backgroundColor: "var(--white)",
        padding: "20px",
        height: "60px",
      }}
    >
      <Stack flexDirection="row" alignItems="center" gap="15px">
        <ArrowBackIosRounded
          onClick={() => {
            router.back();
          }}
          sx={{
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "700",
          }}
        />
        <Stack
          sx={{
            width: "40px",
            height: "40px",
            backgroundColor: "var(--sec-color-acc-1)",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={gate_cse.src} alt="icon" width="16" height="17" />
        </Stack>
        <Typography
          sx={{ fontFamily: "Lato", fontSize: "14px", fontWeight: "700" }}
        >{title}
          {/* {!goalLoading ? (
            goal.title ? (
              goal.title
            ) : (
              "Goal not found"
            )
          ) : (
            <Skeleton variant="text" animation="wave" width="100px" />
          )} */}
        </Typography>
      </Stack>
      <Button
        variant="text"
        endIcon={<East />}
        sx={{
          textTransform: "none",
          width: "120px",
          color: "var(--primary-color)",
          fontFamily: "Lato",
          fontSize: "14px",
          fontWeight: "700",
          borderRadius: "5px",
        }}
        disableElevation
      >
        Get Pro
      </Button>
    </Stack>
  );
}
