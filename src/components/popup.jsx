import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { ShieldCloseIcon } from "lucide-react";
import { CrossIcon } from "lucide-react";
import { Cross } from "lucide-react";

export function PopUp() {
  return (
    <Dialog className="">
      <DialogTrigger asChild>
        <Button className="bg-orange-400 max-w-[140px]">
          Get a Free Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="flex p-8 max-w-[913px] space-x-[48px] border-none justify-between rounded-md bg-[#0F172A]">
        <div className=" w-full space-y-6 mt-12">
          <h3 className="text-[#F8FAFC] text-[24px] font-semibold leading-[20px] font-inter items-stretch gap-2">
            Get a free quote !
          </h3>
          <p className="text-[#F2F2F2] text-[14px] font-normal leading-[20px] items-stretch">
            We're here to help you harness the power of the sun and provide
            reliable energy storage options. Whether you have questions, need a
            quote, or want to learn more about our products and services, we'd
            love to hear from you.
          </p>
        </div>
        <div className="w-full ">
          <div className="space-y-2 mb-[25px]">
            <Input id="name" value="Name" className="  bg-white" />
            <Input id="Email" value="Email" className="  bg-white" />
            <Input id="mobile" value="Mobile" className="  bg-white" />
            <Textarea placeholder="Message" className="bg-white" />
          </div>
          <Button
            className="bg-orange-600 w-full hover:bg-slate-500"
            type="submit"
          >
            Submit
          </Button>
        </div>
        <DialogClose asChild>
          <span
            className="absolute top-2 right-4 bg-red-300 "
          >
            <X />{" "}
          </span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
export default PopUp;
