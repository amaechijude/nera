"use client"
import { Search, Bell, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "../ModeToggle";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { useState } from "react";

export function Header() {
  const { onOpen } = useMobileSidebar();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onOpen}
        >
          <Menu className="h-5 w-5" />
        </Button>
        {/* Search */}
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground md:block hidden" />
          <Input
            placeholder="Search"
            className="pl-10 md:block hidden"
          />
           <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <ModeToggle />
        <Avatar>
          <AvatarImage src={"/donate.jpg"} />
          <AvatarFallback>OK</AvatarFallback>
        </Avatar>
      </div>
      {showSearch && (
        <div className="absolute top-16 left-0 w-full bg-card p-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-10"
            />
          </div>
        </div>
      )}
    </header>
  );
}