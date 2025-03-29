import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: grey[300],
      main: grey[500],
      dark: grey[800],
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",

    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.1rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "0.95rem",
      fontWeight: 600,
      color: grey[700],
    },
    body1: {
      fontSize: "0.92rem",
      color: grey[800],
    },
    body2: {
      fontSize: "0.875rem",
      color: grey[600],
    },
    caption: {
      fontWeight: 900,
    },
  },
});
