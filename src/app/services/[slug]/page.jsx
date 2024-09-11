import { fetchServices } from "@/shared/helpers/fetch-services";
import BlockRendererClient from "./_components/blocks-renderer-client";
import Services from "@/app/_components/services";
import GetQuotation from "@/app/_components/get-quotation";
import ContactUsButton from "@/components/contact-us-button";

export async function generateStaticParams() {
  const services = await fetchServices();
  return services.map((service) => ({
    slug: service.attributes.Slug,
  }));
}

const ServiceDetail = async ({ params: { slug } }) => {
  const services = await fetchServices(`filters[Slug][$eq]=${slug}`);
  if (services.length === 0) return null;
  const service = services[0];
  // console.log("service", service);

  return (
    <>
      <div className="bg-white mx-auto w-full max-w-[928px] pt-12 md:pt-[128px] px-4 lg:px-0">
        <div className="w-full">
          <BlockRendererClient content={service?.attributes?.Description} />
        </div>
        <ContactUsButton className="mt-4 w-[223px]" color="#1045AD" />
      </div>
      <GetQuotation className="my-12 md:my-[128px]" />
      <Services className="mb-12 md:mb-[128px] " />
    </>
  );
};

export default ServiceDetail;
