import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  IconButton,
  Drawer,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { MENU_SECTIONS } from "../../mocks/sidemenu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { UserMenu } from "../common/UserMenu";
import GridViewIcon from "@mui/icons-material/GridView";

export const Sidemenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleExpand = (path: string) => {
    setExpandedItems((prev) =>
      prev.includes(path)
        ? prev.filter((item) => item !== path)
        : [...prev, path]
    );
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuContent = (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <GridViewIcon sx={{ color: "primary.light" }} />
        <Typography
          variant="body2"
          sx={{ fontWeight: "bold", color: "primary.light" }}
        >
          Material Dashboard PRO
        </Typography>
      </Box>
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
                  color: "primary.light",
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
                        setMobileOpen(false);
                      }
                    }}
                    sx={{
                      "&.Mui-selected": {
                        bgcolor: "primary.main",
                        "&:hover": {
                          bgcolor: "primary.main",
                        },
                      },
                      "&:hover": {
                        bgcolor: "primary.main",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40, color: "primary.light" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{
                        "& .MuiListItemText-primary": {
                          color: "primary.light",
                        },
                      }}
                    />
                    {item.children.length > 0 &&
                      (expandedItems.includes(item.path) ? (
                        <ExpandLess sx={{ color: "primary.light" }} />
                      ) : (
                        <ExpandMore sx={{ color: "primary.light" }} />
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
                            onClick={() => {
                              navigate(child.path);
                              setMobileOpen(false);
                            }}
                            sx={{
                              pl: 4,
                              "&.Mui-selected": {
                                bgcolor: "primary.main",
                                "&:hover": {
                                  bgcolor: "primary.main",
                                },
                              },
                              "&:hover": {
                                bgcolor: "primary.main",
                              },
                            }}
                          >
                            <ListItemIcon
                              sx={{ minWidth: 40, color: "primary.light" }}
                            >
                              {child.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={child.title}
                              sx={{
                                "& .MuiListItemText-primary": {
                                  color: "primary.light",
                                },
                              }}
                            />
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
  );

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          display: { md: "none" },
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 1100,
          bgcolor: "primary.dark",
          color: "primary.light",
          "&:hover": {
            bgcolor: "primary.main",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
            bgcolor: "primary.dark",
          },
        }}
      >
        {menuContent}
      </Drawer>

      {/* Desktop sidebar */}
      <Box
        sx={{
          width: 240,
          height: "calc(100vh - 16px)",
          borderRight: 1,
          borderColor: "divider",
          display: { xs: "none", md: "block" },
          position: "sticky",
          top: 8,
          left: 8,
          bgcolor: "primary.dark",
          overflowY: "auto",
          margin: 1,
          marginBottom: 4,
          borderRadius: 3,
        }}
      >
        {menuContent}
      </Box>
    </>
  );
};
