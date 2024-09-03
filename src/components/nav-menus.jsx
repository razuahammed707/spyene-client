import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import { fetchServices } from "@/shared/helpers/fetch-services";
 import { Zap } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Calculator } from "lucide-react";
import { Home } from "lucide-react";
import { Factory } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const items = [
  { title: "Residential", icon: Home, slug: "residential" },
  { title: "Industrial", icon: Factory, slug: "industrial" },
  { title: "Commercial", icon: Calculator, slug: "commercial" },
  { title: "Solar panels", icon: Zap, slug: "solar-panels" },
  { title: "Solar batteries", icon: BatteryCharging, slug: "solar-batteries" },
];

export const NavMenus = async ({ className }) => {
  const [residentials, industrials, commercials, solarpanels, solarbatteries] =
    await Promise.all([
      await fetchServices("filters[Category][$eq]=Residential"),
      await fetchServices("filters[Category][$eq]=Industrial"),
      await fetchServices("filters[Category][$eq]=Commercial"),
      await fetchServices("filters[Category][$eq]=Solar_panels"),
      await fetchServices("filters[Category][$eq]=Solar_batteries"),
    ]);
  const getServicesByTitle = (title) => {
    const servicesMap = {
      Residential: residentials,
      Industrial: industrials,
      Commercial: commercials,
      "Solar panels": solarpanels,
      "Solar batteries": solarbatteries,
    };

    return servicesMap[title] || [];
  };

  return (
    <Menubar className={cn("border-none shadow-none", className)}>
      {items?.map(({ title, icon: Icon, slug }, i) => (
        <MenubarMenu key={i} className="">
          <MenubarTrigger className="cursor-pointer shadow-md md:shadow-none w-full mt-3 md:mt-0 md:w-auto">
            <Icon className="block md:hidden mr-2 h-4 w-4" /> {title}
          </MenubarTrigger>
          <MenubarContent>
            {getServicesByTitle(title).map((menu) => (
              <>
                <MenubarItem>
                  <Link href={`/services/${menu.attributes.Slug}`}>
                    {menu.attributes.Title}
                  </Link>
                </MenubarItem>
                <MenubarSeparator />
              </>
            ))}
            <MenubarItem>
              <Link href={`/services/${slug}`} className="flex items-center">
                View All <ArrowRight className="ms-2 h-3 w-3" />
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      ))}
      <MenubarMenu className="">
        <MenubarTrigger className="cursor-pointer block md:hidden mt-10 bg-[#1045AD] w-full ">
          <Link href="/contact" className="text-white">
            Contact us
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};
