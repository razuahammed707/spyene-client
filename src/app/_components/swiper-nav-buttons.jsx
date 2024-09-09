import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useSwiper } from "swiper/react";
import { Button } from "@/components/ui/button";
export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="space-x-3">
      <Button
        className="w-[60px] bg-transparent group h-[60px] border border-[1px solid #CBD5E1] rounded-full focus:bg-none hover:bg-transparent focus:border-[#1045AD] hover:border-[#1045AD]"
        onClick={() => swiper.slidePrev()}
      >
        {" "}
        <ArrowLeft className="text-[#CBD5E1] group-focus:text-[#1045AD]  group-hover:text-[#1045AD] " />
      </Button>

      <Button
        className="w-[60px] bg-transparent group h-[60px] border border-[1px solid #CBD5E1] rounded-full focus:bg-none hover:bg-transparent focus:border-[#1045AD] hover:border-[#1045AD]"
        onClick={() => swiper.slideNext()}
      >
        <ArrowRight className="text-[#CBD5E1] group-focus:text-[#1045AD]  group-hover:text-[#1045AD] " />
      </Button>
    </div>
  );
};
