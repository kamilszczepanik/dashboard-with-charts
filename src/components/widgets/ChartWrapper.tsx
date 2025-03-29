import { InfoOutline } from "@mui/icons-material";
import { Box, SxProps, Tooltip, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

interface ChartWrapperProps {
  title: string;
  tooltipTitle?: string;
  children: React.ReactNode;
  sx?: SxProps;
}

export const ChartWrapper = ({
  title,
  tooltipTitle,
  children,
  sx,
}: ChartWrapperProps) => {
  return (
    <Box
      sx={{
        bgcolor: grey[200],
        borderRadius: 4,
        boxShadow: 1,
        p: 2,
        height: "100%",
        ...sx,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body1" sx={{ mb: 2, fontWeight: 600 }}>
          {title}
        </Typography>
        {tooltipTitle && (
          <Tooltip title={tooltipTitle}>
            <InfoOutline />
          </Tooltip>
        )}
      </Box>
      {children}
    </Box>
  );
};
