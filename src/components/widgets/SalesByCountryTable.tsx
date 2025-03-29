import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import { SALES_BY_COUNTRY_DATA } from "../../mocks/sales";

export const SalesByCountryTable = () => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", color: "primary.main" }}>
              Country
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              Sales
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              Bounce
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {SALES_BY_COUNTRY_DATA.map((row) => (
            <TableRow key={row.country}>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <span>{row.flag}</span>
                  <span>{row.country}</span>
                </Box>
              </TableCell>
              <TableCell align="right">{row.sales.toLocaleString()}</TableCell>
              <TableCell align="right">{row.bounce}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
