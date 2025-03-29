import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import { TOP_SELLING_PRODUCTS_DATA } from "../../mocks/sales";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

export const TopSellingProductsTable = () => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none", width: "100%" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", color: "primary.main" }}>
              PRODUCT
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              VALUE
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              ADS SPENT
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              REFUNDS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TOP_SELLING_PRODUCTS_DATA.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <img
                    src={row.image}
                    alt={row.name}
                    style={{ width: 40, height: 40, borderRadius: "100%" }}
                  />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {row.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "success.main" }}
                    >
                      {row.orders.toLocaleString()}
                    </Typography>
                    <span style={{ color: "gray" }}> orders</span>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="right">${row.value.toLocaleString()}</TableCell>
              <TableCell align="right">
                ${row.adsSpent.toLocaleString()}
              </TableCell>
              <TableCell align="right">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: 0.5,
                  }}
                >
                  {row.refunds}
                  {row.refunds > 10 ? (
                    <TrendingUpIcon color="error" fontSize="small" />
                  ) : (
                    <TrendingDownIcon color="success" fontSize="small" />
                  )}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
