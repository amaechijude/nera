import { Bell } from "lucide-react"
import { Input } from "./ui/input"
import { ModeToggle } from "./ModeToggle"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button";

export function Topbar() {
    return (
      <>
        <div className="flex min-w-full w-full items-center justify-between px-4 h-16 border-b">
          {/* Search Bar */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-10"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button
              className="p-2 hover:bg-accent rounded-full"
              aria-label="Notifications"
              title="Notifications"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <ModeToggle />
            <Avatar>
              <AvatarImage src="https://github.com/amaechijude.png" />
              <AvatarFallback>JA</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <br />
      </>
    );
}