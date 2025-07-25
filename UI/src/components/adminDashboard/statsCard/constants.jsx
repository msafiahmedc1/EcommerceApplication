import { ShoppingCart, DollarSign, Package, Users } from "lucide-react";

export const STATISTICS = [
  {
    label: "Total Orders",
    value: "1,247",
    icon: <ShoppingCart className="w-8 h-8 text-blue-200" />,
  },
  {
    label: "Total Revenue",
    value: "Rs. 2,45,680",
    icon: <DollarSign className="w-8 h-8 text-green-200" />,
  },
  {
    label: "Active Orders",
    value: "89",
    icon: <Package className="w-8 h-8 text-yellow-200" />,
  },
  {
    label: "Total Customers",
    value: "856",
    icon: <Users className="w-8 h-8 text-purple-200" />,
  },
];
