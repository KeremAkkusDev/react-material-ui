import { Stack, Avatar, AvatarGroup } from "@mui/material";
export const MuiAvatar = () => {
  return (
    <Stack>
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://randomuser.me/api/portraits/men/79.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
      </Stack>
      <br />
      <Stack direction="row" spacing={2}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>KA</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>MD</Avatar>
          <Avatar sx={{ bgcolor: "error.light" }}>OK</Avatar>
          <Avatar>MC</Avatar>
        </AvatarGroup>
      </Stack>
      <br />
      <Stack direction="row" spacing={2}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 60, height: 60 }}
        >
          KA
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "primary.light", width: 60, height: 60 }}
        >
          MC
        </Avatar>
      </Stack>
    </Stack>
  );
};
