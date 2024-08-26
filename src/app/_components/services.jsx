"use client";
import { HomeIcon } from "lucide-react";
import Image from "next/image";

export const Services = () => {
  return (
    <>
      <div className="px-[256px]">
        <h2 className="text-[30px] text-[#0F172A] mb-4 font-semibold leadding-[36px]">
          Our Services
        </h2>
        <p className="text-sm text-[#0F172A] mb-8">
          We offer a wide range of services that includes but not limited to
          wiring, rewiring, electrical inspection, solar panel installations and
          advanced battery systems.
        </p>
        <div className="flex">
          {Array(5)
            .fill("")
            .map((el, i) => (
              <div ey={i} className="rounded-[8px] border border-[#E2E8F0]">
                <div className="py-[42px] px-4 space-y-[10px]">
                  <HomeIcon color="#EF8A22" size={24} />
                  <p className="text-sm text-[#0F172A]">Residential</p>
                </div>
                <Image
                  src="/residential.png"
                  height={155}
                  width={186}
                  alt="Card Image"
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Services;
