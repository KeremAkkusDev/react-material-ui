import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export const MuiBreadcrumbs = () => {
  return (
    <>
      <Box sx={{ m: 4 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Material-UI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/getting-started/installation/"
          >
            Core
          </Link>
          <Typography color="text.primary">Breadcrumb</Typography>
        </Breadcrumbs>
      </Box>
      <Box sx={{ m: 4 }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link underline="hover" href="/">
            Home
          </Link>
          <Link underline="hover" href="/">
            Catalog
          </Link>
          <Link underline="hover" href="/">
            Accessories
          </Link>
          <Typography color="text.primary">New Collection</Typography>
        </Breadcrumbs>
      </Box>
    </>
  );
};
