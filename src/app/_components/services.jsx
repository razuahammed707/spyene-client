"use client";
import { Factory } from "lucide-react";
import { Calculator } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Zap } from "lucide-react";
import { Home } from "lucide-react";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";

export const cards = [
  { title: "Residential", icon: Home },
  { title: "Industrial", icon: Factory },
  { title: "Commercial", icon: Calculator },
  { title: "Solar panels", icon: Zap },
  { title: "Solar batteries", icon: BatteryCharging },
];

export const Services = ({ className }) => {
  return (
    <>
      <div className={cn("flex w-full max-w-[928px] px-4 lg:px-0 ", className)}>
        <div className="w-full">
          <h2 className="text-[30px] text-[#0F172A] mb-4 font-semibold leading-[36px]">
            Our Services
          </h2>
          <p className="text-sm text-[#0F172A] mb-4">
            We offer a wide range of services that includes but is not limited
            to wiring, rewiring, electrical inspection, solar panel
            installations, and advanced battery systems.
          </p>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            /*  onSlideChange={(e) => console.log("slide change", e)}
            onReachEnd={(e) => console.log("end", e)}
            onSwiper={(swiper) => console.log(swiper)} */
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              344: {
                slidesPerView: 2,
              },
              490: {
                slidesPerView: 3,
              },
              636: {
                slidesPerView: 4,
              },
              782: {
                slidesPerView: 5,
              },
            }}
          >
            {cards.map(({ title, icon: Icon }, i) => (
              <SwiperSlide key={i} className=" ">
                <div className="rounded-[8px] group overflow-hidden border-[#E2E8F0]">
                  <div className="py-[42px] px-4 space-y-[10px]">
                    <Icon color="#EF8A22" size={20} />
                    <p className="text-sm text-[#0F172A]">{title}</p>
                  </div>
                  <div className="h-[155px] overflow-hidden ">
                    <Image
                      src={`/ctg/image${i + 1}.png`}
                      height={155}
                      width={186}
                      alt={`Image${i + 1}`}
                      className="group-hover:scale-125 w-full h-[155px] transition-transform duration-500"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full flex justify-center ">
            <div className="custom-pagination mt-4 text-center !translate-x-0 "></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
