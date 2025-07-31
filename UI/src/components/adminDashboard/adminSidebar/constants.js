import {
  LayoutDashboard,
  ShoppingCart,
  DollarSign,
  Plus,
  Minus,
} from "lucide-react";

export const SIDEBARITEMS = [
  {
    label: "Manage Products",
    icon: Plus,
    iconOpen: Minus,
    path: "index",
    dropdown: [
      { label: "Add Product", path: "addproduct" },
      { label: "All Products", path: "index" },
    ],
  },
  { label: "Statistics", icon: LayoutDashboard, path: "statistics" },
  { label: "Payment Summary", icon: ShoppingCart, path: "payments" },
  { label: "Orders Management", icon: DollarSign, path: "orders" },
];
