import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="space-x-3">
      <Button
        className="border rounded-full py-3 px-[7px]"
        onClick={() => swiper.slidePrev()}
      >
        {" "}
        <ChevronLeft color="#EF8A22" />
      </Button>

      <Button
        className="border rounded-full py-3 px-[7px]"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRight color="#EF8A22" />
      </Button>
    </div>
  );
};
