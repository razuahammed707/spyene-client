"use client";
import { DynamicBreadcrumb } from "./dynamic-breadcrumb";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { generateSplittedPath } from "@/shared/helpers/generate-splitted-path";

const Header = () => {
  const [crumbs, setCrumbs] = useState([]);
  const [title, setTitle] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    const splitted_path = generateSplittedPath(pathname);
    setCrumbs(splitted_path);
    setTitle(splitted_path.at(-1));
  }, [pathname]);

  return (
    <>
      <div
        className={`w-full h-[240px] py-6 flex items-end ${
          pathname?.includes("contact")
            ? "bg-[linear-gradient(0deg,rgba(10,30,70,0.75)_0%,rgba(10,30,70,0.75)_100%),url('/hdr/bg-contact-new.png')]"
            : "bg-[linear-gradient(0deg,rgba(10,30,70,0.75)_0%,rgba(10,30,70,0.75)_100%),url('/hdr/bg-residential-new.png')]"
        } bg-lightgray bg-center bg-cover bg-no-repeat`}
      >
        <div className="w-full max-w-[928px] mx-auto ">
          <h1 className="text-[36px] font-semibold text-white leading-12">
            {title ? title[0].toUpperCase() + title.slice(1) : <span>...</span>}
          </h1>
          <DynamicBreadcrumb crumbs={crumbs} />
        </div>
      </div>
    </>
  );
};

export default Header;
