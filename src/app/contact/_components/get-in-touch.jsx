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
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12">
          <div className="w-full lg:flex-1">
            <ContactUsForm />
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.734760337889!2d150.81227267643604!3d-33.7675193138215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129a5ffb188413%3A0xf3bb946d737b8e7!2sLinden%20St%2C%20Mount%20Druitt%20NSW%202770%2C%20Australia!5e0!3m2!1sen!2sbd!4v1725790352128!5m2!1sen!2sbd"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-lg h-[310px] w-full lg:w-[496px]  "
          ></iframe>
        </div>
        <div className="space-y-4 text-sm text-[#0F172A]">
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
