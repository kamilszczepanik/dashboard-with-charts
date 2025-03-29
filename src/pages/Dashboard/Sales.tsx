import { Box, Card, CardContent, Typography } from "@mui/material";
import { SALES_CARDS_DATA } from "../../mocks/sales";
import { ChannelsPieChart } from "../../components/widgets/ChannelsPieChart";
import { RevenueChart } from "../../components/widgets/RevenueChart";

export const Sales = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      {SALES_CARDS_DATA.map((card, index) => (
        <Card key={index} sx={{ flex: 1, minWidth: 300 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">{card.title}</Typography>
              <Typography variant="body2">{card.date}</Typography>
            </Box>
            <Typography variant="h6">{card.amount}</Typography>
            <Typography variant="body2">
              <span style={{ color: card.percentageColor }}>
                {card.percentage}
              </span>{" "}
              since last month
            </Typography>
          </CardContent>
        </Card>
      ))}
      <ChannelsPieChart />
      <RevenueChart />
    </Box>
  );
};
