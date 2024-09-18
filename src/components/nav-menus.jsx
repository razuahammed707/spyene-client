import React from "react";
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
import { SheetClose } from "./ui/sheet";
const items = [
  { title: "Residential", icon: Home, slug: "residential" },
  { title: "Industrial", icon: Factory, slug: "industrial" },
  { title: "Commercial", icon: Calculator, slug: "commercial" },
  { title: "Solar panels", icon: Zap, slug: "solar-panels" },
  { title: "Batteries", icon: BatteryCharging, slug: "batteries" },
];

export const NavMenus = async ({ className, withSheetClose }) => {
  const [SheetCloseWrapper, sheetCloseWrapperProps] = withSheetClose
    ? [SheetClose, { asChild: true }]
    : [React.Fragment, {}];

  const [residentials, industrials, commercials, solarpanels, batteries] =
    await Promise.all([
      await fetchServices(
        "&filters[Category][$contains]=Residential&pagination[pageSize]=5"
      ),
      await fetchServices(
        "&filters[Category][$contains]=Industrial&pagination[pageSize]=5"
      ),
      await fetchServices(
        "&filters[Category][$contains]=Commercial&pagination[pageSize]=5"
      ),
      await fetchServices(
        "&filters[Category][$contains]=Solar-panels&pagination[pageSize]=5"
      ),
      await fetchServices(
        "&filters[Category][$contains]=Batteries&pagination[pageSize]=5"
      ),
    ]);
  const getServicesByTitle = (title) => {
    const servicesMap = {
      Residential: residentials,
      Industrial: industrials,
      Commercial: commercials,
      "Solar panels": solarpanels,
      Batteries: batteries,
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
            {getServicesByTitle(title).map((menu, i) => (
              <>
                <MenubarItem key={i}>
                  <SheetCloseWrapper {...sheetCloseWrapperProps}>
                    <Link href={`/services/${menu.attributes.Slug}`}>
                      {menu.attributes.Title}
                    </Link>
                  </SheetCloseWrapper>
                </MenubarItem>
                <MenubarSeparator />
              </>
            ))}
            <MenubarItem>
              <SheetCloseWrapper {...sheetCloseWrapperProps}>
                <Link href={`/services/${slug}`} className="flex items-center">
                  View All <ArrowRight className="ms-2 h-3 w-3" />
                </Link>
              </SheetCloseWrapper>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      ))}
      <MenubarMenu className="">
        <MenubarTrigger className="cursor-pointer block md:hidden mt-10 bg-[#1045AD] w-full focus:bg-red-400 ">
          <SheetCloseWrapper {...sheetCloseWrapperProps}>
            <Link href="/contact" className="text-white">
              Contact us
            </Link>
          </SheetCloseWrapper>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};
