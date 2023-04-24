import { Button, Stack } from "@mui/material";
export const MuiButton = () => {
  return (
    <>
      <Stack spacing={4}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>

        <Stack spacing={2} direction={"row"}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>


        {/* Button type */}
        <Stack spacing={2} direction={"row"}>
          <Button variant="contained" color="primary">
            Contained
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
        </Stack>


        {/* Button Size */}
        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>
        <Stack spacing={2} direction={"row"}>
            <Button variant="contained" startIcon={"ICON"}> Send </Button>
            <Button variant="contained" endIcon={"ICON"}> Send </Button>
        </Stack>

      </Stack>
    </>
  );
};
