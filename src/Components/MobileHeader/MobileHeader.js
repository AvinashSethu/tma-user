import { Avatar, Button, Stack } from "@mui/material";
import Image from "next/image";
import mastersLogo from "@/public/images/masters-logo.svg";

export default function MobileHeader() {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: "100%",
        height: "60px",
        padding: "10px",
        backgroundColor: "var(--white)",
        marginTop:"15px",
        display: { xs: "flex", md: "none" }
      }}
    >
      <Stack>
        <Image
          src={mastersLogo.src}
          alt="logo"
          width={60}
          height={26}
        />
      </Stack>
      <Stack>
        <Avatar sx={{ width: "25px", height: "25px" }} />

      </Stack>
    </Stack>
  );
}
