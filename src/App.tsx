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
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/dashboard/sales" replace />}
          />
          <Route
            path="/dashboard/*"
            element={
              <Layout>
                <Routes>
                  <Route path="sales" element={<Sales />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
