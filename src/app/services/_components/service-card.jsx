import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-[0px_1px_3px_0px_rgba(166,175,195,0.40)] h-[296px]">
      <Image
        src={service.src}
        alt={service.alt}
        width={179.2}
        height={160}
        className="w-full h-[160px]"
      />
      <div className="flex h-full flex-col justify-between px-2 py-4 w-full bg-white">
        <h5 className="leading-6 text-sm text-center text-[#111928]">
          {service.title}
        </h5>
        <Button className="w-full font-medium text-white bg-blue-800 rounded-md">
          View details
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
