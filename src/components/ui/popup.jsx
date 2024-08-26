import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PopUp() {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button className="bg-orange-400 max-w-[140px]">Get a Free Quote</Button>
      </DialogTrigger>
      <DialogContent className="flex p-8 flex-col items-right gap-4 rounded-md bg-[#0F172A] w-[1000px]">
        <DialogHeader>
          <DialogTitle className="text-[#F8FAFC] text-[24px] font-normal leading-[20px] font-inter items-stretch gap-2">Get a free quote !</DialogTitle>
          <DialogDescription className="text-[#F8FAFC] text-[14px] font-normal leading-[20px] font-inter items-stretch">
          We're here to help you harness the power of the sun and provide reliable energy storage options. Whether you have questions, need a quote, or want to learn more about our products and services, we'd love to hear from you.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              
            </Label>
            <Input id="name" value="Name" className="col-span-3 bg-white" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              
            </Label>
            <Input id="Email" value="Email" className="col-span-3 bg-white" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              
            </Label>
            <Input id="mobile" value="Mobile" className="col-span-3 bg-white" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mobile" className="text-right">
             
            </Label>
            <Input id="message" value="Message" className="col-span-3 bg-white" />
          </div>
        </div>
        <DialogFooter>
          <Button className="bg-orange-600" type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default PopUp