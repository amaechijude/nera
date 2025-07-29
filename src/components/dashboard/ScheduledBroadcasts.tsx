import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, MoreHorizontal } from "lucide-react";

const broadcasts = [
  {
    date: "June 12, 8:00am",
    location: "Nnewi North",
    assignedTo: "Truck 12",
    taskTitle: "Bulk Pickup",
    channels: "App",
    status: "Successful",
    statusType: "success"
  },
  {
    date: "June 12, 8:00am", 
    location: "Nnewi North",
    assignedTo: "Truck 12",
    taskTitle: "Bulk Pickup",
    channels: "App",
    status: "Pending",
    statusType: "warning"
  }
];

export function ScheduledBroadcasts() {
  return (
    <Card className="shadow-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Scheduled Broadcasts</CardTitle>
        <Button variant="outline" size="sm" className="text-xs">
          View all <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-4 text-xs font-medium text-muted-foreground border-b pb-2">
            <span>Date/Time</span>
            <span>Local Govt.</span>
            <span>Assigned to</span>
            <span>Task Title</span>
            <span>Channels</span>
            <span>Status</span>
            <span>Action</span>
          </div>
          
          {/* Table Rows */}
          {broadcasts.map((broadcast, index) => (
            <div key={index} className="grid grid-cols-7 gap-4 items-center text-sm py-2">
              <span className="text-muted-foreground">{broadcast.date}</span>
              <span>{broadcast.location}</span>
              <span>{broadcast.assignedTo}</span>
              <span>{broadcast.taskTitle}</span>
              <span>{broadcast.channels}</span>
              <Badge 
                variant={broadcast.statusType === "success" ? "default" : "secondary"}
                className={`text-xs ${
                  broadcast.statusType === "success" 
                    ? "bg-success/10 text-success border-success/20" 
                    : "bg-warning/10 text-warning border-warning/20"
                }`}
              >
                {broadcast.status}
              </Badge>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}