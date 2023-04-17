import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id:number
  label:string
}

const skills = ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue"];

const skillsList = skills.map((skill, index) => ({id: index+1, label: skill}))

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [valueList, setValueList] = useState<Skill | null>(null);
  console.log(value);
  console.log(valueList);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo // allow user to enter any value
      />
      <Autocomplete
        options={skillsList}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={valueList}
        onChange={(event: any, newValue: Skill | null) => setValueList(newValue)}
      />
    </Stack>
  );
};
