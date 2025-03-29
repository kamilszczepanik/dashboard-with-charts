import { BarChart } from "@mui/x-charts";
import { SALES_BY_AGE_DATA } from "../../mocks/sales";

export const SalesByAgeChart = () => {
  return (
    <BarChart
      dataset={SALES_BY_AGE_DATA}
      yAxis={[
        {
          scaleType: "band",
          dataKey: "ageGroup",
        },
      ]}
      series={[
        {
          dataKey: "value",
          color: "hsl(220, 80%, 25%)",
        },
      ]}
      layout="horizontal"
      height={300}
      grid={{ horizontal: true }}
      borderRadius={4}
      sx={{ marginTop: -8, marginBottom: -8 }}
    />
  );
};
