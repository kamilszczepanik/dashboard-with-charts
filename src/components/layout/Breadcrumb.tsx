import { Home } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const pageTitle = pathnames[pathnames.length - 1];

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
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
            {capitalize(segment)}
          </Typography>
        ))}
      </div>
      <Typography sx={{ fontWeight: "bold" }}>
        {capitalize(pageTitle)}
      </Typography>
    </div>
  );
};
