import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
export const MuiCheckBox = () => {
  const [acceptTnC, setAcceptTnC] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);
  const handleTnCChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSkills((prevSkills) => [...prevSkills, value]);
    } else {
      setSkills((prevSkills) => prevSkills.filter((skill) => skill !== value));
    }
  };
  console.log("accept:", acceptTnC);
  console.log("skills: ", skills);
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I agree to the terms and conditions"
          control={<Checkbox checked={acceptTnC} onChange={handleTnCChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleTnCChange}
        />
      </Box>
      <br />
      <br />
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value="javascript"
              control={
                <Checkbox
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
      <br />
      <br />
      <Box>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Default"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked color="primary" />}
          label="Primary"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked color="secondary" />}
          label="Secondary"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked indeterminate />}
          label="Indeterminate"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked disabled />}
          label="Disabled"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked disabled color="primary" />}
          label="Disabled"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked color="default" />}
          label="Custom color"
        />
      </Box>
    </Box>
  );
};
