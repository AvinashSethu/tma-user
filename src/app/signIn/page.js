import { Stack } from "@mui/material";
import SignInBanner from "../signUp/Components/SignInBanner";
import SignInPage from "./Components/SignInPage";

export default function SignIn() {
  return (
    <Stack flexDirection="row" width="100%">
      <SignInPage />
      <SignInBanner />
    </Stack>
  );
}
