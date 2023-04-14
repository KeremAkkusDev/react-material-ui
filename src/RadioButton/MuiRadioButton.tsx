import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
export const MuiRadioButton = () => {
  const [jobExperience, setJobExperience] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJobExperience(event.target.value);
  };
  return (
    <Box>
      <FormControl error>
        <FormLabel>Years of experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={jobExperience}
          onChange={handleChange}
        >
          <FormControlLabel
            value="0-1"
            control={<Radio color="secondary" />}
            label="0-1"
          />
          <FormControlLabel
            value="1-3"
            control={<Radio size="small" />}
            label="1-3"
          />
          <FormControlLabel
            value="3-5"
            control={<Radio size="medium" />}
            label="3-5"
          />
          <FormControlLabel value="5+" control={<Radio />} label="5+" />
        </RadioGroup>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </Box>
  );
};
