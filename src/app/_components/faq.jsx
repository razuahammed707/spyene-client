import * as React from "react";

function FAQ() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(270deg, rgba(255, 255, 255, 0) 11.82%, #FFF 52.49%), url(/bg-faq.png)",
      }}
      className="max-w-[1440px] ps-[256px] bg-fit bg-no-repeat  mt-[55px] bg-right w-full flex gap-10 justify-center items-center   text-slate-900 max-md:px-5"
    >
      <div className="flex flex-col flex-1 shrink self-stretch space-y-4 w-full basis-0    max-md:max-w-full">
        <div className="text-3xl font-semibold text-[#0F172A] tracking-tight leading-tight max-md:max-w-full">
          Frequently asked questions
        </div>
        <div className="flex pr-[256px] border flex-col items-start mt-4 w-full text-5xl font-extrabold tracking-tight leading-none max-md:max-w-full max-md:text-4xl">
          <div class="group flex border">
            <div class="cursor-pointer">Consultation?</div>
            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Detailed content about Consultation.
            </div>
          </div>
          <div class="group flex border">
            <div class="cursor-pointer">Solutions?</div>
            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              Detailed content about Consultation.
            </div>
          </div>

          <div className="space-y-2 text-[48px] text-[text[#0F172A] self-stretch mt-2 max-w-full whitespace-nowrap min-h-[52px] w-[370px] max-md:text-4xl">
            Maintenance?
          </div>
          <div className="space-y-2 text-[48px] text-[text[#0F172A] self-stretch mt-2 max-w-full whitespace-nowrap min-h-[52px] w-[370px] max-md:text-4xl">
            Suitable?
          </div>
          <div className="space-y-2 text-[48px] text-[text[#0F172A] self-stretch mt-2 max-w-full whitespace-nowrap min-h-[52px] w-[370px] max-md:text-4xl">
            Warranty?
          </div>
          <div className="space-y-2 text-[48px] text-[text[#0F172A] self-stretch mt-2 max-w-full min-h-[52px] w-[370px] max-md:text-4xl">
            System issues?
          </div>
          <div className="space-y-2 text-[48px] text-[text[#0F172A] self-stretch mt-2 max-w-full min-h-[52px] w-[370px] max-md:text-4xl">
            Get a quote?
          </div>
        </div>
      </div>
    </div>
  );
}
export default FAQ;
