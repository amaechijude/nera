import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    type: "up" | "down";
  };
  iconColor: "orange" | "green" | "gray" | "blue";
  indicators?: {
    green?: number;
    red?: number;
  };
}

const iconColorClasses = {
  orange: "bg-orange-100 text-orange-600",
  green: "bg-green-100 text-green-600", 
  gray: "bg-gray-100 text-gray-600",
  blue: "bg-blue-100 text-blue-600"
};

export function StatsCard({ title, value, icon: Icon, trend, iconColor, indicators }: StatsCardProps) {
  return (
    <Card className="shadow-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            {trend && (
              <div className="flex items-center gap-1">
                <Badge variant="secondary" className="text-xs">
                  {trend.type === "up" ? "↗" : "↘"} {trend.value}
                </Badge>
              </div>
            )}
            {indicators && (
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-success"></div>
                  <span>{indicators.green}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span>{indicators.red}</span>
                </div>
              </div>
            )}
          </div>
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconColorClasses[iconColor]}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}