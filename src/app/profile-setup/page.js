import { Stack } from "@mui/material";
import SignInBanner from "../signUp/Components/SignInBanner";
import ProfileSetupPage from "./Components/ProfileSetupPage";

export default function ProfileSetup() {
  return (
    <Stack flexDirection="row" sx={{ width: "100%" }}>
      <ProfileSetupPage />
      <SignInBanner />
    </Stack>
  );
}
