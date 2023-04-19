import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export const MuiTooltip = () => {
  return (
    <Tooltip
      title="Delete"
      placement="right"
      arrow
      enterDelay={500}
      leaveDelay={200}
    >
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};
