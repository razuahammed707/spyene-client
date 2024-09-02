"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator } from "lucide-react";
import { Zap } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Factory } from "lucide-react";
import { House } from "lucide-react";
import { usePathname } from "next/navigation";

export const CategoryFilterTabs = () => {
  const pathname = usePathname();

  return (
    <Tabs
      onValueChange={(ctg) =>
        (window.location.href =
          pathname?.split("/")?.pop() === "services" ? `services/${ctg}` : ctg)
      }
      defaultValue={pathname?.split("/")?.pop()}
      className="w-full flex flex-col items-center"
    >
      <TabsList className="h-[60px] w-full bg-[#1E293B] rounded-none p-0">
        <div className="w-full h-full max-w-[928px] grid  grid-cols-5 ">
          <TabsTrigger
            value="residential"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <House className="h-[20px] w-[20px] mr-2 " /> Residential
          </TabsTrigger>
          <TabsTrigger
            value="industrial"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <Factory className="h-[20px] w-[20px] mr-2" /> Industrial
          </TabsTrigger>
          <TabsTrigger
            value="commercial"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <Calculator className="h-[20px] w-[20px] mr-2" /> Commercial
          </TabsTrigger>
          <TabsTrigger
            value="solar-panels"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <Zap className="h-[20px] w-[20px] mr-2" /> Solar panels
          </TabsTrigger>
          <TabsTrigger
            value="solar-bateries"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <BatteryCharging className="h-[20px] w-[20px] mr-2" />
            Solar batteries
          </TabsTrigger>
        </div>
      </TabsList>
    </Tabs>
  );
};
