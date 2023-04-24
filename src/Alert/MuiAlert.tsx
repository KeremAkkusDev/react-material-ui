import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      </Stack>

      <Stack spacing={2}>
        <Alert variant="outlined" severity="error">
          This is an error alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="info">
          This is an info alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="success">
          This is a success alert — check it out!
        </Alert>
      </Stack>
      <Stack spacing={2}>
        <Alert
          variant="filled"
          severity="error"
          onClose={() => {
            alert("Close alert");
          }}
        >
          <AlertTitle>Error</AlertTitle>
          This is an error alert — check it out!
        </Alert>
        <Alert variant="filled" severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — check it out!
        </Alert>
        <Alert variant="filled" severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert — check it out!
        </Alert>
        <Alert
          variant="filled"
          severity="success"
          icon={<CheckIcon fontSize="small" />}
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          <AlertTitle>Success</AlertTitle>
          This is a success alert — check it out!
        </Alert>
      </Stack>
    </Stack>
  );
};
