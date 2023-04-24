import "./App.css";
import { MuiTypography } from "./Typography/MuiTypography";
import { MuiButton } from "./Button/MuiButton";
import { MuiButtonGroup } from "./ButtonGroup/MuiButtonGroup";
import { MuiToggleButton } from "./ToggleButton/MuiToggleButton";
import { MuiTextField } from "./TextField/MuiTextField";
import { MuiSelect } from "./Select/MuiSelect";
import { MuiRadioButton } from "./RadioButton/MuiRadioButton";
import { MuiCheckBox } from "./CheckBox/MuiCheckBox";
import { MuiSwitch } from "./Switch/MuiSwitch";
import { MuiRating } from "./Rating/MuiRating";
import { MuiAutocomplete } from "./Autocomplete/MuiAutocomplete";
import { MuiLayout } from "./Layout/MuiLayout";
import { MuiGrid } from "./Grid/MuiGrid";
import { MuiCard } from "./Card/MuiCard";
import { MuiAccordion } from "./Accordion/MuiAccordion";
import { MuiImageList } from "./ImageList/MuiImageList";
import { MuiNavbar } from "./Navbar/MuiNavbar";
import { MuiLink } from "./Link/MuiLink";
import { MuiBreadcrumbs } from "./Breadcrumbs/MuiBreadcrumbs";
import { MuiDrawer } from "./Drawer/MuiDrawer";
import { MuiSpeedDial } from "./SpeedDial/MuiSpeedDial";
import { MuiBottomNavigation } from "./BottomNavigation/MuiBottomNavigation";
import { MuiAvatar } from "./Avatar/MuiAvatar";
import { MuiBadge } from "./Badge/MuiBadge";
import { MuiList } from "./List/MuiList";
import { MuiChip } from "./Chip/MuiChip";
import { MuiTooltip } from "./Tooltip/MuiTooltip";
import { MuiTable } from "./Table/MuiTable";
import { MuiAlert } from "./Alert/MuiAlert";
import { MuiSnackbar } from "./Snackbar/MuiSnackbar";
import { MuiDialog } from "./Dialog/MuiDialog";
import { MuiProgress } from "./Progress/MuiProgress";
import { MuiSkeleton } from "./Skeleton/MuiSkeleton";
import { MuiLoadingButton } from "./LoadingButton/MuiLoadingButton";
import { MuiPicker } from "./Picker/MuiPicker";
import { MuiTabs } from "./Tabs/MuiTabs";
import { MuiTimeline } from "./Timeline/MuiTimeline";
import { MuiMasonry } from "./Masonry/MuiMasonry";
import { MuiResponsiveness } from "./Responsiveness/MuiResponsiveness";
import { MuiCustomizingTheme } from "./CustomizingTheme/MuiCustomizingTheme";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import { createTheme, colors, ThemeProvider } from "@mui/material";

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
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          <h1>Typography</h1>
          <MuiTypography />
          <br />
          <br />
          <h1>Button</h1>
          <MuiButton />
          <br />
          <br />
          <h1>Button Group</h1>
          <MuiButtonGroup />
          <br />
          <br />
          <h1>Toggle Button</h1>
          <MuiToggleButton />
          <br />
          <br />
          <h1>Text Field</h1>
          <MuiTextField />
          <br />
          <br />
          <h1>Select</h1>
          <MuiSelect />
          <br />
          <br />
          <h1>Radio Button</h1>
          <MuiRadioButton />
          <br />
          <br />
          <h1>Check Box</h1>
          <MuiCheckBox />
          <br />
          <br />
          <h1>Switch</h1>
          <MuiSwitch />
          <br />
          <br />
          <h1>Rating</h1>
          <MuiRating />
          <br />
          <br />
          <h1>Autocomplete</h1>
          <MuiAutocomplete />
          <br />
          <br />
          <h1>Layout</h1>
          <MuiLayout />
          <br />
          <br />
          <h1>Grid</h1>
          <MuiGrid />
          <br />
          <br />
          <h1>Card</h1>
          <MuiCard />
          <br />
          <br />
          <h1>Accordion</h1>
          <MuiAccordion />
          <br />
          <br />
          <h1>Image List</h1>
          <MuiImageList />
          <br />
          <br />
          <h1>Navbar</h1>
          <MuiNavbar />
          <br />
          <br />
          <h1>Link</h1>
          <MuiLink />
          <br />
          <br />
          <h1>Breadcrumbs</h1>
          <MuiBreadcrumbs />
          <br />
          <br />
          <h1>Drawer</h1>
          <MuiDrawer />
          <br />
          <br />
          <MuiSpeedDial />
          <MuiBottomNavigation />
          <h1>Avatar</h1>
          <MuiAvatar />
          <br />
          <br />
          <h1>Badge</h1>
          <MuiBadge />
          <br />
          <br />
          <h1>List</h1>
          <MuiList />
          <br />
          <br />
          <h1>Chip</h1>
          <MuiChip />
          <br />
          <br />
          <h1>Tooltip</h1>
          <MuiTooltip />
          <br />
          <br />
          <h1>Table</h1>
          <MuiTable />
          <br />
          <br />
          <h1>Alert</h1>
          <MuiAlert />
          <br />
          <br />
          <h1>Snackbar</h1>
          <MuiSnackbar />
          <br />
          <br />
          <h1>Dialog</h1>
          <MuiDialog />
          <br />
          <br />
          <h1>Progress</h1>
          <MuiProgress />
          <br />
          <br />
          <h1>Skeleton</h1>
          <MuiSkeleton />
          <br />
          <br />
          <h1>Loading Button</h1>
          <MuiLoadingButton />
          <br />
          <br />
          <h1>Picker</h1>
          <MuiPicker />
          <br />
          <br />
          <h1>Tabs</h1>
          <MuiTabs />
          <br />
          <br />
          <h1>Timeline</h1>
          <MuiTimeline />
          <br />
          <br />
          <h1>Masonry</h1>
          <MuiMasonry />
          <br />
          <br />
          <h1>Responsiveness</h1>
          <MuiResponsiveness />
          <br />
          <br />
          <h1>Customizing Theme</h1>
          <MuiCustomizingTheme />
          <br />
          <br />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
