import { Stack } from "@mui/material";
import Image from "next/image";

export default function SignInBanner() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "50%",
        height: "100vh",
        background: "linear-gradient(45deg, #ff3c00, #7a00ff)",
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <Image
          src={"/images/SignInBanner1.svg"}
          alt="banner"
          width={400}
          height={400}
        />
        <Image
          src="images/SignInBanner2.svg"
          alt="banner"
          width={800}
          height={330}
          style={{ marginTop: "auto" }}
        />
      </Stack>
    </Stack>
  );
}
