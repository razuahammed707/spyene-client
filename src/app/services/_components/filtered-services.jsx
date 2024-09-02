import Image from "next/image";
import ServiceCard from "./service-card";
import CardsPagination from "./cards-pagination";

const services = [
  {
    src: "/service/Service1.png",
    alt: "SPYENE",
    title: "Air condition Installation & Repair",
  },
  {
    src: "/service/Service2.png",
    alt: "SPYENE",
    title: "CCTV and home security installation",
  },
  {
    src: "/service/Service3.png",
    alt: "SPYENE",
    title: "EV charging station installation",
  },
  {
    src: "/service/Service4.png",
    alt: "SPYENE",
    title: "Electrical safety inspections",
  },
  {
    src: "/service/Service5.png",
    alt: "SPYENE",
    title: "Home automation system installation",
  },
  {
    src: "/service/Service6.png",
    alt: "SPYENE",
    title: "Generator installation and maintenance",
  },
  {
    src: "/service/Service7.png",
    alt: "SPYENE",
    title: "Smart home device integration",
  },
  {
    src: "/service/Service8.png",
    alt: "SPYENE",
    title: "Electrical panel upgrades",
  },
  {
    src: "/service/Service9.png",
    alt: "SPYENE",
    title: "Fuse Box Repairs",
  },
  {
    src: "/service/Service10.png",
    alt: "SPYENE",
    title: "RCD Installation & Testing",
  },
  {
    src: "/service/Service11.png",
    alt: "SPYENE",
    title: "Underground Power",
  },
  {
    src: "/service/Service12.png",
    alt: "SPYENE",
    title: "Data Cabling and Network Wiring",
  },
  {
    src: "/service/Service13.png",
    alt: "SPYENE",
    title: "Power Distribution System & Installation",
  },
  {
    src: "/service/Service14.png",
    alt: "SPYENE",
    title: "UPS System Installation",
  },
  {
    src: "/service/Service15.png",
    alt: "SPYENE",
    title: "Emergency Battery Backup Installation",
  },
];
const FilteredServices = () => {
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
