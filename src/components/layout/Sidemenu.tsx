import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { MENU_SECTIONS } from "../../mocks";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { UserMenu } from "../common/UserMenu";

export const Sidemenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (path: string) => {
    setExpandedItems((prev) =>
      prev.includes(path)
        ? prev.filter((item) => item !== path)
        : [...prev, path]
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
        <UserMenu />
        <List>
          {MENU_SECTIONS.map((section) => (
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
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={location.pathname === item.path}
                      onClick={() => {
                        if (item.children.length > 0) {
                          toggleExpand(item.path);
                        } else {
                          navigate(item.path);
                        }
                      }}
                      sx={{
                        "&.Mui-selected": {
                          bgcolor: "primary.light",
                          "&:hover": {
                            bgcolor: "primary.light",
                          },
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                      {item.children.length > 0 &&
                        (expandedItems.includes(item.path) ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        ))}
                    </ListItemButton>
                  </ListItem>
                  {item.children.length > 0 && (
                    <Collapse
                      in={expandedItems.includes(item.path)}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {item.children.map((child) => (
                          <ListItem key={child.path} disablePadding>
                            <ListItemButton
                              selected={location.pathname === child.path}
                              onClick={() => navigate(child.path)}
                              sx={{
                                pl: 4,
                                "&.Mui-selected": {
                                  bgcolor: "primary.light",
                                  "&:hover": {
                                    bgcolor: "primary.light",
                                  },
                                },
                              }}
                            >
                              <ListItemIcon sx={{ minWidth: 40 }}>
                                {child.icon}
                              </ListItemIcon>
                              <ListItemText primary={child.title} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </Box>
              ))}
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};
