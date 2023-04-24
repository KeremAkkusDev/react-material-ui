import { Stack, CircularProgress, LinearProgress } from "@mui/material";

export const MuiProgress = () => {
  return (
    <Stack>
      <Stack direction="row" spacing={3}>
        <CircularProgress />
        <CircularProgress color="success" />
        <CircularProgress variant="determinate" value={65} />
      </Stack>
      <br />
      <Stack spacing={5}>
        <LinearProgress />
        <LinearProgress color="success" />
        <LinearProgress variant="determinate" value={65} />
      </Stack>
    </Stack>
  );
};
