import { Box, Card, CardContent, Typography } from "@mui/material";
import { salesCardsData } from "../../mocks";

export const Sales = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      {salesCardsData.map((card, index) => (
        <Card key={index} sx={{ flex: 1, minWidth: 300 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5">{card.title}</Typography>
              <Typography variant="body1">{card.date}</Typography>
            </Box>
            <Typography variant="h2">{card.amount}</Typography>
            <Typography variant="body1">
              <span style={{ color: card.percentageColor }}>
                {card.percentage}
              </span>{" "}
              since last month
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
