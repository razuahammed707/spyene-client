import { fetchServices } from "@/shared/helpers/fetch-services";
import Image from "next/image";
import { DropdownNavItem } from "./dropdown-nav-item";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = async () => {
  const services = await fetchServices();
  return (
    <div className="flex max-w-[928px] mx-auto flex-wrap  justify-between items-center py-4 w-full border-b border-white min-h-[60px]">
      <Link href="/">
        <Image src="/SPYENE.png" alt="SPYENE" width={82} height={28} />
      </Link>

      <div className="flex space-x-4 text-sm text-[#0F172A] font-medium cursor-pointer items-center min-h-[40px] hover:text-[#1045AD]">
        <DropdownNavItem title="Services" menus={services} />
        <Link className="hover:underline" href="/about">
          About
        </Link>
        <Link className="hover:underline" href="/explore">
          Explore
        </Link>
      </div>

      <Link href="/contact">
        <Button className="bg-[#1045AD] h-[40px] text-sm font-medium">
          Contact us
        </Button>
      </Link>
    </div>
  );
};

export default Navbar;
