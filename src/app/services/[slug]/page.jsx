import ContactUsForm from "@/components/inputs/contact-us-form";
import { fetchServices } from "@/shared/helpers/fetch-services";
import BlockRendererClient from "./_components/blocks-renderer-client";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Services from "@/app/_components/services";

const ServiceDetail = async ({ params: { slug } }) => {
  const services = await fetchServices(`filters[Slug][$eq]=${slug}`);
  if (services.length === 0) return null;
  const service = services[0];
  // console.log("service", service);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center bg-white mx-auto w-full max-w-[928px] pt-12 md:pt-[128px] px-4 md:px-0">
        <div className="overflow-hidden w-full md:w-auto">
          <div className="max-w-full md:max-w-[496px] ">
            <BlockRendererClient content={service?.attributes?.Description} />
          </div>
          <Button className="bg-[#1045AD] mt-4 hover:bg-slate-500">
              <PhoneCall className="h-[20px] w-[20px] mr-[10px]" /> Call us
            </Button>
        </div>

        <div className="sticky right-0 top-0 mt-8 md:mt-0 md:ml-[48px] w-full md:w-[384px] h-auto md:h-[306px]">
          <div className="h-full bg-white">
            <ContactUsForm />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-12 md:py-[128px]">
        <Services />
      </div>
    </>
  );
};

export default ServiceDetail;
