import ContactUsForm from "@/components/inputs/contact-us-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const GentInTouch = () => {
  return (
    <>
      <div className="w-full max-w-[928px] space-y-12">
        <h2 className="text-3xl text-black font-semibold">Get in Touch</h2>
        <p className="text-sm text-[#0F172A] ">
          We offer a wide range of services that includes but not limited to
          wiring, rewiring, electrical inspection, solar panel installations,
          and advanced battery systems.
        </p>
        <div className="flex space-x-12 h-[394px]">
          <Image
            src="/locate-map.png"
            height={394}
            width={440}
            alt="Map Loaction Image"
            className="w-full h-full rouned-lg"
          />
          <div className="p-8 border-2 border-solid border-[#E2E8F0] shadow-[0px_11px_15px_0px_rgba(169,175,183,0.25)] w-full space-y-[25px]">
            {/* <h3 className="text-2xl font-semibold">Contact with us</h3> */}
            <ContactUsForm iscall={true} />
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-[#0F172A]  text-sm">
            <b className="font-semibold">Office Hours:</b>
            <p>
              We are available during the following hours: Monday to Friday:
              9:00 AM - 5:00 PM / Saturday: 10:00 AM - 2:00 PM / Sunday: Closed.
            </p>
          </div>
          <div className="text-[#0F172A]  text-sm">
            <b className="font-semibold">Address:</b>
            <p>
              Visit our office at: 20 Lindsen St, Mount Druitt NSW 2770. ABN: 75
              638 855 211
            </p>
          </div>
          <div className="text-[#0F172A]  text-sm">
            <b className="font-semibold">Phone:</b>
            <p>For immediate assistance, call us at: +61 458 511 460</p>
          </div>
          <div className="text-[#0F172A]  text-sm">
            <b className="font-semibold">Email:</b>
            <p>Send us an email at: spyene@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GentInTouch;
