import GetQuotation from "@/app/_components/get-quotation";
import { CategoryFilterTabs } from "./category-filter-tabs";
import ServiceCards from "./service-cards";
import CardsPagination from "./cards-pagination";
import { fetchServices } from "@/shared/helpers/fetch-services";

const categoriesMap = {
  residential: "Residential",
  industrial: "Industrial",
  commercial: "Commercial",
  "solar-panels": "Solar-panels",
  "solar-batteries": "Solar-batteries",
};
const CategoryWiseServices = async ({ ctg }) => {
  const services = await fetchServices(
    categoriesMap[ctg] && `filters[Category][$eq]=${categoriesMap[ctg]}`
  );
  return (
    <>
      <CategoryFilterTabs />
      <div className="my-[128px] px-4 lg:px-0 space-y-12 max-w-[928px]">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight leading-tight text-black max-md:max-w-full">
            What we offer
          </h2>
          <p className="text-sm leading-6 text-slate-900 max-md:max-w-full">
            We offer comprehensive electrical and solar services to ensure your
            home is safe, energy-efficient, and fully powered. Our licensed
            electricians handle everything from minor repairs to major
            installations.
          </p>
        </div>
        <ServiceCards services={services} />
      </div>
      <GetQuotation className="my-0" />
    </>
  );
};

export default CategoryWiseServices;
