import "./App.css";
import { MuiPicker } from "./Picker/MuiPicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <MuiPicker />
      </div>
    </LocalizationProvider>
  );
}

export default App;
