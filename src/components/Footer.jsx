"use client";
import * as React from "react";
import SpyeneLogo from "./spyene-logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  return (
    <div className="w-full bg-slate-900 mx-auto">
      <div className="w-full max-w-[928px] mx-auto px-4 lg:px-0 py-[48px]">
        <div className="flex justify-between flex-col xs:flex-row  gap-8 lg:gap-0">
          <div className="flex-1 max-w-[390px]">
            <SpyeneLogo color="#ED8A22" />

            <p className="self-stretch mt-4 text-xs leading-5 text-white">
              Solar and Electrical Solutions is a forward-thinking company
              dedicated to providing sustainable energy solutions for
              residential, commercial, and industrial clients. With a focus on
              harnessing the power of the sun, Spyene Technologies offers a wide
              range of services, including the design, installation, and
              maintenance of solar power systems, energy-efficient electrical
              installations, and smart home automation.
            </p>
          </div>

          {/* Right-aligned div */}
          <div className="flex flex-col xs:ml-auto">
            <h5 className="text-base font-bold leading-none text-orange-500">
              Services
            </h5>
            <div className="flex xs:flex-col gap-3 xs:gap-1 justify-between items-start flex-wrap mt-5 w-full text-xs leading-loose text-white">
              <Link
                href={
                  pathname?.split("/")?.[1] === "services"
                    ? "residential"
                    : "services/residential"
                }
              >
                {" "}
                Residential
              </Link>
              <Link
                href={
                  pathname?.split("/")?.[1] === "services"
                    ? "commercial"
                    : "services/commercial"
                }
              >
                {" "}
                Commercial
              </Link>
              <Link
                href={
                  pathname?.split("/")?.[1] === "services"
                    ? "industrial"
                    : "services/industrial"
                }
              >
                {" "}
                Industrial
              </Link>
              <Link
                href={
                  pathname?.split("/")?.[1] === "services"
                    ? "solar-panels"
                    : "services/solar-panels"
                }
              >
                {" "}
                Solar panels
              </Link>
              <Link
                href={
                  pathname?.split("/")?.[1] === "services"
                    ? "solar-batteries"
                    : "services/solar-batteries"
                }
              >
                {" "}
                Solar batteries
              </Link>
            </div>
          </div>
        </div>

        {/* Centered copyright text */}
        <p className="flex justify-center items-center mt-12 text-xs text-slate-600 pb-[48px]">
          ©2024 Spyene Technologies (ABN: 75 638 855 211). All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
