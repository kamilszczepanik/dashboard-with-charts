import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: 2,
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">Page not found</Typography>
      <Typography variant="body1">This page is not implemented yet</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Go to /dashboard/sales
      </Button>
    </Box>
  );
};
