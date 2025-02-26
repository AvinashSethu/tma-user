import Header from "@/src/Components/Header/Header";
import StyledTextField from "@/src/Components/StyledTextField/StyledTextField";
import { Edit } from "@mui/icons-material";
import { Avatar, Button, Stack, Typography } from "@mui/material";

export default function Profile() {
  return (
    <Stack padding="20px" gap="20px">
      <Header />
      <Stack>
        <Typography
          sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
        >
          Profile
        </Typography>
      </Stack>
      <Stack
        sx={{
          border: "1px solid var(--border-color)",
          borderRadius: "10px",
          width: "80%",
          minHeight: "300px",
          backgroundColor: "var(--white)",
          padding: "20px",
          gap: "15px",
        }}
      >
        <Stack flexDirection="row" justifyContent="space-between">
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
        <Stack>
          <Avatar sx={{ width: "80px", height: "80px" }} />
        </Stack>
        <hr />
        <Stack flexDirection="row" justifyContent="space-between">
          <Stack gap="10px">
            <Typography>Name</Typography>
            <StyledTextField placeholder="Your Name" sx={{width:"250px"}} />
          </Stack>
          <Stack gap="10px">
            <Typography>Email</Typography>
            <StyledTextField placeholder="Your Email" sx={{width:"250px"}} />
          </Stack>
          <Stack gap="10px">
            <Typography>Phone</Typography>
            <StyledTextField placeholder="Your Phone" sx={{width:"250px"}} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
