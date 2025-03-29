import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ExtensionIcon from "@mui/icons-material/Extension";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { MenuSection, SalesCardData } from "../types";

export interface UserMenuItem {
  title: string;
  image?: string;
  icon?: React.ReactNode;
  path: string;
  children: UserMenuItem[];
}

export const USER_MENU: UserMenuItem[] = [
  {
    title: "Brooklyn Alice",
    image: "https://via.placeholder.com/150",
    path: "/profile",
    children: [
      {
        title: "Details",
        icon: React.createElement(PersonIcon),
        path: "/profile/details",
        children: [],
      },
      {
        title: "Settings",
        icon: React.createElement(SettingsIcon),
        path: "/profile/settings",
        children: [],
      },
      {
        title: "Logout",
        icon: React.createElement(LogoutIcon),
        path: "/profile/logout",
        children: [],
      },
    ],
  },
];

export const MENU_SECTIONS: MenuSection[] = [
  {
    label: "DASHBOARD",
    labelVisible: false,
    children: [
      {
        title: "Dashboard",
        icon: React.createElement(DashboardIcon),
        path: "/dashboard",
        children: [
          {
            title: "Analytics",
            icon: React.createElement(AnalyticsIcon),
            path: "/dashboard/analytics",
            children: [],
          },
          {
            title: "Sales",
            icon: React.createElement(ShoppingCartIcon),
            path: "/dashboard/sales",
            children: [],
          },
        ],
      },
    ],
  },
  {
    label: "PAGES",
    labelVisible: true,
    children: [
      {
        title: "Pages",
        icon: React.createElement(MenuBookIcon),
        path: "/pages",
        children: [
          {
            title: "Login",
            icon: React.createElement(DescriptionIcon),
            path: "/pages/login",
            children: [],
          },
          {
            title: "Register",
            icon: React.createElement(DescriptionIcon),
            path: "/pages/register",
            children: [],
          },
        ],
      },
      {
        title: "Applications",
        icon: React.createElement(ExtensionIcon),
        path: "/applications",
        children: [
          {
            title: "CRM",
            icon: React.createElement(ExtensionIcon),
            path: "/applications/crm",
            children: [],
          },
        ],
      },
      {
        title: "Ecommerce",
        icon: React.createElement(ExtensionIcon),
        path: "/ecommerce",
        children: [
          {
            title: "Products",
            icon: React.createElement(ExtensionIcon),
            path: "/ecommerce/products",
            children: [],
          },
          {
            title: "Orders",
            icon: React.createElement(ExtensionIcon),
            path: "/ecommerce/orders",
            children: [],
          },
        ],
      },
      {
        title: "Authentication",
        icon: React.createElement(ExtensionIcon),
        path: "/authentication",
        children: [
          {
            title: "Login",
            icon: React.createElement(ExtensionIcon),
            path: "/authentication/login",
            children: [],
          },
          {
            title: "Register",
            icon: React.createElement(ExtensionIcon),
            path: "/authentication/register",
            children: [],
          },
          {
            title: "Forgot password",
            icon: React.createElement(ExtensionIcon),
            path: "/authentication/forgot-password",
            children: [],
          },
        ],
      },
    ],
  },
  {
    label: "DOCS",
    labelVisible: true,
    children: [
      {
        title: "Basics",
        icon: React.createElement(MenuBookIcon),
        path: "/docs/basics",
        children: [
          {
            title: "Introduction",
            icon: React.createElement(DescriptionIcon),
            path: "/docs/basics/introduction",
            children: [],
          },
        ],
      },
      {
        title: "Components",
        icon: React.createElement(ExtensionIcon),
        path: "/docs/components",
        children: [
          {
            title: "Button",
            icon: React.createElement(ExtensionIcon),
            path: "/docs/components/button",
            children: [],
          },
        ],
      },
      {
        title: "Change logs",
        icon: React.createElement(HistoryIcon),
        path: "/docs/change-logs",
        children: [],
      },
    ],
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
