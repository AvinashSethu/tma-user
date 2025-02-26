import { Stack } from "@mui/material";
import SignInPage from "./Components/SignInPage";
import SignInBanner from "../signUp/Components/SignInBanner";

export default function SignIn() {
  return (
    <Stack flexDirection="row" width="100%">
      <SignInPage />
      <SignInBanner />
    </Stack>
  );
}
