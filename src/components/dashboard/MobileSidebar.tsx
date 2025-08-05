
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
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";
import Link from "next/link";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, current: true, href: "/" },
  { name: "User", icon: Users, current: false, href: "/user" },
  { name: "Staff", icon: UserCheck, current: false, href: "/staff" },
  { name: "Dropoff", icon: MapPin, current: false, href: "/dropoff"  },
  { name: "Trucks", icon: Truck, current: false, href: "/trucks" },
];

export function MobileSidebar() {
  const { isOpen, onClose } = useMobileSidebar();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
      <div className="fixed inset-0 z-40 bg-black/25" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-sidebar p-4">
        {/* Logo */}
        <div className="flex items-center justify-between">
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
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex-1 space-y-2">
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
        <div className="absolute bottom-0 left-0 w-full space-y-2 p-4">
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
    </div>
  );
}
