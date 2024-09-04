import Importance from "../[slug]/_components/importance";
import Benefits from "../[slug]/_components/benefits";
import WhyUs from "../[slug]/_components/why-us";
import ContactUsForm from "@/components/inputs/contact-us-form";
import Services from "@/app/_components/services";
import { fetchServices } from "@/shared/helpers/fetch-services";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "./_components/blocks-renderer-client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

const ServiceDetail = async ({ params: { slug } }) => {
  const services = await fetchServices(`filters[Slug][$eq]=${slug}`);
  if (services.length === 0) return null;
  const service = services[0];
  console.log("service", service);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center bg-white mx-auto w-full max-w-[928px] pt-12 md:pt-[128px] px-4 md:px-0">
        <div className="overflow-hidden w-full md:w-auto">
          <div className="max-w-full md:max-w-[496px] ">
            <BlockRendererClient content={service?.attributes?.Description} />
            {/*  <h2 className="self-stretch text-black font-inter text-2xl md:text-[30px] font-semibold leading-[36px] tracking-[-0.225px]">
              Air Condition Installation & Repair
            </h2>
            <p className="pt-4 text-sm md:text-[14px]">
              The bright summer sun outside the house makes the indoors quite
              uncomfortable. It affects regular life in the house and
              productivity at the office. The installation of air conditioning
              can help to resolve the problem.
            </p> */}

            {/* <Importance />
            <Benefits />
            <WhyUs /> */}
           </div>
        </div>

        <div className="sticky right-0 top-0 mt-8 md:mt-0 md:ml-[48px] w-full md:w-[384px] h-auto md:h-[306px]">
          <div className="h-full bg-white">
            <ContactUsForm iscall={true} />
          </div>
        </div>
      </div>
      <div className="py-12 md:py-[128px]">
        <Services />
      </div>
    </>
  );
};

export default ServiceDetail;
