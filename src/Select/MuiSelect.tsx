import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
export const MuiSelect = () => {
  const [brand, setBrand] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const handleChangeBrand = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(event.target.value);
  };
  const handleChangeLanguages = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setLanguages(typeof value === "string" ? value.split(",") : value);
  };
  console.log("brand: ", brand);
  console.log("languages: ", languages);

  return (
    <>
      <Box width="250px">
        <TextField
          label="Select a car brand "
          fullWidth
          select
          onChange={handleChangeBrand}
          defaultValue=""
        >
          <MenuItem value="volvo">Volvo</MenuItem>
          <MenuItem value="saab">Saab</MenuItem>
          <MenuItem value="mercedes">Mercedes</MenuItem>
          <MenuItem value="audi">Audi</MenuItem>
        </TextField>
      </Box>
      <br />
      <Box width="250px">
        <TextField
          label="Select languages you can speak"
          fullWidth
          select
          onChange={handleChangeLanguages}
          SelectProps={{ multiple: true }}
          defaultValue={[]}
          error={languages.length === 0}
          helperText={languages.length === 0 ? "Please select at least one language" : ""}
        >
          <MenuItem value="tr">Turkish</MenuItem>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="es">Spanish</MenuItem>
          <MenuItem value="fr">French</MenuItem>
        </TextField>
      </Box>
    </>
  );
};
