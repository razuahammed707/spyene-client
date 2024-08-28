"use client";
import Image from "next/image";
import { DynamicBreadcrumb } from "./dynamic-breadcrumb";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [crumbs, setCrumbs] = useState([]);
  const [title, setTitle] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    const splitted_path = pathname?.split("/")?.filter((crumb) => crumb !== "");
    setCrumbs(splitted_path);
    setTitle(splitted_path.at(-1));
  }, [pathname]);

  return (
    <>
      <div className="flex min-h-10 h-[320px] w-full max-w-[1440px]">
        <div className="w-full ps-[256px] flex items-center bg-[#1045AD] relative">
        {/*   <Image
            src="/hdr/grid-angle-top.svg"
            height={54}
            width={58}
            alt="grid angle top"
            className="absolute top-4 left-4"
          /> */}
          <Image
            src="/hdr/grid-angle-bottom.svg"
            height={54}
            width={58}
            alt="grid angle bottom"
            className="absolute bottom-4 right-4"
          />
          <div className="w-full">
            <DynamicBreadcrumb crumbs={crumbs} />
            <h1 className="text-[48px] font-semibold text-white leading-12">
              {title ? (
                title[0].toUpperCase() + title.slice(1)
              ) : (
                <span>...</span>
              )}
            </h1>
          </div>
        </div>
        <div
          className={`bg-cover bg-no-repeat  ${
            pathname?.includes("contact")
              ? "bg-[url(/hdr/bg-contact.png)]"
              : "bg-[url(/hdr/bg-residential.png)]"
          } w-full`}
        />
      </div>
    </>
  );
};

export default Header;
