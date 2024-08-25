import Image from "next/image";

const images = [
  "/image1.png",
  "/image2.png",
  "/image3.png",
  "/image4.png",
  "/image5.png",
  "/image6.png",
];

function WhySpyene() {
  return (
    <div className="ms-[-256px] space-y-4  py-[128px]">
      <h2 className="text-[30px] text-[#0F172A] font-medium mb-4">
        Why Choose Spyene Technologies?
      </h2>
      <p className="text-sm text-[#0F172A]">
        Experience the difference with Spyene Technologies, where the first
        priority is to satisfy our customers.
      </p>

      <div className=" grid grid-cols-3  gap-4">
        {images.map((src, index) => (
          <div key={index} className="w-full h-auto">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={304}
              height={215}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default WhySpyene;
