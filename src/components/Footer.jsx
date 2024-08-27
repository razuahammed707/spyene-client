import * as React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-full flex justify-center bg-slate-900 mx-auto">
      <div className="flex w-full max-w-[928px] flex-col justify-center py-12 ">
        <div className="flex flex-wrap gap-10 justify-between w-full max-md:max-w-full">
          <div className="flex flex-col items-start min-w-[240px] w-[390px]">
            <Image
              src="/SPYENE.png" // Path to your image file in the public directory
              alt="SPYENE" // A description of the image for accessibility
              width={82} // Set the desired width of the image
              height={28} // Set the desired height of the image
            />

            <div className="self-stretch mt-4 text-xs leading-5 text-white">
              Solar and Electrical Solutions is a forward-thinking company
              dedicated to providing sustainable energy solutions for
              residential, commercial, and industrial clients. With a focus on
              harnessing the power of the sun, Spyene Technologies offers a wide
              range of services, including the design, installation, and
              maintenance of solar power systems, energy-efficient electrical
              installations, and smart home automation.
            </div>
            <div className="flex gap-6 items-center mt-4">
              <Image
                src="/facebookIcon.png" // Path to your image file in the public directory
                alt="fb" // A description of the image for accessibility
                width={16} // Set the desired width of the image
                height={16} // Set the desired height of the image
              />
              <Image
                src="/instagramIcon.png" // Path to your image file in the public directory
                alt="fb" // A description of the image for accessibility
                width={16} // Set the desired width of the image
                height={16} // Set the desired height of the image
              />
              <Image
                src="/xIcon.png" // Path to your image file in the public directory
                alt="fb" // A description of the image for accessibility
                width={16} // Set the desired width of the image
                height={16} // Set the desired height of the image
              />
              <Image
                src="/mailIcon.png" // Path to your image file in the public directory
                alt="fb" // A description of the image for accessibility
                width={16} // Set the desired width of the image
                height={16} // Set the desired height of the image
              />
            </div>
          </div>
          <div className="flex gap-8 items-start self-start min-w-[240px]">
            <div className="flex flex-col justify-center w-[101px]">
              <div className="text-base font-bold leading-none text-orange-500">
                Services
              </div>
              <div className="flex flex-col items-start mt-8 w-full text-xs leading-loose text-white">
                <div className="gap-2.5 self-stretch whitespace-nowrap">
                  Residential
                </div>
                <div className="gap-2.5 self-stretch mt-2 whitespace-nowrap">
                  Commercial
                </div>
                <div className="gap-2.5 self-stretch mt-2 whitespace-nowrap">
                  Industrial
                </div>
                <div className="gap-2.5 self-stretch mt-2">Solar panels</div>
                <div className="gap-2.5 self-stretch mt-2">Solar batteries</div>
              </div>
            </div>
            <div className="flex flex-col justify-center w-[102px]">
              <div className="text-base font-bold leading-none text-orange-500">
                Company
              </div>
              <div className="flex flex-col items-start mt-8 w-full text-xs leading-loose text-white">
                <div className="gap-2.5 self-stretch whitespace-nowrap">
                  About
                </div>
                <div className="gap-2.5 self-stretch mt-2">Our reviews</div>
                <div className="gap-2.5 self-stretch mt-2">
                  License & awards
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center w-[101px]">
              <div className="text-base font-bold leading-none text-orange-500">
                Explore
              </div>
              <div className="flex flex-col items-start mt-8 w-full text-xs leading-loose text-white">
                <div className="gap-2.5 self-stretch">Why go solar ?</div>
                <div className="gap-2.5 self-stretch mt-2">Why chose us ?</div>
                <div className="gap-2.5 self-stretch mt-2">Our blogs</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center mt-12 text-xs text-slate-600 max-md:mt-10">
          ©2024 – Copyright Spyene Technologies Fulfillment
        </div>
      </div>
    </div>
  );
}

export default Footer;
