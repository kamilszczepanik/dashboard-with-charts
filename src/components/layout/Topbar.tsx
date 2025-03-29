import { Badge, TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Breadcrumb } from "./Breadcrumb";
import { Link } from "react-router-dom";

export const Topbar = () => {
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
      <Breadcrumb />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          paddingRight: "16px",
        }}
      >
        <TextField
          label="Search here"
          type="search"
          sx={{ color: "primary" }}
        />
        <Link to="/profile">
          <AccountCircleIcon color="primary" />
        </Link>
        <Link to="/settings">
          <SettingsIcon color="primary" />
        </Link>
        <Badge badgeContent={9} color="error" sx={{ color: "white" }}>
          <Link to="/notifications">
            <NotificationsIcon color="primary" />
          </Link>
        </Badge>
      </div>
    </div>
  );
};
