import Image from "next/image";
import React from "react";

const ServiceCard = ({service}) => {
  return (
    <div
       className="flex flex-col overflow-hidden rounded-lg shadow-sm"
    >
      <div className="w-full h-auto">
        <Image
          src={service.src}
          alt={service.alt}
          layout="responsive"
          width={179}
          height={160}
        />
      </div>
      <div className="flex flex-col px-2 py-4 w-full bg-white">
        <div className="leading-6 text-center text-gray-900">
          {service.title}
        </div>
        <div className="flex items-center justify-center gap-2 self-stretch px-4 py-3 mt-4 w-full font-medium text-white bg-blue-800 rounded-md min-h-[40px]">
          View details
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
