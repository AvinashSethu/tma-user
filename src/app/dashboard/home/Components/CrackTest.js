import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import institute from "@/public/icons/institute1.svg";
import agrade from "@/public/icons/aGrade.svg";
import crackExamBanner from "@/public/images/crackExamBanner.svg";

export default function CrackTest() {
  return (
    <Stack
      flexDirection="row"
      sx={{
        border: "1px solid var(--border-color)",
        borderRadius: "13px",
        backgroundColor: "var(--white)",
        width: "100%",
        height: "550px",
        padding: "30px 40px",
        justifyContent: "space-between",
      }}
    >
      <Stack sx={{ gap: "25px", width: "550px" }}>
        <Stack
          sx={{
            borderBottom: "1px solid var(--text4)",
            gap: "20px",
            width: "550px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "24px",
              fontWeight: "700",
              color: "var(--text3)",
            }}
          >
            Crack GATE and other exams with our learning platform
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "18px",
              color: "var(--text3)",
              width: "400px",
            }}
          >
            Get subscription and access unlimited exams and stream courses from
            our experienced faculties
          </Typography>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "var(--primary-color)",
              width: "350px",
              marginTop: "auto",
              marginBottom: "25px",
            }}
            disableElevation
          >
            Subscribe
          </Button>
        </Stack>
        <Stack flexDirection="row" gap="25px">
          <Stack gap="10px">
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
              <Image src={institute.src} alt="" width={34} height={28} />
            </Stack>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "700",
                color: "var(--text3)",
              }}
            >
              Practise Tests
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "12px",
                color: "var(--text3)",
                width: "170px",
              }}
            >
              Enhance your preparation with daily access to unlimited practice
              tests, helping you build confidence and improve your accuracy.
            </Typography>
          </Stack>
          <Stack gap="10px">
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
              <Image
                src={agrade.src}
                alt=""
                width={26}
                height={26}
                style={{ color: "red" }}
              />
            </Stack>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "700",
                color: "var(--text3)",
              }}
            >
              Mock Tests
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "12px",
                color: "var(--text3)",
                width: "170px",
              }}
            >
              Take regular mock tests to evaluate your preparation and receive
              detailed analytics to track progress and improve performance.
            </Typography>
          </Stack>
          <Stack gap="10px">
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
              <Image
                src={agrade.src}
                alt=""
                width={26}
                height={26}
                style={{ color: "red" }}
              />
            </Stack>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "700",
                color: "var(--text3)",
              }}
            >
              Learning Path
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "12px",
                color: "var(--text3)",
                width: "170px",
              }}
            >
              Follow well-designed courses aligned with academic and competitive
              exam syllabi, ensuring focused and effective preparation.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Image
          src={crackExamBanner.src}
          alt=""
          width={500}
          height={500}
        />
      </Stack>
    </Stack>
  );
}
