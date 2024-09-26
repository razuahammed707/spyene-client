"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator } from "lucide-react";
import { Zap } from "lucide-react";
import { Eclipse } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { House } from "lucide-react";
import { usePathname } from "next/navigation";

export const CategoryFilterTabs = () => {
  const pathname = usePathname();
  const currentPath = pathname?.split("/")?.pop();
  const isElectricalActive = 
    currentPath === "residential" || 
    currentPath === "commercial" || 
    currentPath === "industrial";

  return (
    <Tabs
      onValueChange={(ctg) => {
        if (ctg === "electrical") {
          window.location.href = pathname?.split("/")?.pop() === "services" ? "services/residential" : "residential";  // Always redirect to "residential" for electrical
        } else {
          window.location.href = pathname?.split("/")?.pop() === "services" ? `services/${ctg}` : ctg;
        }
      }}
      defaultValue={isElectricalActive ? "electrical" : currentPath}
      className="w-full flex flex-col items-center"
    >
      <TabsList className="h-[120px] md:h-[60px] w-full bg-[#1E293B] rounded-none p-0">
        <div className="w-full h-full max-w-[928px] grid grid-cols-3  md:grid-cols-5 ">
          <TabsTrigger
            value="solar-residential"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <House className="h-[20px] w-[20px] mr-2  hidden md:block" />{" "}
            Residential Solar
          </TabsTrigger>

          <TabsTrigger
            value="solar-commercial"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <Calculator className="h-[20px] w-[20px] mr-2 hidden md:block" />{" "}
            Commercial Solar
          </TabsTrigger>
          
          <TabsTrigger
            value="solar-panels"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <Eclipse className="h-[20px] w-[20px] mr-2 hidden md:block" /> Solar
            Panels
          </TabsTrigger>
          
          <TabsTrigger
            value="batteries"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <BatteryCharging className="h-[20px] w-[20px] mr-2 hidden md:block" />
            Batteries
          </TabsTrigger>
          
          <TabsTrigger
            value="electrical"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <Zap className="h-[20px] w-[20px] mr-2 hidden md:block" />
            Electrical
          </TabsTrigger>
        </div>
      </TabsList>
    </Tabs>
  );
};
