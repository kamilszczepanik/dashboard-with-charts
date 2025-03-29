interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path: string;
  children: MenuItem[];
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
