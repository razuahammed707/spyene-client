"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { SwiperNavButtons } from "./swiper-nav-buttons";
import Image from "next/image";

const CustomerReview = () => {
  return (
    <div className="ps-[256px] w-full max-w-[1440px] text-center mb-[128px]">
      <div className="w-full">
        <h2 className="text-[30px] text-[#0F172A] font-semibold">
          What our customers say about us
        </h2>
        <p className="text-sm text-[#0F172A] mt-4">
          Trusted and loved by over 100+ people in Australia
        </p>
      </div>

      <Swiper
        spaceBetween={15}
        slidesPerView={2.75}
        onSlideChange={(e) => console.log("slide change", e)}
        onReachEnd={(e) => console.log("end", e)}
        onSwiper={(swiper) => console.log(swiper)}
        className="ps-[336px]  mt-[48px]"
      >
        <div className="bg-left absolute  bg-white top-0 left-0 z-10 pr-4">
          <div
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 21.18%, #FFF 87.19%), url(/hardhat.png)",
            }}
            className="w-[320px] bg-right bg-no-repeat border-[1px solid #FFFF]  h-[393px] flex items-end "
          >
            <div className="space-y-6 text-start">
              <h1 className="text-[48px] text-[#EF8A22] font-extrabold">
                5.00
              </h1>
              <p className="w-[280px] text-sm text-[#1045AD] leading-6">
                Clutch average based on 70+ reviews. All chances are you’ll be
                impressed too.
              </p>
              <SwiperNavButtons />
            </div>
          </div>
        </div>
        {Array(12)
          .fill("")
          .map((el, i) => (
            <SwiperSlide key={i} className="h-[393px]">
              <div class="bg-[#1045AD] relative text-white py-[53px] px-[32px] rounded-[8px_70px_8px_8px] border-red-900">
                <div
                  style={{
                    position: "absolute",
                    top: -2,
                    right: -2,
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#fff",
                    clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                    borderRadius: "0 0 0 0",
                  }}
                ></div>

                <div class="flex items-center mb-4">
                  <span>5.0</span>
                  <span class="text-yellow-400 ml-1">★★★★★</span>
                </div>
                <hr />
                <div className="space-y-[78px]">
                  <p class="text-xs font-semibold mt-4 w-[235px] text-left ">
                    Absolutely thrilled with our new solar panel system! The
                    installation team was professional, and the entire process
                    was seamless. We've already noticed a significant drop in
                    our energy bills. Highly recommend for anyone looking to go
                    green and save money.
                  </p>

                  <div class="flex items-center">
                    <Image
                      src="/review1.png"
                      width={40}
                      height={40}
                      alt="User Image"
                      class="w-10 h-10 rounded-full mr-3"
                    />
                    <div className="text-left">
                      <div class="font-bold text-sm">Darin Nguyen</div>
                      <div class="text-sm">@staking</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default CustomerReview;
