"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { SwiperNavButtons } from "./swiper-nav-buttons";
import Image from "next/image";
import { Pagination } from "swiper/modules";
const reviews = [
  {
    message:
      "Cheap affordable service.Proffesional very knowledgeable Highly recommend.",
    name: "Freddy Zarbee",
    twitter_profile: "staking",
  },
  {
    message:
      "I had Mohammed install a 13kW solar system on my roof and an associate inverter. He was careful and considerate of how and where installed the system, asking me for my preferences regarding the position of the inverter, and associated cabling. He attempted to hide all of the cabling in our wall cavity, but the cavity wasn't suitable. Because of this the cables had to be in plain view, but he was exceptionally tidy in how he laid them out.",
    name: "Lucas T",
    twitter_profile: "LucasTAU",
  },
  // {
  //   message:
  //     "The air conditioning service from Spyene Technologies was outstanding. Their team was prompt, professional, and efficient. The system now runs perfectly. Highly recommended for anyone seeking reliable and high-quality air conditioning solutions.",
  //   name: "Jasper Clarke",
  //   twitter_profile: "JasperClarke88",
  // },
  // {
  //   message:
  //     "Highly satisfied with the industrial smoke alarm service. The team was professional, efficient, and thorough. Installation was seamless, and testing confirmed all systems worked perfectly. Highly recommended!",
  //   name: "Dylan Harris",
  //   twitter_profile: "DylHarris23",
  // },
  // {
  //   message:
  //     "The RCD installation and testing service was excellent. The process was straightforward and thorough, with all checks completed efficiently. The system works perfectly, and I feel confident in using their services again for any future electrical issues.",
  //   name: "Sophie Brown",
  //   twitter_profile: "SophieBrown87",
  // },
];
const CustomerReview = () => {
  return (
    <div className="ps-4 pr-4 xl:pr-0 xl:ps-[256px] mx-auto w-full max-w-[928px] xl:max-w-[1440px] text-center mb-[128px]">
      <div className="w-full">
        <h2 className="text-[30px] text-[#0F172A] font-semibold">
          What Our Customers Say About Us
        </h2>
        <p className="text-sm text-[#0F172A] mt-4">
          Trusted and loved by over 1000+ people in Australia
        </p>
      </div>

      <Swiper
        spaceBetween={15}
        slidesPerView={1}
        /*  onSlideChange={(e) => console.log("slide change", e)}
        onReachEnd={(e) => console.log("end", e)}
        onSwiper={(swiper) => console.log(swiper)} */
        pagination={{
          el: ".review-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="sm:ps-[336px] mt-12"
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          460: {
            slidesPerView: 1.75,
          },
          560: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },
          774: {
            slidesPerView: 1.75,
          },
          837: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 1.75,
          },
          1046: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 2.75,
          },
        }}
      >
        <div className="absolute bac  hidden sm:block bg-white top-0 left-0 z-10 pr-4">
          <div
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 21.18%, #FFF 87.19%), url(/hardhat.png)",
            }}
            className="w-[320px] bg-right bg-no-repeat h-[393px] flex items-end "
          >
            <div className="space-y-6 text-start">
              <h1 className="text-[48px] text-[#EF8A22] font-extrabold">
                5.00
              </h1>
              <p className="max-w-[280px] text-sm text-[#1045AD] leading-6">
                Clutch average based on 70+ reviews. All chances are you’ll be
                impressed too.
              </p>
              <SwiperNavButtons />
            </div>
          </div>
        </div>
        {reviews.map((review, i) => (
          <SwiperSlide key={i} className="h-[393px]">
            <div className="bg-[#1045AD] h-full relative box-border text-white py-[53px] px-[32px] rounded-[8px_70px_8px_8px] flex flex-col">
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

              <div className="flex items-center mb-4">
                <span>5.0</span>
                <span className="text-yellow-400 ml-1">★★★★★</span>
              </div>
              <hr />
              <div className="h-full flex w-full flex-col justify-between">
                <p className="text-xs font-semibold mt-4 max-w-[235px] text-left max-h-[146px] overflow-scroll scrollbar-hide">
                  {review.message}
                </p>

                <div className="flex items-center">
                  <Image
                    src={`/lan-hdr/avatar${i + 1}.png`}
                    width={40}
                    height={40}
                    alt="User Image"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="text-left">
                    <div className="font-bold text-sm">{review.name}</div>
                    <div className="text-sm">
                      {" "}
                      {`@${review.twitter_profile}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full sm:hidden flex justify-center ">
        <div className="review-pagination mt-4 text-center !translate-x-0 "></div>
      </div>
    </div>
  );
};

export default CustomerReview;
