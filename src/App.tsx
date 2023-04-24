import "./App.css";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import { MuiCustomizingTheme } from "./CustomizingTheme/MuiCustomizingTheme";

const theme = createTheme({
  status: {
    danger: colors.orange[500],
  },
  palette: {
    primary: {
      main: colors.blue[500],
    },
    secondary: {
      main: colors.red[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MuiCustomizingTheme />
      </div>
    </ThemeProvider>
  );
}

export default App;
