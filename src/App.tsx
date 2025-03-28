import { Button, Typography } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography>test</Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </ThemeProvider>
  );
}

export default App;
