import Link from "next/link";
import { DropdownNavItem } from "./dropdown-nav-item"
import { fetchServices } from "@/shared/helpers/fetch-services";

const NavbarItems = async () => {
    const services = await fetchServices();
  return (
    <div className="flex space-x-4 text-sm text-[#0F172A] font-medium cursor-pointer items-center min-h-[40px] hover:text-[#1045AD]">
    <DropdownNavItem title="Services" menus={services} />
    <Link className="hover:underline" href="/about">
      About
    </Link>
    <Link className="hover:underline" href="/explore">
      Explore
    </Link>
  </div>
  )
}

export default NavbarItems