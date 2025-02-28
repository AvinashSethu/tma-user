"use client";
import { Card, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function SecondaryCard({
  icon,
  title,
  subTitle,
  cardWidth,
  onClick,
  button,
}) {
  return (
    <Card
      sx={{
        width: cardWidth,
        // height: "80px",
        border: "1px solid",
        borderColor: "var(--border-color)",
        borderRadius: "10px",
        padding: "9px",
      }}
      elevation={0}
      onClick={onClick}
    >
      <Stack flexDirection="row">
        <Stack flexDirection="row" alignItems="center" gap="15px">
          <Stack
            sx={{
              minWidth: "62px",
              height: "60px",
              backgroundColor: "var(--sec-color-acc-1)",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={icon} alt="icon" width={26} height={26} />
          </Stack>
          <Stack gap="8px">
            <Typography
              sx={{
                color: "var(text4)",
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: "var(text4)",
                fontFamily: "Lato",
                fontSize: "12px",
              }}
            >
              {subTitle}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          marginLeft="auto"
          alignItems="center"
          flexDirection="row"
          gap="10px"
        >
          {button}
        </Stack>
      </Stack>
    </Card>
  );
}
