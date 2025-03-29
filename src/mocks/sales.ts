import {
  ChannelsPieChartData,
  RevenueChartData,
  SalesCardData,
} from "../types";

export const SALES_CARDS_DATA: SalesCardData[] = [
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

export const CHANNELS_PIE_CHART_DATA: ChannelsPieChartData[] = [
  { id: 0, value: 15, label: "Facebook", color: "blue" },
  { id: 1, value: 18, label: "Direct", color: "red" },
  { id: 2, value: 10, label: "Organic", color: "black" },
  { id: 3, value: 60, label: "Referral", color: "gray" },
];

export const REVENUE_CHART_DATA: RevenueChartData[] = [
  { month: "Apr", facebookAds: 30, googleAds: 20 },
  { month: "May", facebookAds: 100, googleAds: 80 },
  { month: "Jun", facebookAds: 200, googleAds: 150 },
  { month: "Jul", facebookAds: 190, googleAds: 180 },
  { month: "Aug", facebookAds: 400, googleAds: 300 },
  { month: "Sep", facebookAds: 500, googleAds: 400 },
  { month: "Oct", facebookAds: 550, googleAds: 450 },
  { month: "Nov", facebookAds: 600, googleAds: 500 },
  { month: "Dec", facebookAds: 700, googleAds: 550 },
];
