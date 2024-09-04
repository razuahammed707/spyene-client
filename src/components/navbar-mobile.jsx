import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenus } from "./nav-menus";

export const NavbarMobile = ({ className }) => {
  return (
    <Sheet>
      <SheetTrigger asChild className={className}>
        <Button className="rounded-full bg-[#1045AD] py-0 px-2">
          <Menu color="#fff" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <NavMenus className="flex-col" />
      </SheetContent>
    </Sheet>
  );
};
