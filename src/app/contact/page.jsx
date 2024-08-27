import Header from "@/components/header";
import FAQ from "../_components/faq";
import GetQuotation from "../_components/get-quotation";

const ContactPage = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Header />
      <div className="flex w-full max-w-[928px]  mx-auto flex-col text-sm font-semibold leading-5 text-slate-900 max-md:px-5">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="text-3xl tracking-tight leading-tight max-md:max-w-full pt-[128px]">
            Consult with Our Experts
          </div>

          <div className="mt-4 max-md:max-w-full text-[#0F172A] font-inter text-[14px] font-normal leading-[24px]">
            New South Wales is a pioneer in adopting renewable energy. Major
            cities like Sydney, Newcastle, Wollongong, and others are rapidly
            adopting solar and advanced electrical solutions. To help the people
            with this change, Spyene Technology has dedicated, experienced, and
            trained staff. We ensure the best services across the state. Our
            services are available for residential, commercial, and small and
            large industrial projects.
          </div>
          <div className="text-3xl tracking-tight leading-tight max-md:max-w-full pt-[128px]">
            Get in Touch
          </div>
          <div className="mt-4 max-md:max-w-full text-[#0F172A] font-inter text-[14px] font-normal leading-[24px]">
            We offer a wide range of services that includes but not limited to
            wiring, rewiring, electrical inspection, solar panel installations,
            and advanced battery systems.
          </div>
          <div className="mt-4 max-md:max-w-full text-[#0F172A] font-inter text-[14px] font-normal leading-[24px]">
            <b>Phone:</b>
            <div>For immediate assistance, call us at: +61 458 511 460</div>
          </div>
          <div className="mt-4 max-md:max-w-full text-[#0F172A] font-inter text-[14px] font-normal leading-[24px]">
            <b>Email:</b>
            <div className="text-[#0F172A] font-inter text-[14px] font-normal leading-[24px]">
              Send us an email at: spyene@gmail.com
            </div>
          </div>
          <div className="mt-4 max-md:max-w-full text-[#0F172A] font-inter text-[14px] font-normal leading-[24px]">
            <b>Address:</b>
            <div className="text-[#0F172A] font-inter text-[14px] font-normal leading-[24px]">
              Visit our office at: 20 Lindsen St, Mount Druitt NSW 2770
            </div>

            <div className="text-[#0F172A] font-inter text-[14px] font-normal leading-[24px] pb-[10px]">
              ABN: 75 638 855 211
            </div>
          </div>
          <div className="text-[#0F172A] font-inter text-[14px] font-normal leading-[24px]">
            <b>Office Hours :</b>
            <div className="text-[#0F172A] font-inter text-[14px] font-normal leading-[24px] pb-[130px]">
              We are available during the following hours:
              <br />
              Monday to Friday: 9:00 AM - 5:00 PM <br />
              Saturday: 10:00 AM - 2:00 PM
              <br />
              Sunday: Closed <br />
            </div>
          </div>
        </div>
      </div>
      <GetQuotation />
      <FAQ />
    </div>
  );
};

export default ContactPage;
