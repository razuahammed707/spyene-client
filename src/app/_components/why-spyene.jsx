import { File } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    image: "/faq/solar1.png", // Replace with actual image path
    icon: "/faq/icon1.svg", // Replace with actual icon path
    title: "Expertise and Experience",
    description:
      "Green energy solutions and grid-tied systems, facilitating energy-efficient solar installations and smart home systems.",
  },
  {
    image: "/faq/solar2.png", // Replace with actual image path
    icon: "/faq/icon2.svg", // Replace with actual icon path
    title: "Tailored Solution",
    description:
      "Reliable and customized solar solutions for industries, reducing energy consumption through pre-efficient energy management for large-scale operations.",
  },
  {
    image: "/faq/solar3.png", // Replace with actual image path
    icon: "/faq/icon3.svg", // Replace with actual icon path
    title: "Advanced Technology",
    description:
      "Scalable, secure, and efficient solutions designed to optimize energy efficiency and reduce operational costs for businesses.",
  },
  {
    image: "/faq/solar4.png", // Replace with actual image path
    icon: "/faq/icon4.svg", // Replace with actual icon path
    title: "Local Knowledge",
    description:
      "Reliable and efficient solar solutions for industrial facilities, ensuring consistent power and effective energy management for large-scale operations.",
  },
  {
    image: "/faq/solar5.png", // Replace with actual image path
    icon: "/faq/icon5.svg", // Replace with actual icon path
    title: "Sustainability",
    description:
      "Top-quality solar panel services, from installation to maintenance, helping you secure clean energy and reduce costs.",
  },
  {
    image: "/faq/solar6.png", // Replace with actual image path
    icon: "/faq/icon6.svg", // Replace with actual icon path
    title: "Transparency",
    description:
      "Top-quality solar panel services, from installation to maintenance, helping you secure clean energy and reduce costs.",
  },
];

function WhySpyene() {
  return (
    <div className="w-full max-w-[928px] space-y-4 pb-[128px]">
      <h2 className="text-[30px] text-[#0F172A] font-semibold mb-4">
        Why Choose Spyene Technologies?
      </h2>
      <p className="text-sm text-[#0F172A]">
        Experience the difference with Spyene Technologies, where the first
        priority is to satisfy our customers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative  w-[304px] rounded-lg h-[215.5px] group bg-opacity-50 hover:bg-opacity-0"
          >
            <Image
              src={card.image}
              alt={`image${index + 1}`}
              width={304}
              height={215.5}
              className="w-full h-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 rounded-lg bg-black bg-opacity-40 group-hover:bg-opacity-60  p-4 transition-opacity duration-300 flex flex-col items-start justify-end text-white ">
              <div>
                <div className="space-y-4">
                  <Image
                    src={card.icon}
                    height={20}
                    width={20}
                    alt={`Icon${index + 1}`}
                  />
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                </div>
                <p className="text-sm group-hover:mt-4 h-0 text-wrap overflow-hidden group-hover:h-auto transition-all ease-linear duration-500 font-medium leading-[20px]">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default WhySpyene;
