import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={140} color="success">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="error">
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary" invisible={false}>
        <MailIcon />
      </Badge>
    </Stack>
  );
};
