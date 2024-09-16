import Image from "next/image";

const cards = [
  {
    image: "/faq/solar1.png",
    icon: "/faq/icon1.svg",
    title: "Expertise and Experience",
    description:
      "Highly skilled and extensively experienced professional in electrical and solar solutions",
  },
  {
    image: "/faq/solar2.png",
    icon: "/faq/icon2.svg",
    title: "Tailored Solution",
    description:
      "Customised services to meet the unique needs of residential, commercial, and industrial clients",
  },
  {
    image: "/faq/solar3.png",
    icon: "/faq/icon3.svg",
    title: "Advanced Technology",
    description:
      "Utilisation of the latest technology and innovative approaches for optimal performance and efficiency",
  },
  {
    image: "/faq/solar4.png",
    icon: "/faq/icon4.svg",
    title: "Local Knowledge",
    description:
      "We have an in-depth understanding of NSW’s unique energy needs and regulations",
  },
  {
    image: "/faq/solar5.png",
    icon: "/faq/icon5.svg",
    title: "Sustainability",
    description:
      "We are focused on eco-friendly and energy-efficient solutions to promote a greener future",
  },
  {
    image: "/faq/solar6.png",
    icon: "/faq/icon6.svg",
    title: "Transparency",
    description:
      "Clear communication and honest practices are ensured at every step of our service to maintain trust",
  },
];

function WhySpyene() {
  return (
    <div className="w-full max-w-[928px] px-4 lg:px-0 space-y-4 pb-[128px]">
      <h2 className="text-[30px] text-[#0F172A] font-semibold mb-4">
        Why Choose Spyene Technologies?
      </h2>
      <p className="text-sm text-[#0F172A]">
        Experience the difference with Spyene Technologies, where the first
        priority is to satisfy our customers.
      </p>

      <div className="grid  grid-cols-2 sm:grid-cols-3 gap-2  ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-lg h-[215.5px] group bg-opacity-50 hover:bg-opacity-0"
          >
            <Image
              src={card.image}
              alt={`image${index + 1}`}
              width={304}
              height={215.5}
              className="w-full h-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 rounded-lg bg-black bg-opacity-40 group-hover:bg-opacity-60 p-4 transition-opacity duration-300 flex flex-col items-start justify-end text-white">
              <div>
                <div className="space-y-4">
                  <Image
                    src={card.icon}
                    height={20}
                    width={20}
                    alt={`Icon${index + 1}`}
                  />
                  <h3 className="text-lg font-semibold max-sm:text-xs">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm group-hover:mt-4 h-0 text-wrap overflow-hidden group-hover:h-auto transition-all ease-linear duration-500 font-medium leading-[20px] max-sm:text-xs">
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
