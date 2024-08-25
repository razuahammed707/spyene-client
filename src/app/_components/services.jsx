"use client";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "./swiper-nav-buttons";

export const Services = () => {
  return (
    <>
      <div className="w-full">
        <div className="container">
          <h2 className="text-[30px] text-[#0F172A] mb-4 font-semibold leadding-[36px]">
            Our Services
          </h2>
          <p className="text-sm text-[#0F172A] mb-8">
            We offer a wide range of services that includes but not limited to
            wiring, rewiring, electrical inspection, solar panel installations
            and advanced battery systems.
          </p>
        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Array(12)
            .fill("")
            .map((el, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-[8px] border border-[#E2E8F0]">
                  <div className="py-[42px] px-4 space-y-[10px]">
                    <HomeIcon color="#EF8A22" size={24} />
                    <p className="text-sm text-[#0F172A]">Residential</p>
                  </div>
                  <Image
                    src="/residential.png"
                    height={246}
                    width={248}
                    alt="Card Image"
                  />
                </div>
              </SwiperSlide>
            ))}

          <SwiperNavButtons />
        </Swiper>
      </div>
    </>
  );
};
export default Services;
