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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eclipse } from "lucide-react";

const electrical_tabs = [
  {
    id: 1,
    title: "Residential",
  },
  {
    id: 2,
    title: "Industrial",
  },
  {
    id: 3,
    title: "Commercial",
  },
];
const items = [
  // { title: "Residential", icon: Home, slug: "residential" },
  { title: "Residential Solar", icon: Home, slug: "solar-residential" },

  { title: "Commercial Solar", icon: Calculator, slug: "solar-commercial" },
  { title: "Solar panels", icon: Eclipse, slug: "solar-panels" },
  { title: "Batteries", icon: BatteryCharging, slug: "batteries" },
];

export const NavMenus = async ({ className, withSheetClose }) => {
  const [SheetCloseWrapper, sheetCloseWrapperProps] = withSheetClose
    ? [SheetClose, { asChild: true }]
    : [React.Fragment, {}];

  const [
    residentials,
    solar_residentials,
    industrials,
    commercials,
    solar_commercials,
    solarpanels,
    batteries,
    rest_batteries,
  ] = await Promise.all([
    await fetchServices(
      "&filters[Category][$contains]=Residential&pagination[pageSize]=5"
    ),
    await fetchServices(
      "&filters[Category][$contains]=SolarResidential&pagination[pageSize]=5"
    ),
    await fetchServices(
      "&filters[Category][$contains]=Industrial&pagination[pageSize]=5"
    ),
    await fetchServices(
      "&filters[Category][$contains]=Commercial&pagination[pageSize]=5"
    ),
    await fetchServices(
      "&filters[Category][$contains]=SolarCommercial&pagination[pageSize]=5"
    ),
    await fetchServices(
      "&filters[Category][$contains]=SolarPanels&pagination[pageSize]=5"
    ),
    await fetchServices(
      "&filters[Category][$contains]=Batteries&filters[$or][0][Title][$in]=Sungrow High Voltage Battery&filters[$or][1][Title][$in]=Alpha ESS Batteries&filters[$or][2][Title][$in]=Tesla Powerwall Installation and Maintenance"
    ),
    await fetchServices(
      "&filters[Category][$contains]=Batteries&filters[$or][0][Title][$notIn]=Sungrow High Voltage Battery&filters[$or][1][Title][$notIn]=Alpha ESS Batteries&filters[$or][2][Title][$notIn]=Tesla Powerwall Installation and Maintenance&pagination[pageSize]=2"
    ),
  ]);
  //console.log("solar_commercials__",solar_commercials);
  
  const getServicesByTitle = (title) => {
    const servicesMap = {
      Residential: residentials,
      "Residential Solar": solar_residentials,
      Industrial: industrials,
      Commercial: commercials,
      "Commercial Solar": solar_commercials,
      "Solar panels": solarpanels,
      Batteries: [...batteries, ...rest_batteries],
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
        <MenubarTrigger className="cursor-pointer shadow-md md:shadow-none w-full mt-3 md:mt-0 md:w-auto">
          <Zap className="block md:hidden mr-2 h-4 w-4" /> Electrical
        </MenubarTrigger>

        <MenubarContent>
          <Tabs defaultValue="residential">
            <TabsList className="grid w-full grid-cols-3">
              {electrical_tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.title.toLowerCase()}>
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {electrical_tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.title.toLowerCase()}>
                {getServicesByTitle(tab.title).map((menu, i) => (
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
                    <Link
                      href={`/services/${tab.title.toLowerCase()}`}
                      className="flex items-center"
                    >
                      View All <ArrowRight className="ms-2 h-3 w-3" />
                    </Link>
                  </SheetCloseWrapper>
                </MenubarItem>
              </TabsContent>
            ))}
          </Tabs>
        </MenubarContent>
      </MenubarMenu>
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
