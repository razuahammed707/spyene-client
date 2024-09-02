import * as React from "react";
import Image from "next/image";
import SpyeneLogo from "./spyene-logo";

function Footer() {
  return (
    <div className="w-full bg-slate-900 mx-auto">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-[256px] py-[48px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          <div className="flex-1 max-w-[390px]">
            <SpyeneLogo color="#ED8A22" />

            <div className="self-stretch mt-4 text-xs leading-5 text-white">
              Solar and Electrical Solutions is a forward-thinking company
              dedicated to providing sustainable energy solutions for
              residential, commercial, and industrial clients. With a focus on
              harnessing the power of the sun, Spyene Technologies offers a wide
              range of services, including the design, installation, and
              maintenance of solar power systems, energy-efficient electrical
              installations, and smart home automation.
            </div>
          </div>

          {/* Right-aligned div */}
          <div className="flex flex-col lg:ml-auto">
            <div className="text-base font-bold leading-none text-orange-500">
              Services
            </div>
            <div className="flex flex-col items-start mt-8 w-full text-xs leading-loose text-white">
              <div className="whitespace-nowrap">Residential</div>
              <div className="mt-2 whitespace-nowrap">Commercial</div>
              <div className="mt-2 whitespace-nowrap">Industrial</div>
              <div className="mt-2">Solar panels</div>
              <div className="mt-2">Solar batteries</div>
            </div>
          </div>
        </div>

        {/* Centered copyright text */}
        <div className="flex justify-center items-center mt-12 text-xs text-slate-600 pb-[48px]">
          ©2024 – Copyright Spyene Technologies Fulfillment
        </div>
      </div>
    </div>
  );
}

export default Footer;
