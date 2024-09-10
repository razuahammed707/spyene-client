 import { DropdownNavItem } from "./dropdown-nav-item"
import { fetchServices } from "@/shared/helpers/fetch-services";

const NavbarItems = async () => {
    const services = await fetchServices();
  return (
    <div className="flex space-x-4 text-sm text-[#0F172A] font-medium cursor-pointer items-center min-h-[40px] hover:text-[#1045AD]">
    
    <DropdownNavItem title="Residential" menus={services} />
    <DropdownNavItem title=" Industrial" menus={services} />
    <DropdownNavItem title="Commercial" menus={services} />
    <DropdownNavItem title="Solar panels" menus={services} />
    <DropdownNavItem title="Solar batteries" menus={services} />
    
    
   
  </div>
  )
}

export default NavbarItems
