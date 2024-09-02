"use client";
import Image from "next/image";
import GetQuotationModal from "./modals/get-quotation-modal";
import { Button } from "./ui/button";
import { PhoneCall } from "lucide-react";

const LandingHeader = () => {
  return (
    <>
      <div className="w-full flex space-x-[46px] max-w-[928px] mt-[72px] mb-[128px] px-4 lg:px-0">
        <div className="w-full space-y-8">
          <div className="flex space-x-[14px] h-[36px]">
            <div className="flex space-x-[-7px] items-center">
              {Array(6)
                .fill("")
                .map((el, i) => (
                  <Image
                    src={`/lan-hdr/avatar${i + 1}.png`}
                    width={27}
                    height={26}
                    alt={`Avatar${i + 1} png`}
                  />
                ))}
            </div>
            <div>
              <div className="flex">
                {Array(6)
                  .fill("")
                  .map((el, i) => (
                    <Image
                      src="/lan-hdr/star.svg"
                      width={17}
                      height={17}
                      alt="Star svg"
                    />
                  ))}
              </div>
              <p className="text-[10px] text-[#0F172A] font-medium ">
                Loved by <span>100</span>+ Clients
              </p>
            </div>
          </div>
          <div className="space-y-4 ">
            <h1 className="text-[48px] text-[#0F172A] font-semibold leading-[3rem] tracking-[-0.576px]">
              Sustainable Solar and Electrical Solutions in NSW
            </h1>
            <p className="text-sm text-[#0F172A]">
              Our innovative and reliable solar and electrical services are
              available across NSW. Experience hassle-free installation, repair,
              and maintenance with our expert solutions.
            </p>

            <div className="flex items-center space-x-2">
      <GetQuotationModal bg_trigger="#1045AD" />
      <Button className="bg-[#EF4444] text-sm font-medium flex items-center">
        <PhoneCall className="h-[20px] w-[20px] mr-[10px]" />
        Call us: +123456789
      </Button>
    </div>
          </div>
        </div>
        <div className="mt-3 w-full object-cover ">
          <Image
            src="/lan-hdr/bg.svg"
            height={318}
            width={605}
            alt="backgroundImage"
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
