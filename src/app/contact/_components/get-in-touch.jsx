import ContactUsForm from "@/components/inputs/contact-us-form";
import Image from "next/image";

const GentInTouch = () => {
  return (
    <>
      <div className="w-full max-w-[928px] px-4 lg:px-0 space-y-6 md:space-y-12  mx-auto">
        <h2 className="text-2xl md:text-3xl text-[#0F172A] font-semibold leading-7 md:leading-9">
          Contact with us !
        </h2>
        <p className="text-sm text-[#0F172A]">
          We offer a wide range of services that includes but not limited to
          wiring, rewiring, electrical inspection, solar panel installations,
          and advanced battery systems.
        </p>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
          <div className="w-full lg:max-w-[384px]">
            <ContactUsForm iscall={true} />
          </div>
          <Image
            src="/locate-map.png"
            height={298}
            width={496}
            alt="Map Location Image"
            className="rounded-lg h-[250px] md:h-[310px] w-full object-cover"
          />
        </div>
        <div className="space-y-4 text-sm text-[#0F172A]">
          <div>
            <b className="font-semibold">Office Hours:</b>
            <p>
              We are available during the following hours: Monday to Friday:
              9:00 AM - 5:00 PM / Saturday: 10:00 AM - 2:00 PM / Sunday: Closed.
            </p>
          </div>
          <div>
            <b className="font-semibold">Address:</b>
            <p>
              Visit our office at: 20 Lindsen St, Mount Druitt NSW 2770. ABN: 75
              638 855 211
            </p>
          </div>
          <div>
            <b className="font-semibold">Phone:</b>
            <p>For immediate assistance, call us at: +61 458 511 460</p>
          </div>
          <div>
            <b className="font-semibold">Email:</b>
            <p>Send us an email at: spyene@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GentInTouch;
