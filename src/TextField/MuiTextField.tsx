import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="First Name" variant="outlined" />
        <TextField label="Last Name" variant="filled" />
        <TextField label="Email" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" required />
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Password"
          type="password"
          error={!value || value.length < 8}
          helperText={
            !value
              ? "Required"
              : value.length < 8
              ? "Password must be at least 8 characters"
              : ""
          }
          required
        />
        <TextField label="Read only" disabled InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start"> $ </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        ></TextField>
      </Stack>
    </Stack>
  );
};
