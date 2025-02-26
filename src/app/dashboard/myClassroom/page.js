"use client";
import DialogBox from "@/src/Components/DialogBox/DialogBox";
import Header from "@/src/Components/Header/Header";
import SecondaryCard from "@/src/Components/SecondaryCard/SecondaryCard";
import StyledTextField from "@/src/Components/StyledTextField/StyledTextField";
import { Close, East, Groups, MoreVert } from "@mui/icons-material";
import {
  Button,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MyClassroom() {
    const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogOpen = () => setIsDialogOpen(true);
  const dialogClose = () => setIsDialogOpen(false);
  const classroomList = [
    {
      title: "ECE 3rd year",
      icon: <Groups fontSize="large" sx={{ color: "var(--sec-color)" }} />,
      button: <MoreVert />,
    },
    {
      title: "Placement PSREC",
      icon: <Groups fontSize="large" sx={{ color: "var(--sec-color)" }} />,
      button: <MoreVert />,
    },
  ];
  return (
    <Stack padding="20px" gap="20px">
      <Header />
      <Stack
        flexDirection="row"
        sx={{ width: "100%", justifyContent: "space-between" }}
      >
        <Typography
          sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
        >
          My Classroom
        </Typography>
        <Button
          variant="contained"
          onClick={dialogOpen}
          sx={{
            textTransform: "none",
            backgroundColor: "var(--primary-color)",
          }}
          disableElevation
        >
          Join Classroom
        </Button>
      </Stack>
      {classroomList.length > 0
        ? classroomList.map((item, index) => (
            <SecondaryCard
              key={index}
              title={
                <span
                  onClick={() => {
                    router.push(
                      `/dashboard/myClassroom/1`
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {item.title}
                </span>
              }
              icon={item.icon}
              button={item.button}
            />
          ))
        : "No"}
      <JoinClassroomDialog
        isDialogOpen={isDialogOpen}
        dialogClose={dialogClose}
      />
    </Stack>
  );
}

const JoinClassroomDialog = ({ isDialogOpen, dialogClose }) => {
  return (
    <DialogBox
      isOpen={isDialogOpen}
      title="Join Classroom"
      icon={
        <IconButton
          onClick={dialogClose}
          sx={{ marginLeft: "auto", padding: "3px", borderRadius: "5px" }}
        >
          <Close sx={{ color: "var(--text3)" }} />
        </IconButton>
      }
      actionButton={
        <Button
          variant="text"
          endIcon={<East />}
          sx={{
            textTransform: "none",
            fontFamily: "Lato",
            fontSize: "12px",
            color: "var(--primary-color)",
          }}
        >
          Join batch
        </Button>
      }
    >
      <DialogContent>
        <Stack>
          <StyledTextField placeholder="Enter batch Code" />
        </Stack>
      </DialogContent>
    </DialogBox>
  );
};
