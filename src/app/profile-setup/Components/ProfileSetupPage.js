"use client";
import Image from "next/image";
import StyledTextField from "@/src/Components/StyledTextField/StyledTextField";
import { Button, Stack, Typography } from "@mui/material";

export default function ProfileSetupPage() {
  return (
    <Stack
      width="50%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Stack
          sx={{
            width: "110px",
            height: "110px",
            backgroundColor: "var(--border-color)",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              width: "70px",
              height: "70px",
              backgroundColor: "var(--white)",
              borderRadius: "50px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="images/masters-logo.svg"
              alt="logo"
              width={48}
              height={48}
            />
          </Stack>
        </Stack>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "24px",
            fontWeight: "600",
            color: "var(--text1)",
            marginTop: "15px",
            marginBottom: "35px",
          }}
        >
          Sign up with your account
        </Typography>
        <Stack
          sx={{
            width: "350px",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <Stack gap={1}>
            <Typography
              sx={{
                fontSize: "Lato",
                fontSize: "20px",
                fontWeight: "500",
                color: "var(--text2)",
              }}
            >
              Username
            </Typography>
            <StyledTextField
              placeholder="Enter your email"
              sx={{ width: "350px" }}
            />
          </Stack>
          <Stack gap="10px">
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "20px",
                fontWeight: "500",
                color: "var(--text2)",
              }}
            >
              Select goal
            </Typography>
            <Stack gap="25px" flexDirection="row">
              <Stack gap="10px">
                <Stack
                  sx={{
                    width: "62px",
                    height: "62px",
                    backgroundColor: "var(--sec-color-acc-2)",
                    borderRadius: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="icons/gate_cse.svg"
                    alt=""
                    width={22}
                    height={25}
                  />
                </Stack>
                <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
                  GATE CSE
                </Typography>
              </Stack>
              <Stack gap="10px">
                <Stack
                  sx={{
                    width: "62px",
                    height: "62px",
                    backgroundColor: "var(--sec-color-acc-2)",
                    borderRadius: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="icons/placements.svg"
                    alt=""
                    width={22}
                    height={25}
                  />
                </Stack>
                <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
                  Placements
                </Typography>
              </Stack>
              <Stack gap="10px">
                <Stack
                  sx={{
                    width: "62px",
                    height: "62px",
                    backgroundColor: "var(--sec-color-acc-2)",
                    borderRadius: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="icons/banking.svg"
                    alt=""
                    width={22}
                    height={25}
                  />
                </Stack>
                <Typography sx={{ fontFamily: "Lato", fontSize: "12px" }}>
                  Banking
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "var(--primary-color)",
              borderRadius: "4px",
              fontFamily: "Lato",
              fontSize: "18px",
              height: "40px",
              width: "350px",
            }}
            disableElevation
          >
            Create
          </Button>
        </Stack>
      </Stack>
      <Stack
        flexDirection="row"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        sx={{ fontFamily: "Lato", padding: "20px", marginTop: "auto" }}
      >
        <Typography
          sx={{
            marginTop: "auto",
            marginRight: "auto",
            fontFamily: "Lato",
            fontSize: "16px",
            fontWeight: "700",
            color: "var(--text4)",
          }}
        >
          ©2025 @ The Masters Academy
        </Typography>
        <Stack flexDirection="row" alignItems="flex-end" gap="10px">
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "12px",
              fontWeight: "700",
              color: "var(--text4)",
            }}
          >
            Designed By
          </Typography>
          <Image
            src="images/incrix-logo.svg"
            alt="incrix"
            width={104}
            height={24}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
