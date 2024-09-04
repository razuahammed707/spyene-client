"use client";

import { ListBulletIcon } from "@radix-ui/react-icons";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { PointerIcon } from "lucide-react";
import { Dot } from "lucide-react";

const BlockRendererClient = ({ content }) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p className="pt-4 text-sm md:text-[14px]">{children}</p>
        ),
        heading: ({ children, level }) => {
          switch (level) {
            case 2:
              return (
                <h2 className=" text-black text-2xl md:text-[30px] font-semibold leading-[36px] tracking-[-0.225px] ">
                  {children}
                </h2>
              );
            case 3:
              return (
                <h3 className=" text-black text-xl md:text-[24px] font-semibold leading-[36px] tracking-[-0.225px] ">
                  {children}
                </h3>
              );
          }
        },
        list: ({ children, format }) => {
          const ListTag = format === "ordered" ? "ol" : "ul";
          const listStyle =
            format === "ordered" ? "list-decimal pl-6" : "list-disc pl-6";
          return <ListTag className={listStyle}>{children}</ListTag>;
        },
        "list-item": ({ children }) => <li className=" ">{children}</li>,
      }}
    />
  );
};

export default BlockRendererClient;
