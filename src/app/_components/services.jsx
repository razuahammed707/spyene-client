"use client";
import { Factory } from "lucide-react";
import { Calculator } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Zap } from "lucide-react";
import { Home } from "lucide-react";
import Image from "next/image";

const cards = [
  { title: "Residential", icon: Home },
  { title: "Industrial", icon: Factory },
  { title: "Commercial", icon: Calculator },
  { title: "Solar panels", icon: Zap },
  { title: "Solar batteries", icon: BatteryCharging },
];

export const Services = () => {
  return (
    <>
      <div className="hidden md:flex w-full max-w-[928px] px-4 lg:px-0">
        <div className="w-full">
          <h2 className="text-[30px] text-[#0F172A] mb-4 font-semibold leading-[36px]">
            Our Services
          </h2>
          <p className="text-sm text-[#0F172A] mb-4">
            We offer a wide range of services that includes but is not limited to
            wiring, rewiring, electrical inspection, solar panel installations, and
            advanced battery systems.
          </p>
          <div className="flex space-x-2">
            {cards.map(({ title, icon: Icon }, i) => (
              <div
                key={i}
                className="rounded-[8px] group overflow-hidden border-[#E2E8F0]"
              >
                <div className="py-[42px] px-4 space-y-[10px]">
                  <Icon color="#EF8A22" size={20} />
                  <p className="text-sm text-[#0F172A]">{title}</p>
                </div>
                <div className="h-[155px] overflow-hidden">
                  <Image
                    src={`/ctg/image${i + 1}.png`}
                    height={155}
                    width={186}
                    alt={`Image${i + 1}`}
                    className="group-hover:scale-125 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
