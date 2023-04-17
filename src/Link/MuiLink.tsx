import { Stack, Link, Typography } from "@mui/material";
export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link href="#" underline="none" color="secondary">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
};
