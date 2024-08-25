import * as React from "react";

function FAQ() {
  return (
    <div className="ms-[-256px] flex gap-10 justify-center items-center px-64 text-slate-900 max-md:px-5">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="text-3xl font-semibold tracking-tight leading-tight max-md:max-w-full">
          Frequently asked questions
        </div>
        <div className="flex flex-col items-start mt-4 w-full text-5xl font-extrabold tracking-tight leading-none max-md:max-w-full max-md:text-4xl">
          <div className="gap-8 self-stretch max-w-full whitespace-nowrap min-h-[52px] w-[370px] max-md:text-4xl">
            Consultation?
          </div>
          <div className="gap-8 self-stretch mt-2 max-w-full whitespace-nowrap min-h-[52px] w-[370px] max-md:text-4xl">
            Solutions?
          </div>
          <div className="gap-8 self-stretch mt-2 max-w-full whitespace-nowrap min-h-[52px] w-[370px] max-md:text-4xl">
            Maintenance?
          </div>
          <div className="gap-8 self-stretch mt-2 max-w-full whitespace-nowrap min-h-[52px] w-[370px] max-md:text-4xl">
            Suitable?
          </div>
          <div className="gap-8 self-stretch mt-2 max-w-full whitespace-nowrap min-h-[52px] w-[370px] max-md:text-4xl">
            Warranty?
          </div>
          <div className="gap-8 self-stretch mt-2 max-w-full min-h-[52px] w-[370px] max-md:text-4xl">
            System issues?
          </div>
          <div className="gap-8 self-stretch mt-2 max-w-full min-h-[52px] w-[370px] max-md:text-4xl">
            Get a quote?
          </div>
        </div>
      </div>
    </div>
  );
}
export default FAQ;