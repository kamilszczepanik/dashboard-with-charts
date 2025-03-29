import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Avatar,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { USER_MENU } from "../../mocks";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const UserMenu = () => {
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
    <Box sx={{ py: 2, borderBottom: 1, borderColor: "divider" }}>
      <List>
        {USER_MENU.map((item) => (
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
                  <Avatar
                    src={item.image}
                    alt={item.title}
                    sx={{ width: 32, height: 32 }}
                  />
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
      </List>
    </Box>
  );
};
