"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Factory } from "lucide-react";
import { Calculator } from "lucide-react";
import { House } from "lucide-react";
import { usePathname } from "next/navigation";

export const ElectricalFilterTabs = () => {
  const pathname = usePathname();

  const currentPath = pathname?.split("/")?.pop();

  const isElectricalActive =
    currentPath === "residential" ||
    currentPath === "commercial" ||
    currentPath === "industrial";

  return (
    <Tabs
      onValueChange={(ctg) => {
        window.location.href =
          currentPath === "services" ? `services/${ctg}` : ctg;
      }}
      defaultValue={currentPath}
      className={cn("hidden", isElectricalActive && "block mb-4")}
    >
      <TabsList className="h-[44px] w-auto bg-[rgb(180,178,181)]  p-0">
        <div className="h-full grid grid-cols-3">
          <TabsTrigger
            value="residential"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <House className="h-[20px] w-[20px] mr-2  hidden md:block" />{" "}
            Residential
          </TabsTrigger>

          <TabsTrigger
            value="commercial"
            className=" px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <Calculator className="h-[20px] w-[20px] mr-2 hidden md:block" />{" "}
            Commercial
          </TabsTrigger>

          <TabsTrigger
            value="industrial"
            className="px-4 py-3 text-white font-medium data-[state=active]:bg-[#1045AD] data-[state=active]:text-white"
          >
            <Factory className="h-[20px] w-[20px] mr-2 hidden md:block" />{" "}
            Industrial
          </TabsTrigger>
        </div>
      </TabsList>
    </Tabs>
  );
};
