import { BarChart } from "@mui/x-charts";
import { SALES_BY_AGE_DATA } from "../../mocks/sales";

export const SalesByAgeChart = () => {
  return (
    <BarChart
      dataset={SALES_BY_AGE_DATA}
      yAxis={[{ scaleType: "band", dataKey: "ageGroup" }]}
      series={[{ dataKey: "value" }]}
      layout="horizontal"
      height={300}
      xAxis={[{ label: "Sales" }]}
      grid={{ horizontal: true }}
    />
  );
};
