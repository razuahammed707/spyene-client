"use client";
import Image from "next/image";
import { Button } from "./ui/button";

const LandingHeader = () => {
  return (
    <>
      <div className="w-full flex   space-x-[46px] max-w-[1440px] ps-[256px] mt-[72px] mb-[128px] overflow-visible">
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
            <Button className="bg-[#1045AD] text-sm font-medium ">
              Get a Free Quote
            </Button>
          </div>
          <h3 className="text-2xl text-[#EF8A22] font-semibold">
            For urgent consult: +123456789
          </h3>
        </div>
        <div className="mt-3 w-full object-cover ">
          <Image
            src="/lan-hdr/bg.png"
            height={367}
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
