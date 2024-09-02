import { Button } from "@/components/ui/button";
import Image from "next/image";

const Supports = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row max-w-[928px] px-4 lg:px-0 pt-[128px] justify-between items-center space-x-[48px]">
      <div className="w-full lg:w-1/2">
        
        <h2 className="text-[30px] font-semibold leading-[36px] text-black pt-[48px]">
          Experience Convenient Service Across NSW
        </h2>
        <p className="mt-[16px] text-[#0F172A] text-sm mb-[32px]">
          New South Wales is a pioneer in adopting renewable energy. Major
          cities like Sydney, Newcastle, Wollongong, and others are rapidly
          adopting solar and advanced electrical solutions. To help the people
          with this change, Spyene Technology has dedicated, experienced, and
          trained staff. We ensure the best services across the state. Our
          services are available for residential, commercial, and small and
          large industrial projects.
        </p>
        <Button className="rounded-[6px] bg-[#1045AD] text-white w-full lg:w-auto">
          Our Services
        </Button>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          src="/solar-monitoring.png"
          height={369}
          width={440}
          alt="Supports Image"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Supports;
