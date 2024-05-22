import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { pathKeys } from "@/shared/lib/react-router";
import { CircleUser, Package2 } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

export function GuestLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <GuestHeader />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40">
        <Outlet />
      </main>
    </div>
  );
}

export function NakedLayout() {
  return <Outlet />;
}

function GuestHeader() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background">
      <div className="flex w-full items-center">
        <NavLink to={pathKeys.home()}>
          <Package2 className="h-6 w-6" />
        </NavLink>
        <nav className="flex items-center justify-end gap-4 ml-auto mr-8">
          <div className="transition-colors hover:text-foreground">
            <NavLink to={pathKeys.home()}>Home</NavLink>
          </div>
          <div className="transition-colors hover:text-foreground">
            <NavLink to={pathKeys.login()}>Sign in</NavLink>
          </div>
          <div className="transition-colors hover:text-foreground">
            <NavLink to={pathKeys.register()}>Sign up</NavLink>
          </div>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
