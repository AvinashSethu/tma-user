import { Avatar, Button, Stack } from "@mui/material";
import Image from "next/image";

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
          src={process.env.NEXT_PUBLIC_LOGO_URL}
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
