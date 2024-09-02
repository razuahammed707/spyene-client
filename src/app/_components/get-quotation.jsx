import Image from "next/image";
import GetQuotationModal from "@/components/modals/get-quotation-modal";
import { cn } from "@/lib/utils";
const GetQuotation = ({ className }) => {
  return (
    <div
      className={cn(
        "w-full my-[128px] flex justify-center bg-blue-800",
        className
      )}
    >
      <div className="flex w-full max-w-[928px] px-4 lg:px-0 gap-8 justify-center items-center self-stretch py-20 ">
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
            <GetQuotationModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuotation;