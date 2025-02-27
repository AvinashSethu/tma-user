import { Stack, Typography } from "@mui/material";
import institute from "@/public/icons/institute1.svg";
import banking from "@/public/icons/banking.svg";
import aGrade from "@/public/icons/aGrade.svg";
import book from "@/public/icons/book.svg";
import Image from "next/image";

export default function InfoCard() {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        border: "1px solid var(--border-color)",
        borderRadius: "6px",
        backgroundColor: "var(--white)",
        padding: "30px",
        minHeight: "120px",
      }}
    >
      <Stack flexDirection="row" alignItems="center" gap="15px">
        <Stack
          sx={{
            width: "60px",
            height: "60px",
            backgroundColor: "var(--sec-color-acc-1)",
            borderRadius: "15px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <Image src={institute.src} alt="institute" width={34} height={28} />    

        </Stack>
        <Stack>
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "14px", fontWeight: "400" }}
          >
            Trained Students
          </Typography>
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
          >
            1,00,000 +
          </Typography>
        </Stack>
      </Stack>
      <Stack flexDirection="row" alignItems="center" gap="15px">
        <Stack
          sx={{
            width: "60px",
            height: "60px",
            backgroundColor: "var(--sec-color-acc-1)",
            borderRadius: "15px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <Image src={aGrade.src} alt="institute" width={34} height={26} />
        </Stack>
        <Stack>
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "14px", fontWeight: "400" }}
          >
            Tests Attempted
          </Typography>
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
          >
            70K+
          </Typography>
        </Stack>
      </Stack>
      <Stack flexDirection="row" alignItems="center" gap="15px">
        <Stack
          sx={{
            width: "60px",
            height: "60px",
            backgroundColor: "var(--sec-color-acc-1)",
            borderRadius: "15px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <Image src={book.src} alt="institute" width={34} height={26} />
        </Stack>
        <Stack>
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "14px", fontWeight: "400" }}
          >
            Courses Accessed
          </Typography>
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
          >
            60+
          </Typography>
        </Stack>
      </Stack>
      <Stack flexDirection="row" alignItems="center" gap="15px">
        <Stack
          sx={{
            width: "60px",
            height: "60px",
            backgroundColor: "var(--sec-color-acc-1)",
            borderRadius: "15px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <Image src={banking.src} alt="banking" width={34} height={26} />
        </Stack>
        <Stack>
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "14px", fontWeight: "400" }}
          >
            Institutions
          </Typography>
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
          >
            30
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
