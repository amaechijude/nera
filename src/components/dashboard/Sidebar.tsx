import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  MapPin, 
  Truck, 
  Settings, 
  LogOut,
  Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, current: true },
  { name: "User", icon: Users, current: false },
  { name: "Staff", icon: UserCheck, current: false },
  { name: "Dropoff", icon: MapPin, current: false },
  { name: "Trucks", icon: Truck, current: false },
];

const bottomNavigation = [
  { name: "Settings", icon: Settings },
  { name: "Logout", icon: LogOut },
];

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-sidebar">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <Trash2 className="h-6 w-6 text-primary-foreground" />
        </div>
        <span className="text-2xl font-bold text-sidebar-foreground">NERA</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-4">
        {navigation.map((item) => (
          <Button
            key={item.name}
            variant={item.current ? "default" : "ghost"}
            className={cn(
              "w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              item.current && "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Button>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="space-y-2 px-4 pb-6">
        {bottomNavigation.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
}