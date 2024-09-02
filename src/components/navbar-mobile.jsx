import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavbarItems from "./navbar-items";

export function NavbarMobile({ className }) {
  return (
    <Sheet>
      <SheetTrigger asChild className={className}>
        <Button className="rounded-full bg-[#1045AD] py-0 px-2">
          <Menu color="#fff" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <NavbarItems className="flex-col" />
      </SheetContent>
    </Sheet>
  );
}
