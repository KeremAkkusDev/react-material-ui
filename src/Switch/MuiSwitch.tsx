import { Switch, Box, FormControlLabel} from "@mui/material"
import { useState } from "react"
export const MuiSwitch = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDarkMode(event.target.checked)
    }
  return (
    <Box>
        <FormControlLabel label='Dark mode' control={<Switch checked={darkMode} onChange={handleChange}/>}/>
    </Box>
  )
}