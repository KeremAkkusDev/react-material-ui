import { Stack, Rating } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack>
      <Stack spacing={2}>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={handleChange}
          precision={0.5}
          size="large"
          icon={<FavoriteIcon fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      </Stack>
      <br />
      <Stack spacing={2}>
        <Rating name="read-only" value={4} readOnly />
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
        <Rating name="disabled" defaultValue={2} disabled />
      </Stack>
    </Stack>
  );
};
