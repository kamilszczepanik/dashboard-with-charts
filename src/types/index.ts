interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path: string;
  children: MenuItem[];
}

export interface ChannelsPieChartData {
  id: number;
  value: number;
  label: string;
  color: string;
}

export interface MenuSection {
  label: string;
  labelVisible: boolean;
  children: MenuItem[];
}

export interface SalesCardData {
  title: string;
  date: string;
  amount: string;
  percentage: string;
  percentageColor: string;
}

export interface RevenueChartData {
  month: string;
  facebookAds: number;
  googleAds: number;
}

export interface SalesByCountryData {
  country: string;
  flag: string;
  sales: number;
  bounce: string;
}

export interface SalesByAgeData {
  ageGroup: string;
  value: number;
  [key: string]: string | number;
}

export interface TopSellingProductData {
  id: string;
  name: string;
  image: string;
  orders: number;
  value: number;
  adsSpent: number;
  refunds: number;
}
