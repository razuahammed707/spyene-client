import ServiceCard from "./service-card";
import CardsPagination from "./cards-pagination";
import { fetchServices } from "@/shared/helpers/fetch-services";

const FilteredServices = async () => {
  const services = await fetchServices();
  return (
    <>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        <CardsPagination />
      </div>
    </>
  );
};

export default FilteredServices;
