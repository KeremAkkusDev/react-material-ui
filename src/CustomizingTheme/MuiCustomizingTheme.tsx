import { Box } from "@mui/material";
import { styled } from "@mui/material";

const MyBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.palette.neutral.darker,
}));

export const MuiCustomizingTheme = () => {
  return (
    <>
      <Box
        sx={{ bgcolor: "primary.main", color: "primary.contrastText", p: 2 }}
      >
        Customizing Theme
      </Box>
      <MyBox />
    </>
  );
};
