"use client";
import Image from "next/image";
import { DynamicBreadcrumb } from "./dynamic-breadcrumb";
import { usePathname, useSearchParams } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const crumbs = pathname?.pathname?.split("/")?.filter((crumb) => crumb !== "");

  return (
    <>
      <div className="flex min-h-10 h-[320px] w-full max-w-[1440px]">
        <div className="w-full flex justify-center items-center bg-[#1045AD] relative">
          <Image
            src="/hdr/grid-angle-top.svg"
            height={54}
            width={58}
            alt="grid angle top"
            className="absolute top-4 left-4"
          />
          <Image
            src="/hdr/grid-angle-bottom.svg"
            height={54}
            width={58}
            alt="grid angle bottom"
            className="absolute bottom-4 right-4"
          />
          <div>
            <DynamicBreadcrumb crumbs={crumbs} />
            <h1 className="text-[48px] font-semibold text-white leading-12">
              Contact
            </h1>
          </div>
        </div>
        <div className="bg-cover bg-no-repeat  bg-[url(/hdr/bg-contact.png)] w-full" />
      </div>
    </>
  );
};

export default Header;
