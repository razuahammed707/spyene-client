import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
 import { NavbarMobile } from "./navbar-mobile";
import { NavMenus } from "./nav-menus";
import SpyeneLogo from "./spyene-logo";

const Navbar = async () => {
  return (
    <div className="flex max-w-[928px] px-4 lg:px-0 mx-auto flex-wrap  justify-between items-center py-4 w-full border-b border-white min-h-[60px]">
      <Link href="/">
        <SpyeneLogo color="blue"/>
      </Link>
      <NavMenus className="hidden md:flex" />
      <Link href="/contact">
        <Button className="bg-[#1045AD] h-[40px] text-sm font-medium hidden md:block">
          Contact us
        </Button>
      </Link>
      <NavbarMobile className="block md:hidden" />
    </div>
  );
};

export default Navbar;
