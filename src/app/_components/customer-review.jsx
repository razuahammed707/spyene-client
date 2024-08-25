"use client";
 import { SwiperSlide,Swiper } from "swiper/react";
import { SwiperNavButtons } from "./swiper-nav-buttons";

const CustomerReview = () => {
  return (
    <div className="w-full text-center py-[128px]">
      <div className="w-full">
        <h2 className="text-[30px] text-[#0F172A] font-semibold">
          What our customers say about us
        </h2>
        <p className="text-sm text-[#0F172A] mt-4">
          Trusted and loved by over 100+ people in Australia
        </p>
      </div>

      <div>
        <div></div>
        <div>
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
                  <div
                    style={{ backgroundImage: "url(/review-card-bg.png)" }}
                    class="bg-cover  text-white p-5 rounded-lg w-64 relative"
                  >
                    <div class="flex items-center mb-3">
                      <span>5.0</span>
                      <span class="text-yellow-400 ml-1">★★★★★</span>
                    </div>

                    <p class="text-sm mb-4">
                      Absolutely thrilled with our new solar panel system! The
                      installation team was professional, and the entire process
                      was seamless. We've already noticed a significant drop in
                      our energy bills. Highly recommend for anyone looking to
                      go green and save money.
                    </p>

                    <div class="flex items-center">
                      <img
                        src=" "
                        alt="User Image"
                        class="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div class="font-bold">Darin Nguyen</div>
                        <div class="text-gray-300 text-xs">@staking</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

            <SwiperNavButtons />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
