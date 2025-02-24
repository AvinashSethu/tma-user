import { Stack } from "@mui/material";
import SignInBanner from "./Components/SignInBanner";
import SignupPage from "./Components/SignupPage";

export default function SignUp() {
  return (
    <Stack flexDirection="row" sx={{ width: "100%" }}>
      <SignupPage />
      <SignInBanner />
    </Stack>
  );
}
