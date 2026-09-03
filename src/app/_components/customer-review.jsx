"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { SwiperNavButtons } from "./swiper-nav-buttons";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { useState, useEffect } from "react";


const INITIAL_CHARS = 150;


const ReviewContent = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState("auto");
 
  const cleanMessage = review.message.trim();
  const shouldShowButton = cleanMessage.length > INITIAL_CHARS;


  // Reset expansion state when review changes
  useEffect(() => {
    setIsExpanded(false);
  }, [review]);
 
  const getDisplayText = () => {
    if (!shouldShowButton || isExpanded) {
      return cleanMessage;
    }
   
    // Find a good breakpoint near INITIAL_CHARS
    let breakPoint = INITIAL_CHARS;
    while (breakPoint > 0 && cleanMessage[breakPoint] !== ' ' && cleanMessage[breakPoint] !== '\n') {
      breakPoint--;
    }
   
    return cleanMessage.substring(0, breakPoint) + '...';
  };


  const formatMessage = (text) => {
    return text.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map((line, index) => (
        <p key={index} className={`mb-2 ${line.startsWith('-') ? 'pl-4' : ''}`}>
          {line}
        </p>
      ));
  };


  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    // Reset height to auto when toggling
    setContentHeight("auto");
  };


  return (
    <div
      className={`text-xs font-semibold mt-4 max-w-[235px] text-left overflow-y-auto scrollbar-hide transition-all duration-300 ${
        isExpanded ? 'max-h-[150px]' : 'max-h-[150px]'
      }`}
      style={{ height: contentHeight }}
    >
      <div>{formatMessage(getDisplayText())}</div>
      {shouldShowButton && (
        <button
          onClick={toggleExpand}
          className="text-yellow-400 hover:text-yellow-300 transition-colors mt-2 cursor-pointer text-xs font-semibold"
        >
          {isExpanded ? "View Less" : "View More"}
        </button>
      )}
    </div>
  );
};


const CustomerReview = () => {
  const reviews = [
    {
      message: "Cheap affordable service. Professional very knowledgeable Highly recommend.",
      name: "Freddy Zarbee",
      twitter_profile: "staking",
    },
    {
      message: `
   
  I had Mohammed install a 13kW solar system on my roof and an associate inverter.
 
  He was careful and considerate of how and where installed the system, asking me for my preferences regarding the position of the inverter, and associated cabling. He attempted to hide all of the cabling in our wall cavity, but the cavity wasn't suitable. Because of this the cables had to be in plain view, but he was exceptionally tidy in how he laid them out.`,
      name: "Lucas T",
      twitter_profile: "LucasTAU",
    },
    {
      message: ` I recently had Spyene Technologies install a 12kW solar system at my property, and I couldn't be more impressed with their service. Mohammed and his team demonstrated exceptional professionalism from start to finish.
 
  The project involved removing our old solar system and installing the new one on our challenging 6-meter high roof. Despite the difficult access, the team maintained a positive attitude and found solutions without any complaints.
 
  What stood out about their service:
  - Punctual and reliable - the team arrived on time as scheduled
  - Comprehensive service - they handled everything from dismantling and disposing of the old system to installing the new one
  - Attention to detail - the installation was completed immaculately
  - Full setup support - they even helped set up and configure the monitoring app on my phone
  - Professional problem-solving - they expertly managed the challenging roof access
 
  The entire process was smooth and hassle-free, with the team showing great expertise and commitment to quality work. Mohammed's leadership and customer service were exemplary.
 
  I highly recommend Spyene Technologies for anyone considering solar installation. Their combination of technical expertise, professional service, and excellent work ethic deserves nothing less than 5 stars. They truly exceeded my expectations in every aspect.`,
      name: "Bassam T",
      twitter_profile: "JasperClarke88",
    },
    {
      message: `Spyene are very knowledgeable and talked me through my best options and made things very clear and understandable. I highly recommend them to anyone wanting to install solar panels. `,
      name: "Katie",
      twitter_profile: "DylHarris23",
    },
    {
      message: `I recently had solar panels installed on my house by Spyene, and I couldn't be happier with the decision. From the initial consultation to the final installation, the team was professional, knowledgeable, and genuinely cared about making sure everything was perfect. `,
      name: "Ruquaya",
      twitter_profile: "SophieBrown87",
    },
    {
      message: `Great customer service, very professional and responsive`,
      name: "Zak",
      twitter_profile: "SophieBrown87",
    },
  ];


  return (
    <div className="ps-4 pr-4 xl:pr-0 xl:ps-[256px] mx-auto w-full max-w-[928px] xl:max-w-[1440px] text-center mb-[128px]">
      <div className="w-full">
        <h2 className="text-[30px] text-[#0F172A] font-semibold">
          What Our Customers Say About Us
        </h2>
        <p className="text-sm text-[#0F172A] mt-4">
          Trusted and loved by over 1000+ people in Australia
        </p>
      </div>


      <Swiper
        spaceBetween={15}
        slidesPerView={1}
        pagination={{
          el: ".review-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="sm:ps-[336px] mt-12"
        breakpoints={{
          360: { slidesPerView: 1 },
          460: { slidesPerView: 1.75 },
          560: { slidesPerView: 2 },
          640: { slidesPerView: 1 },
          774: { slidesPerView: 1.75 },
          837: { slidesPerView: 2 },
          1024: { slidesPerView: 1.75 },
          1046: { slidesPerView: 2 },
          1280: { slidesPerView: 2.75 },
        }}
      >
        <div className="absolute hidden sm:block bg-white top-0 left-0 z-10 pr-4">
          <div
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 21.18%, #FFF 87.19%), url(/hardhat.png)",
            }}
            className="w-[320px] bg-right bg-no-repeat h-[393px] flex items-end"
          >
            <div className="space-y-6 text-start">
              <h1 className="text-[48px] text-[#EF8A22] font-extrabold">
                5.00
              </h1>
              <p className="max-w-[280px] text-sm text-[#1045AD] leading-6">
                Clutch average based on 70+ reviews. All chances are you&apos;ll be
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
                <ReviewContent review={review} />
                <div className="flex items-center mt-4">
                  <Image
                    src="/lan-hdr/avatar.png"
                    width={40}
                    height={40}
                    alt="User Image"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="text-left">
                    <div className="font-bold text-sm">{review.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     
      <div className="w-full sm:hidden flex justify-center">
        <div className="review-pagination mt-4 text-center !translate-x-0"></div>
      </div>
    </div>
  );
};


export default CustomerReview;

