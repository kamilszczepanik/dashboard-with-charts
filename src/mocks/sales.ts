import {
  ChannelsPieChartData,
  RevenueChartData,
  SalesByAgeData,
  SalesByCountryData,
  SalesCardData,
  TopSellingProductData,
} from "../types";

export const SALES_BY_COUNTRY_DATA: SalesByCountryData[] = [
  {
    country: "United State",
    flag: "🇺🇸",
    sales: 2500,
    bounce: "29.9%",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    sales: 3900,
    bounce: "40.22%",
  },
  {
    country: "Great Britain",
    flag: "🇬🇧",
    sales: 1400,
    bounce: "23.44%",
  },
  {
    country: "Brasil",
    flag: "🇧🇷",
    sales: 562,
    bounce: "32.14%",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    sales: 400,
    bounce: "56.83%",
  },
];

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

export const SALES_BY_AGE_DATA: SalesByAgeData[] = [
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

export const TOP_SELLING_PRODUCTS_DATA: TopSellingProductData[] = [
  {
    id: "1",
    name: "Nike v22 Running",
    image: "https://picsum.photos/40/40",
    orders: 8232,
    value: 130992,
    adsSpent: 9500,
    refunds: 13,
  },
  {
    id: "2",
    name: "Adidas Ultraboost",
    image: "https://picsum.photos/40/40",
    orders: 6543,
    value: 104688,
    adsSpent: 7800,
    refunds: 8,
  },
  {
    id: "3",
    name: "Puma RS-X",
    image: "https://picsum.photos/40/40",
    orders: 5432,
    value: 86912,
    adsSpent: 6500,
    refunds: 15,
  },
  {
    id: "4",
    name: "New Balance 990",
    image: "https://picsum.photos/40/40",
    orders: 4321,
    value: 69136,
    adsSpent: 5200,
    refunds: 5,
  },
  {
    id: "5",
    name: "Reebok Classic",
    image: "https://picsum.photos/40/40",
    orders: 3456,
    value: 55296,
    adsSpent: 4100,
    refunds: 12,
  },
  {
    id: "6",
    name: "Asics Gel-Lyte",
    image: "https://picsum.photos/40/40",
    orders: 2345,
    value: 37520,
    adsSpent: 2800,
    refunds: 7,
  },
];
