import React from "react";
import ServiceCard from "./service-card";
import { fetchServices } from "@/shared/helpers/fetch-services";

const categoriesMap = {
  residential: "Residential",
  industrial: "Industrial",
  commercial: "Commercial",
  "solar-panels": "Solar-panels",
  "solar-batteries": "Solar-batteries",
};
const ServiceCards = async ({ ctg }) => {
  const services = await fetchServices(
    categoriesMap[ctg] && `filters[Category][$eq]=${categoriesMap[ctg]}`
  );
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServiceCards;
