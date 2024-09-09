import Header from "@/components/header";
import FAQ from "../_components/faq";
import GetQuotation from "../_components/get-quotation";
import GentInTouch from "./_components/get-in-touch";

const ContactPage = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Header />
      <div className="w-full max-w-[960px] my-12 md:my-[128px] px-4 lg:px-0 space-y-4">
        <h2 className="text-2xl md:text-3xl text-black font-semibold">
          Consult with Our Experts
        </h2>
        <p className="text-sm text-[#0F172A]">
          New South Wales is a pioneer in adopting renewable energy. Major
          cities like Sydney, Newcastle, Wollongong, and others are rapidly
          adopting solar and advanced electrical solutions. To help the people
          with this change, Spyene Technology has dedicated, experienced, and
          trained staff. We ensure the best services across the state. Our
          services are available for residential, commercial, and small and
          large industrial projects.
        </p>
      </div>
      <GentInTouch />
      <GetQuotation className="my-12 md:my-[128px]" />
      <FAQ className="mb-12 md:mb-[128px]" />
    </div>
  );
};

export default ContactPage;
