import * as React from "react";

const faqs = [
  {
    question: "Consultation?",
    answer:
      "To schedule a consultation or service, contact us via phone, email, or using the website form. Our team will work with you to assess your needs and develop a comprehensive plan for your project.",
  },
  {
    question: "Solutions?",
    answer:
      "We provide a range of solar solutions, including residential, commercial, and industrial systems. Our team of experts will design and install a customized solution that meets your energy needs and sustainability goals.",
  },
  {
    question: "Maintenance?",
    answer:
      "Yes, we offer comprehensive maintenance and support for our installations. Our team provides regular system check-ups and preventive care to ensure your solar system operates efficiently and effectively throughout its lifespan.",
  },
  {
    question: "Suitable?",
    answer:
      "Our team will assess your property by evaluating factors such as energy usage, roof space, and location. We'll provide a detailed analysis and personalized recommendations to decide if solar energy is a suitable and beneficial option for you.",
  },
  {
    question: "Warranty?",
    answer:
      "Yes, our systems come with warranties. These include the quality of our installation and the performance of the solar panels. Contact us to find out more details about our warranty options.",
  },
  {
    question: "System issues?",
    answer:
      "If you experience an issue with your system, contact us right away. Call or email our support team to report the problem, and we'll schedule an inspection or maintenance service to get your system running properly again.",
  },
  {
    question: "Get a quote?",
    answer:
      "To get a quote, reach out to us through our website, phone, or email. Provide as many details as possible about your project, and we'll send you a detailed estimate based on your specific needs and requirements.",
  },
];

function FAQ() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(270deg, rgba(255, 255, 255, 0) 11.82%, #FFF 52.49%), url(/bg-faq.png)",
      }}
      className="max-w-[1440px] ps-4 lg:ps-[256px] bg-fit bg-no-repeat mb-[128px] bg-right w-full flex gap-10 justify-center items-center text-slate-900 max-md:px-5 hidden md:flex"
    >
      <div className="flex flex-col flex-1 shrink self-stretch space-y-4 w-full basis-0 max-md:max-w-full">
        <h2 className="text-3xl font-semibold text-[#0F172A] tracking-tight leading-tight max-md:max-w-full">
          Frequently asked questions
        </h2>
        <div className="flex pr-[256px] flex-col items-start w-full text-5xl font-extrabold tracking-tight leading-none max-md:max-w-full max-md:text-4xl">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group w-full flex justify-between items-center"
            >
              <h1 className="cursor-pointer hover:text-[#1045AD] transition-text duration-500 text-[#94A3B8] text-[36px] font-semibold leading-12">
                {faq.question}
              </h1>
              <p className="text-sm text-[#64748B] font-medium w-[551px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default FAQ;
