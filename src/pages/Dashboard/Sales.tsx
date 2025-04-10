import { Box, Card, CardContent, Typography } from "@mui/material";
import { SALES_CARDS_DATA } from "../../mocks/sales";
import { ChannelsPieChart } from "../../components/widgets/ChannelsPieChart";
import { RevenueChart } from "../../components/widgets/RevenueChart";
import { ChartWrapper } from "../../components/widgets/ChartWrapper";
import { grey } from "@mui/material/colors";
import { SalesByAgeChart } from "../../components/widgets/SalesByAgeChart";
import { SalesByCountryTable } from "../../components/widgets/SalesByCountryTable";
import { TopSellingProductsTable } from "../../components/widgets/TopSellingProductsTable";

export const Sales = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        {SALES_CARDS_DATA.map((card, index) => (
          <Card
            key={index}
            sx={{ flex: 1, borderRadius: 4, bgcolor: grey[200] }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                  {card.title}
                </Typography>
                <Typography variant="body2">{card.date}</Typography>
              </Box>
              <Typography variant="h4">{card.amount}</Typography>
              <Typography variant="body2">
                <span style={{ color: card.percentageColor }}>
                  {card.percentage}
                </span>{" "}
                since last month
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          height: { xs: "auto", md: 400 },
        }}
      >
        <ChartWrapper
          sx={{ flex: 1 }}
          title="Channels"
          tooltipTitle="Channels information here"
        >
          <ChannelsPieChart />
        </ChartWrapper>
        <ChartWrapper
          sx={{ flex: 2 }}
          title="Revenue"
          tooltipTitle="Revenue information here"
        >
          <RevenueChart />
        </ChartWrapper>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          height: { xs: "auto", md: 400 },
        }}
      >
        <ChartWrapper sx={{ flex: 2 }} title="Sales by age">
          <SalesByAgeChart />
        </ChartWrapper>
        <ChartWrapper sx={{ flex: 1 }} title="Sales by Country">
          <SalesByCountryTable />
        </ChartWrapper>
      </Box>
      <ChartWrapper sx={{ minHeight: 400 }} title="Top Selling Products">
        <TopSellingProductsTable />
      </ChartWrapper>
    </Box>
  );
};
