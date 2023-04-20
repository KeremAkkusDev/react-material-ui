import { Button, Snackbar, Stack, Alert, AlertProps } from "@mui/material";
import { useState, forwardRef } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <Alert ref={ref} elevation={6} variant="filled" {...props} />;
});

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        message="Form submitted successfully"
        open={open}
        onClose={handleClose}
        autoHideDuration={4000}
        action={
          <Button color="inherit" size="small" onClick={handleClose}>
            UNDO
          </Button>
        }
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      />

      <Stack>
        <Snackbar
          open={open}
          onClose={handleClose}
          autoHideDuration={6000}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <SnackbarAlert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </SnackbarAlert>
        </Snackbar>
      </Stack>
    </Stack>
  );
};
