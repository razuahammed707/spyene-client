import Image from "next/image";
import PopUp from "@/components/ui/popup";
const GetQuotation = () => {
  return (
    <div className=" ">
      <div className="flex w-full gap-8 justify-center items-center self-stretch px-64 py-20 bg-blue-800  ">
        <div className="flex flex-wrap flex-1 shrink gap-8 items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto text-white basis-0 min-h-[97px] min-w-[240px] max-md:max-w-full">
            <div className="flex gap-2 items-center self-start text-sm font-bold leading-none whitespace-nowrap">
              <Image
                src="/Explore.png" // Path to your image file in the public directory
                alt="explorer" // A description of the image for accessibility
                width={24} // Set the desired width of the image
                height={24} // Set the desired height of the image
              />
              <div className="self-stretch my-auto">Explore</div>
            </div>
            <div className="mt-2 text-3xl font-semibold tracking-tight leading-tight">
              Get a Free Quote
            </div>
          </div>
          <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto text-sm basis-0 min-w-[240px] max-md:max-w-full">
            <div className="leading-6 text-slate-50 max-md:max-w-full pb-[20px]">
              Spyene Technology has dedicated, experienced, and trained staff.
              We ensure the best services across the state.
            </div>
            <PopUp/></div>
        </div>
      </div>
    </div>
  );
};

export default GetQuotation;