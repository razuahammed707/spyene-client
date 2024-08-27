import { fetchServices } from "@/shared/helpers/fetch-services";
import Image from "next/image";
import { DropdownNavItem } from "./dropdown-nav-item";
import Link from "next/link";

const Navbar = async () => {
  const services = await fetchServices();
  return (
       <div className="flex  max-w-[928px] mx-auto flex-wrap gap-10 justify-between items-center py-4 w-full border-b border-white min-h-[60px] max-md:max-w-full">
        <Image
          src="/SPYENE.png" // Path to your image file in the public directory
          alt="SPYENE" // A description of the image for accessibility
          width={82} // Set the desired width of the image
          height={28} // Set the desired height of the image
        />

        <div className="flex gap-6 justify-between items-center self-stretch my-auto min-w-[240px] w-[308px]">
          <div className="flex gap-4 items-center self-stretch h-full">
            <DropdownNavItem title="Services" menus={services} />
          </div>
          <div className="flex flex-col self-stretch my-auto w-[41px]">
            <div className="gap-1 self-stretch">About</div>
          </div>
          <div className="flex flex-col self-stretch my-auto w-[51px]">
            <div className="gap-1 self-stretch">Explore</div>
          </div>

          <div className="flex flex-col self-stretch my-auto w-[54px]">
            <button className="gap-1 self-stretch">
              <Link href="/contact">Contact</Link>
            </button>
          </div>
        </div>
      </div>
   );
};

export default Navbar;
