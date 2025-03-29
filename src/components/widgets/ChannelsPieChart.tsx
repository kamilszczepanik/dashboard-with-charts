import { PieChart } from "@mui/x-charts/PieChart";
import { CHANNELS_PIE_CHART_DATA } from "../../mocks/sales";
import { Box, Button, Typography } from "@mui/material";

export const ChannelsPieChart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "85%",
      }}
    >
      <PieChart
        series={[
          {
            data: CHANNELS_PIE_CHART_DATA,
          },
        ]}
        height={200}
      />
      <Box sx={{ display: "flex", gap: 4, justifyContent: "space-between" }}>
        <Typography variant="body2">
          More than <span style={{ fontWeight: 600 }}>1,2000,000</span> sales
          are made using referral marketing and{" "}
          <span style={{ fontWeight: 600 }}>700,000</span> are from social media
        </Typography>
        <Button sx={{ width: "fit-content" }} variant="outlined">
          READ MORE
        </Button>
      </Box>
    </Box>
  );
};
