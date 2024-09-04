"use client";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
 import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ServiceCard = ({ service }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-[0px_1px_3px_0px_rgba(166,175,195,0.40)] h-[296px]">
      <div className="h-[160px]">
        <Image
          src={`${config.api}${service.attributes.Thumbnail.data.attributes.url}`}
          alt={service.alt}
          width={179.2}
          height={160}
          style={{ objectFit: "cover", height: "160px", width: "100%" }}
        />
      </div>
      <div className="flex h-full flex-col justify-between px-2 py-4 w-full bg-white">
        <h5 className="leading-6 text-sm text-center text-[#111928] line-clamp-2">
          {service.attributes.Title}
        </h5>
        <Link
          href={
            pathname?.split("/")?.pop() === "services"
              ? `services/${service.attributes.Slug}`
              : service.attributes.Slug
          }
        >
          <Button className="w-full h-[30px] text-xs font-medium text-white bg-blue-800 rounded-md">
            View details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
