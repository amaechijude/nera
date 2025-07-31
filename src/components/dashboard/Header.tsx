import { Search, Bell, Moon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "../ModeToggle";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-6">
      {/* Search */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search"
          className="pl-10"
        />
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
    </header>
  );
}