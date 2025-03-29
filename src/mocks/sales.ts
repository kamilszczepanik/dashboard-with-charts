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
  { id: 0, value: 300000, label: "Facebook", color: "blue" },
  { id: 1, value: 360000, label: "Direct", color: "red" },
  { id: 2, value: 200000, label: "Organic", color: "black" },
  { id: 3, value: 1200000, label: "Referral", color: "gray" },
];

export const REVENUE_CHART_DATA: RevenueChartData[] = [
  { month: "Apr", facebookAds: 40, googleAds: 0 },
  { month: "May", facebookAds: 100, googleAds: 30 },
  { month: "Jun", facebookAds: 200, googleAds: 40 },
  { month: "Jul", facebookAds: 190, googleAds: 110 },
  { month: "Aug", facebookAds: 400, googleAds: 150 },
  { month: "Sep", facebookAds: 350, googleAds: 210 },
  { month: "Oct", facebookAds: 500, googleAds: 290 },
  { month: "Nov", facebookAds: 450, googleAds: 260 },
  { month: "Dec", facebookAds: 700, googleAds: 290 },
];

export const SALES_BY_AGE_DATA = [
  {
    ageGroup: "16-20",
    value: 15,
  },
  {
    ageGroup: "21-25",
    value: 20,
  },
  {
    ageGroup: "26-30",
    value: 12,
  },
  {
    ageGroup: "31-36",
    value: 60,
  },
  {
    ageGroup: "36-42",
    value: 20,
  },
  {
    ageGroup: "42+",
    value: 15,
  },
];
