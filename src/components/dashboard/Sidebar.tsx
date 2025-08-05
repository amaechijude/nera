"use client";

import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  MapPin, 
  Truck, 
  Settings, 
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "User", icon: Users, href: "/user" },
  { name: "Staff", icon: UserCheck, href: "/staff" },
  { name: "Dropoff", icon: MapPin, href: "/dropoff"  },
  { name: "Trucks", icon: Truck, href: "/trucks" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex h-screen w-64 flex-col bg-sidebar">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6">
        <Link
        href={"/"}
        >
          <Image
            src={"/Logo.png"}
            alt="Nera Logo"
            width={160}
            height={66}
            aria-label="the logo"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-4">
        {navigation.map((item) => (
          <a key={item.name} href={item.href}>
            <Button
              variant={pathname === item.href ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                pathname === item.href &&
                  "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              <item.icon className="h-5 w-5" aria-hidden="true" />
              {item.name}
            </Button>
          </a>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="space-y-2 px-4 pb-6">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <Settings className="h-5 w-5" />
          Settings
        </Button>
        <Button
          onClick={() =>
            toast("Logout Successfull", {
              position: "top-right",
            })
          }
          variant="ghost"
          className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  );
}