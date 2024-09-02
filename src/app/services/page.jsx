import Image from "next/image";

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

const Page = () => {
  return (
    <div className="flex flex-col px-64 max-md:px-5">
      <div className="flex flex-col justify-center w-full rounded-2xl max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="text-3xl font-semibold tracking-tight leading-tight text-black max-md:max-w-full">
            What we offer
          </div>
          <div className="mt-4 text-sm leading-6 text-slate-900 max-md:max-w-full">
            We offer comprehensive electrical and solar services to ensure
            your home is safe, energy-efficient, and fully powered. Our
            licensed electricians handle everything from minor repairs to
            major installations.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 mt-12 max-md:mt-10 max-md:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-sm">
            <div className="w-full h-auto">
              <Image src={service.src} alt={service.alt} layout="responsive" width={179} height={160} />
            </div>
            <div className="flex flex-col px-2 py-4 w-full bg-white">
              <div className="leading-6 text-center text-gray-900">{service.title}</div>
              <div className="flex items-center justify-center gap-2 self-stretch px-4 py-3 mt-4 w-full font-medium text-white bg-blue-800 rounded-md min-h-[40px]">
                View details
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
