import { LineChart } from "@mui/x-charts";
import { REVENUE_CHART_DATA } from "../../mocks/sales";

export const RevenueChart = () => {
  const months = REVENUE_CHART_DATA.map((item) => item.month);
  const facebookData = REVENUE_CHART_DATA.map((item) => item.facebookAds);
  const googleData = REVENUE_CHART_DATA.map((item) => item.googleAds);
  const xAxisData = Array.from({ length: months.length }, (_, i) => i);

  return (
    <div>
      <LineChart
        xAxis={[
          {
            data: xAxisData,
            valueFormatter: (value) => months[value],
            tickMinStep: 1,
          },
        ]}
        yAxis={[{ min: 0, max: 700 }]}
        series={[
          {
            curve: "linear",
            data: facebookData,
            label: "Facebook Ads",
            color: "#1877F2",
          },
          {
            curve: "linear",
            data: googleData,
            label: "Google Ads",
            color: "#DB4437",
          },
        ]}
        height={350}
        grid={{ vertical: true, horizontal: true }}
      />
    </div>
  );
};
