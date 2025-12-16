import { ImpactMetric } from "@/lib/types/home";
import { TrendingUp, Wallet, Users, Calendar, Handshake } from "lucide-react";

export const impactMetrics: ImpactMetric[] = [
  { icon: TrendingUp, value: "$10", label: "Mobilized Funding", suffix: "Mn+" },
  { icon: Wallet, value: "$750", label: "Equity Investment", suffix: "K" },
  {
    icon: Users,
    value: "2,500",
    label: "MSME Women-Led Businesses\nSupported",
    suffix: "+",
  },
  {
    icon: Calendar,
    value: "15",
    label: "Programs Conducted with\nVarious Partners",
    suffix: "+",
  },
  {
    icon: Handshake,
    value: "80",
    label: "Partners\n(Local & International)",
    suffix: "+",
  },
];
