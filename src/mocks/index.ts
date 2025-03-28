export interface SalesCardData {
  title: string;
  date: string;
  amount: string;
  percentage: string;
  percentageColor: string;
}

export const salesCardsData: SalesCardData[] = [
  {
    title: "Sales",
    date: "6 May - 7 May",
    amount: "$230,220",
    percentage: "+55%",
    percentageColor: "green",
  },
  {
    title: "Customers",
    date: "6 May - 7 May",
    amount: "3.200",
    percentage: "+12%",
    percentageColor: "green",
  },
  {
    title: "Avg. Revenue",
    date: "6 May - 7 May",
    amount: "$1.200",
    percentage: "+$213",
    percentageColor: "gray",
  },
];
