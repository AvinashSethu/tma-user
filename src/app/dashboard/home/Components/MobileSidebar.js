import { Drawer, Stack, IconButton, Typography } from "@mui/material";
import { Menu, Close, ListRounded } from "@mui/icons-material";
import { useState } from "react";
import GoalContents from "./GoalContents";

export default function MobileSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Overview");

  return (
    <>
      <IconButton
        sx={{
          position: "fixed",
          bottom: 60,
          right: 16,
          display: { xs: "flex", md: "none" },
          backgroundColor: "var(--primary-color)",
          color: "white",
        }}
        onClick={() => setSidebarOpen(true)}
      >
        <ListRounded sx={{ transform: "rotate(180deg)" }} />
      </IconButton>

      <Drawer
        anchor="right"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      >
        <Stack width="300px" padding="20px">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontFamily="Lato" fontSize="16px" fontWeight="700">
              Contents
            </Typography>
            <IconButton onClick={() => setSidebarOpen(false)}>
              <Close />
            </IconButton>
          </Stack>

          <GoalContents activeItem={activeItem} setActiveItem={setActiveItem} />
        </Stack>
      </Drawer>
    </>
  );
}
