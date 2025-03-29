import { Box } from "@mui/material";

export const Sidemenu = () => {
  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        borderRight: 1,
        borderColor: "divider",
        display: { xs: "none", md: "block" },
        position: "fixed",
        left: 0,
        top: 0,
        bgcolor: "background.paper",
      }}
    >
      {/* Menu items will go here */}
    </Box>
  );
};
