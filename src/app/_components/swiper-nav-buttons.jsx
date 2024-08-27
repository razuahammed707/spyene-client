import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="space-x-3">
      <Button
        className="w-[60px] bg-transparent  h-[60px] border border-[1px solid #CBD5E1] rounded-full"
        onClick={() => swiper.slidePrev()}
      >
        {" "}
        <ArrowLeft color="#CBD5E1" />
      </Button>

      <Button
        className="w-[60px] bg-transparent h-[60px] border border-[1px solid #CBD5E1] rounded-full"
        onClick={() => swiper.slideNext()}
      >
        <ArrowRight color="#CBD5E1" />
      </Button>
    </div>
  );
};
