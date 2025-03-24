import Header from "@/src/Components/Header/Header";
import MobileHeader from "@/src/Components/MobileHeader/MobileHeader";
import StyledTextField from "@/src/Components/StyledTextField/StyledTextField";
import { Circle, Edit, Logout } from "@mui/icons-material";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import incrix_logo from "@/public/images/incrix-logo.svg";
import Image from "next/image";

export default function Profile() {
  return (
    <>
      <MobileHeader />
      <Stack
        padding={{ xs: "10px", md: "20px" }}
        gap="20px"
        sx={{ minHeight: "100vh", overflowY: "visible" }}
      >
        <Stack sx={{ display: { xs: "none", md: "block" } }}>
          <Header />
        </Stack>
        <Stack
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
          >
            Profile
          </Typography>
          <Button
            variant="text"
            endIcon={<Edit />}
            sx={{
              textTransform: "none",
              fontFamily: "Lato",
              fontSize: "16px",
              color: "var(--primary-color)",
              padding: "2px",
              display: { xs: "flex", md: "none" },
            }}
          >
            Edit
          </Button>
        </Stack>
        <Stack
          sx={{
            border: "1px solid var(--border-color)",
            borderRadius: "10px",
            width: { sx: "100%", md: "80%" },
            minHeight: "300px",
            backgroundColor: "var(--white)",
            padding: "20px",
            gap: "15px",
          }}
        >
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "18px",
                fontWeight: "700",
                color: "var(--text3)",
              }}
            >
              Personal details
            </Typography>
            <Button
              variant="text"
              endIcon={<Edit />}
              sx={{
                textTransform: "none",
                fontFamily: "Lato",
                fontSize: "16px",
                color: "var(--primary-color)",
                padding: "2px",
              }}
            >
              Edit
            </Button>
          </Stack>
          <Stack sx={{ alignItems: { xs: "center", md: "flex-start" } }}>
            <Avatar sx={{ width: "80px", height: "80px" }} />
          </Stack>
          <Stack sx={{ display: { xs: "none", md: "block" } }}>
            <hr />
          </Stack>
          <Stack
            gap="20px"
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: "wrap",
            }}
          >
            <Stack gap="10px">
              <Typography>Name</Typography>
              <StyledTextField placeholder="Your Name" sx={{ width: "100%" }} />
            </Stack>
            <Stack gap="10px">
              <Typography>Email</Typography>
              <StyledTextField
                placeholder="Your Email"
                sx={{ width: "100%" }}
              />
            </Stack>
            <Stack gap="10px">
              <Typography>Phone</Typography>
              <StyledTextField
                placeholder="Your Number"
                sx={{ width: "100%" }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Button
          variant="contained"
          startIcon={<Logout />}
          sx={{
            textTransform: "none",
            fontFamily: "Lato",
            fontSize: "16px",
            backgroundColor: "var(--delete-color)",
            borderRadius: "6px",
            width: "150px",
            display: { xs: "flex", sm: "none" },
          }}
        >
          Logout
        </Button>
        <Stack
          sx={{
            marginTop: "auto",
            gap: "5px",
            paddingBottom: { xs: "50px", md: "0px" },
          }}
        >
          <Image src={incrix_logo} alt="logo" style={{ color: "red" }} />
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: "700",
              color: "var(--text3)",
            }}
          >
            Crafted by Incrix Techlutions LLP, Tamil Nadu.
          </Typography>
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "12px", color: "var(--text3)" }}
          >
            Version: 1.0.1
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
