import { Button, Stack, ButtonGroup } from "@mui/material";

export const MuiButtonGroup = () => {
  return (
    <Stack>
      <Stack direction="row">
        <Button variant="contained">Left</Button>
        <Button variant="contained">Middle</Button>
        <Button variant="contained">Right</Button>
      </Stack>
      <br />
      <Stack direction="row">
        <ButtonGroup variant="contained">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <br />
      <Stack direction="row">
        <ButtonGroup variant="outlined">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <br />
      <Stack direction="row">
        <ButtonGroup variant="text">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <br />
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="vertical contained secondary button group"
        >
          <Button onClick={() => alert("left clicked")}>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};
