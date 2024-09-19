"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ServiceCard = ({ service }) => {
  //console.log("service__",service);
  const pathname = usePathname();
  const placeholder_url =
    "data:image/png;base64,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";
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-[0px_1px_3px_0px_rgba(166,175,195,0.40)] h-[296px]">
      <div className="h-[160px] relative">
        <Image
          // src={`${config.api}${service.attributes.Thumbnail.data.attributes.url}`} was for strapi images
          src={service?.attributes?.Thumbnail?.data?.attributes?.url}
          placeholder={placeholder_url}
          alt={`${service?.attributes?.Title || "Service"} Image`}
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
