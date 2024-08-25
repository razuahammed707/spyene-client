import HandIcon from "@/components/handIcon";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Supports = () => {
  return (
    <div className="flex w-full py-[128px] pr-[265px] justify-between items-center space-x-[48px]">
      <div className="w-full">
        <div className="mb-[21px] flex space-x-2 items-center">
          <Image src="/palm.svg" width={24} height={24} alt="svg icon" />
          <p className="text-sm text-[#1045AD] font-bold"> Dedicated support</p>
        </div>
        <h2 className="text-[30px] font-semibold leading-[36px] text-black">
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
        <Button className="rounded-[6px] bg-[#1045AD] text-white">
          Read more about us
        </Button>
      </div>
      <div className="w-full">
        <Image
          src="/solar-monitoring.png"
          height={369}
          width={440}
          alt="Supports Image"
        />
      </div>
    </div>
  );
};

export default Supports;
