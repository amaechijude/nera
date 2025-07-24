import { Settings, User, Users, LayoutDashboard, ArrowDown, Truck } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

interface MenuItem {
  title: string;
  url: string;
  icon: React.FC;
}

// Menu items.
const items: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "User",
    url: "/",
    icon: Users,
  },
  {
    title: "Staff",
    url: "/",
    icon: User, 
  },
  {
    title: "DropOff",
    url: "/",
    icon: ArrowDown,
  },
  {
    title: "Trucks",
    url: "/",
    icon: Truck,
  },
  {
    title: "Settings",
    url: "/",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      {/*  */}
      <SidebarContent 
        className="bg-black text-white dark:bg-black dark:text-white"
      >
        <SidebarGroup>
          <SidebarGroupLabel>
            <Image
            src={"/Logo.png"}
            alt="Logo"
            width={100}
            height={75}
            className="rounded-lg mb-2"
            />

          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
