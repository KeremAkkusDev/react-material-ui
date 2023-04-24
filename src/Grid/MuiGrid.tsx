import { Grid, Box } from "@mui/material";
export const MuiGrid = () => {
  return (
    <Grid container my={4} spacing={2} columnSpacing={1}>
      <Grid item xs={9}>
        <Box bgcolor="primary.light" p={2}>
          <h1>Grid Item 1</h1>
        </Box>
      </Grid>
      <Grid item xs>
        <Box bgcolor="primary.light" p={2}>
          <h1>Grid Item 2</h1>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box bgcolor="primary.light" p={2}>
          <h1>Grid Item 3</h1>
        </Box>
      </Grid>
      <Grid item xs>
        <Box bgcolor="primary.light" p={2}>
          <h1>Grid Item 4</h1>
        </Box>
      </Grid>
    </Grid>
  );
};
