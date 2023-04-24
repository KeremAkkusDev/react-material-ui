import {
  Skeleton,
  Stack,
  SkeletonProps,
  Box,
  Avatar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const skeletonProps: SkeletonProps = {
  animation: "wave",
  variant: "text",
  width: 300,
  height: 200,
  sx: {
    borderRadius: 2,
    bgcolor: "grey.300",
  },
};
export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton variant="rectangular" width={256} height={144} />
      ) : (
        <img
          src="https://source.unsplash.com/random"
          alt="skeleton"
          width={256}
          height={144}
        />
      )}
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        ) : (
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        )}
        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">Remy Sharp</Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
