import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { Sales } from "./pages/Dashboard/Sales";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/dashboard/sales" element={<Sales />} />
            <Route
              path="*"
              element={<Navigate to="/dashboard/sales" replace />}
            />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
