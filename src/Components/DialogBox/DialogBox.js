import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";

export default function DialogBox({
  children,
  isOpen,
  title,
  icon,
  actionButton,
}) {
  return (
    <Dialog
      open={isOpen}
      disableScrollLock={true}
      TransitionComponent={Slide}
      sx={{
        "& .MuiDialog-paper": {
          minWidth: "600px",
          maxWidth: "650px",
          borderRadius: "10px",
          border: "1px solid",
          borderColor: "var(--border-color)",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Lato",
          fontSize: "20px",
          fontWeight: "700",
          paddingBottom: "0px",
        }}
      >
        {title}
        {icon}
      </DialogTitle>
      <DialogContent sx={{ padding: "0px" }}>{children}</DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Stack>{actionButton}</Stack>
      </DialogActions>
    </Dialog>
  );
}
