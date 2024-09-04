"use client";

import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import React, { useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(null); // Initialize state
  const matches = useMediaQuery("(min-width: 768px)");
  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle answer visibility
  };

  return (
    <div
      style={{
        backgroundImage: matches
          ? "linear-gradient(270deg, rgba(255, 255, 255, 0) 11.82%, #FFF 52.49%), url(/bg-faq.png)"
          : "none",
      }}
      className="max-w-[1440px] bg-fit bg-no-repeat mb-[128px] bg-right w-full flex gap-10 justify-center items-center text-slate-900 max-md:bg-none" // No background on small screens
    >
      <div className="flex px-4 lg:px-0 max-w-[928px] flex-col flex-1 shrink self-stretch space-y-4 w-full basis-0 max-md:max-w-full">
        <h2 className="text-3xl font-semibold text-[#0F172A] tracking-tight leading-tight max-md:max-w-full">
          Frequently asked questions
        </h2>
        <div className="flex flex-col items-start w-full text-5xl font-extrabold tracking-tight leading-none max-md:max-w-full max-md:text-4xl">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className=" w-full flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer"
              onClick={() => toggleAnswer(i)} // Toggle answer on click
            >
              <h1 className="peer hover:text-[#1045AD] transition-text duration-500 text-[#94A3B8] text-[36px] font-semibold leading-12 max-md:text-[28px]">
                {faq.question}
              </h1>
              <p
                className={`text-sm text-[#64748B] font-medium w-[551px] md:opacity-0 peer-hover:opacity-100 transition-opacity duration-500 max-md:w-full max-md:text-[16px] ${
                  activeIndex === i
                    ? "max-md:block max-md:mt-2"
                    : "max-md:hidden"
                } `}
              >
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
