import { Home, Menu } from "@mui/icons-material";
import { Badge, TextField, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const Topbar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const pageTitle = pathnames[pathnames.length - 1];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "100%",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "64px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Home />
            <Typography>/</Typography>
            {pathnames.map((segment, index, array) => (
              <Typography
                key={index}
                component="span"
                sx={{
                  fontWeight: index === array.length - 1 ? "bold" : "normal",
                }}
              >
                {index > 0 && " / "}
                {segment}
              </Typography>
            ))}
          </div>
          <Typography>{pageTitle}</Typography>
        </div>
        <Menu />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          paddingRight: "16px",
        }}
      >
        <TextField label="Search here" type="search" />
        <AccountCircleIcon />
        <SettingsIcon />
        <Badge badgeContent={9} color="primary">
          <NotificationsIcon />
        </Badge>
      </div>
    </div>
  );
};
