import ContactUsForm from "@/components/inputs/contact-us-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const GentInTouch = () => {
  return (
    <>
      <div className="w-full max-w-[928px] space-y-12">
        <h2 className="text-3xl text-[#0F172A] font-semibold leading-9">
          Contact with us !
        </h2>
        <p className="text-sm text-[#0F172A] ">
          We offer a wide range of services that includes but not limited to
          wiring, rewiring, electrical inspection, solar panel installations,
          and advanced battery systems.
        </p>
        <div className="flex items-center space-x-12 h-[298px]">
          <div className="w-full">
            <ContactUsForm iscall={true} />
          </div>
          <Image
            src="/locate-map.png"
            height={298}
            width={496}
            alt="Map Loaction Image"
            className="w-full h-full rouned-lg"
          />
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
