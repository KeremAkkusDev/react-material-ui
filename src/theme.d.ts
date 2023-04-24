import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: React.CSSProperties['color']
    }
  }

    interface Palette {
    neutral?: PaletteColor
    }

    interface PaletteOptions {
    neutral?: PaletteColorOptions
    }

    interface SimplePaletteColorOptions {
        darker?: string
    }
}