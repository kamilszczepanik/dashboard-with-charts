import { Badge, TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Breadcrumb } from "./Breadcrumb";

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
