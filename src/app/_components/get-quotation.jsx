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
      <div className="flex flex-col lg:flex-row w-full max-w-[928px] px-4 lg:px-0 gap-8 justify-center items-center py-20">
        <div className="flex flex-col flex-1 gap-8 items-start lg:items-center text-white">
          <div className="flex gap-2 items-center text-sm font-bold leading-none">
            <Image
              src="/Explore.png" // Path to your image file in the public directory
              alt="explorer" // A description of the image for accessibility
              width={24} // Set the desired width of the image
              height={24} // Set the desired height of the image
            />
            <div>Explore</div>
          </div>
          <div className="text-3xl font-semibold tracking-tight leading-tight">
            Get a Free Quote
          </div>
        </div>
        <div className="flex flex-col flex-1 text-sm">
          <div className="leading-6 text-slate-50 mb-4">
            Spyene Technology has dedicated, experienced, and trained staff.
            We ensure the best services across the state.
          </div>
          
            <GetQuotationModal className="w-full lg:w-auto" />
          
        </div>
      </div>
    </div>
  );
};

export default GetQuotation;
