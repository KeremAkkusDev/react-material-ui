import { Box, Stack, Divider } from "@mui/material";
export const MuiLayout = () => {
  return (
    <Stack
      sx={{ border: "1px solid black" }}
      direction="row-reverse"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": { backgroundColor: "primary.light" },
        }}
      >
        Hello world
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100px"
        width="100px"
        bgcolor="success.light"
        color="white"
        p={2}
      >
        Hello world
      </Box>
    </Stack>
  );
};
