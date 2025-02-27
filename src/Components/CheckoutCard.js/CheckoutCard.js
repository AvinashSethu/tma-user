import { East } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import thumbnail from "@/public/images/thumbnail1.svg";

export default function CheckoutCard() {
  return (
    <Stack
      sx={{
        width: "320px",
        maxWidth: "340px",
        height: "145px",
        borderRadius: "20px",
      }}
    >
      <Stack
        flexDirection="row"
        sx={{
          width: "100%",
          height: "70%",
          backgroundColor: "var(--white)",
          borderRadius: "13px 13px 0px 0px",
          padding: "10px",
          gap: "10px",
        }}
      >
        <Image
          src={thumbnail.src}
          alt="defaultThumbnail"
          width={70}
          height={70}
          style={{ borderRadius: "10px" }}
        />
        <Stack gap="5px">
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "14px", fontWeight: "700" }}
          >
            General Aptitude
          </Typography>
          <Stack flexDirection="row" gap="5px">
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "12px",
                color: "var(--sec-color)",
              }}
            >
              ₹600
            </Typography>
            <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
              ₹800 (30% off)
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Button
        variant="text"
        endIcon={<East />}
        sx={{
          textTransform: "none",
          fontFamily: "Lato",
          fontSize: "14px",
          fontWeight: "700",
          color: "var(--sec-color)",
          width: "100%",
          borderRadius: "0px 0px 13px 13px",
          backgroundColor: "var(--sec-color-acc-1)",
          borderTop: "1px solid var(--border-color)",
        }}
      >
        Proceed to checkout
      </Button>
    </Stack>
  );
}
