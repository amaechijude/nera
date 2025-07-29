import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function AnalyticsChart() {
  return (
    <Card className="shadow-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Reporting and Analytics</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-xs">
            Nnewi North <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Month <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success"></div>
              <span>Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-warning"></div>
              <span>Missed pickups</span>
            </div>
          </div>
          <div className="h-48 relative">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Y-axis labels */}
              <text x="10" y="20" className="text-xs fill-muted-foreground">80K</text>
              <text x="10" y="60" className="text-xs fill-muted-foreground">40K</text>
              <text x="10" y="100" className="text-xs fill-muted-foreground">0K</text>
              
              {/* X-axis labels */}
              <text x="40" y="190" className="text-xs fill-muted-foreground">Jan</text>
              <text x="100" y="190" className="text-xs fill-muted-foreground">Feb</text>
              <text x="160" y="190" className="text-xs fill-muted-foreground">Mar</text>
              <text x="220" y="190" className="text-xs fill-muted-foreground">Apr</text>
              <text x="280" y="190" className="text-xs fill-muted-foreground">May</text>
              <text x="340" y="190" className="text-xs fill-muted-foreground">Jun</text>
              
              {/* Compliance line (green) */}
              <path
                d="M 40 120 Q 70 100 100 90 Q 130 110 160 95 Q 190 80 220 70 Q 250 85 280 75 Q 310 65 340 50"
                fill="none"
                stroke="hsl(var(--success))"
                strokeWidth="3"
                className="drop-shadow-sm"
              />
              
              {/* Missed pickups line (orange) */}
              <path
                d="M 40 140 Q 70 135 100 130 Q 130 145 160 140 Q 190 125 220 135 Q 250 130 280 125 Q 310 115 340 110"
                fill="none"
                stroke="hsl(var(--warning))"
                strokeWidth="3"
                className="drop-shadow-sm"
              />
            </svg>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}