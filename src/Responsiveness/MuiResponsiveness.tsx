import { Box, Stack } from "@mui/material";

export const MuiResponsiveness = () => {
  return (
    <Box>
      <Box
        sx={{
          width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 },
          height: "300px",
          bgcolor: "secondary.main",
        }}
      ></Box>
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Box
          sx={{ width: "200px", height: "200px", bgcolor: "primary.main" }}
        />
        <Box
          sx={{ width: "200px", height: "200px", bgcolor: "primary.main" }}
        />
        <Box
          sx={{ width: "200px", height: "200px", bgcolor: "primary.main" }}
        />
        <Box
          sx={{ width: "200px", height: "200px", bgcolor: "primary.main" }}
        />
        <Box
          sx={{ width: "200px", height: "200px", bgcolor: "primary.main" }}
        />
        <Box
          sx={{ width: "200px", height: "200px", bgcolor: "primary.main" }}
        />
      </Stack>
    </Box>
  );
};
