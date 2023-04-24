import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";

export const MuiChip = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3", "Chip 4"]);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack spacing={1} direction="row">
      <Chip label="Basic" icon={<FaceIcon />} color="primary" />
      <Chip
        label="Clickable"
        color="secondary"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
        onClick={() => alert("Clicked")}
      />
      <Chip label="Deletable" color="error" onDelete={() => alert("Deleted")} />
      <Chip
        label="Clickable and Deletable"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Deleted")}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
