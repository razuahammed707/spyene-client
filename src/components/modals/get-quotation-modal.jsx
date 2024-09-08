import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Cross2Icon } from "@radix-ui/react-icons";
/* import { Mail } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react"; */
import ContactUsForm from "../inputs/contact-us-form";

export function GetQuotationModal({ bg_trigger }) {
  return (
    <Dialog className="">
      <DialogTrigger asChild>
        <Button
          className={cn(
            "bg-orange-400 w-full lg:max-w-[140px] ",
            bg_trigger && `bg-[${bg_trigger}]`
          )}
        >
          Get a Free Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="flex pt-20 pb-8 px-8 max-w-[913px] h-[415px] space-x-[48px] border-none justify-between rounded-md bg-[#ffffff]">
        <div className="w-full  flex flex-col ">
          <div className="space-y-6">
            <h3 className="text-[64748B] text-[24px] font-semibold leading-[20px] font-inter items-stretch gap-2">
              Get a free quote !
            </h3>
            <p className="text-[64748B] text-[14px] font-normal leading-[20px] items-stretch">
              We're here to help you harness the power of the sun and provide
              reliable energy storage options. Whether you have questions, need
              a quote, or want to learn more about our products and services,
              we'd love to hear from you.
            </p>
          </div>
          {/* <div className="flex space-x-8">
            <Facebook color="#EF8A22" className="h-4 w-4" />{" "}
            <Instagram color="#EF8A22" className="h-4 w-4" />{" "}
            <Twitter color="#EF8A22" className="h-4 w-4" />{" "}
            <Mail color="#EF8A22" className="h-4 w-4" />
          </div> */}
        </div>
        <div className="w-full">
          <ContactUsForm />
        </div>
        <DialogClose asChild>
          <button
            className="absolute top-8 right-8 p-2 rounded-full bg-[rgba(0,0,0,0.25)] text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
            aria-label="Close"
          >
            <Cross2Icon color="#FFFF" className="h-4 w-4" />
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
export default GetQuotationModal;
