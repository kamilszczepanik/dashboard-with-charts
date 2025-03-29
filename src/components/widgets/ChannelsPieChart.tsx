import { PieChart } from "@mui/x-charts/PieChart";
import { CHANNELS_PIE_CHART_DATA } from "../../mocks/sales";

export const ChannelsPieChart = () => {
  return (
    <div>
      <PieChart
        series={[
          {
            data: CHANNELS_PIE_CHART_DATA,
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
};
