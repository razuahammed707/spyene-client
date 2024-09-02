import Link from "next/link";
import { DropdownNavItem } from "./dropdown-nav-item";
import { fetchServices } from "@/shared/helpers/fetch-services";
import { cn } from "@/lib/utils";

const NavbarItems = async ({ className }) => {
  const services = await fetchServices();
  return (
    <div
      className={cn(
        "flex space-x-4 text-sm text-[#0F172A] font-medium cursor-pointer items-center min-h-[40px] hover:text-[#1045AD]",
        className
      )}
    >
      <DropdownNavItem title="Services" menus={services} />
      <Link className="hover:underline" href="/about">
        About
      </Link>
      <Link className="hover:underline" href="/explore">
        Explore
      </Link>
    </div>
  );
};

export default NavbarItems;
