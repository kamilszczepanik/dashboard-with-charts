import { Box } from "@mui/material";
import { Topbar } from "./Topbar";
import { Sidemenu } from "./Sidemenu";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidemenu />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - 240px)` },
          backgroundColor: "primary.light",
        }}
      >
        <Topbar />
        <Box sx={{ p: 2 }}>{children}</Box>
      </Box>
    </Box>
  );
};
