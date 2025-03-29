import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { menuSections, MenuItem } from "../../mocks";

export const Sidemenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const isSelected = location.pathname === item.path;

    return (
      <ListItem key={item.path} disablePadding>
        <ListItemButton
          selected={isSelected}
          onClick={() => navigate(item.path)}
          sx={{
            pl: level * 2,
            "&.Mui-selected": {
              bgcolor: "primary.light",
              "&:hover": {
                bgcolor: "primary.light",
              },
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    );
  };

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
        overflowY: "auto",
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Dashboard
        </Typography>
        <List>
          {menuSections.map((section) => (
            <Box key={section.label}>
              {section.labelVisible && (
                <Typography
                  variant="caption"
                  sx={{
                    px: 2,
                    py: 1,
                    display: "block",
                    color: "text.secondary",
                  }}
                >
                  {section.label}
                </Typography>
              )}
              {section.children.map((item) => (
                <Box key={item.path}>
                  {renderMenuItem(item)}
                  {item.children.map((child) => renderMenuItem(child, 1))}
                </Box>
              ))}
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};
