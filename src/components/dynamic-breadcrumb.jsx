"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { House } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import {
  formatCrumb,
  formatTitle,
  generateSplittedPath,
} from "@/shared/helpers/generate-splitted-path";
import { Fragment } from "react";

export function DynamicBreadcrumb({ services }) {
  let current_crumb = "";
  const [crumbs, setCrumbs] = useState([]);
  //console.log(crumbs);

  const [title, setTitle] = useState("");

  const pathname = usePathname();
  useEffect(() => {
    const splitted_path = generateSplittedPath(pathname);
    setCrumbs(splitted_path);
    setTitle(formatTitle(splitted_path, services));
  }, [pathname, services]);

  return (
    <div
      className={`w-full h-[240px] px-4 lg:px-0  py-6 flex items-end ${
        pathname?.includes("contact")
          ? "bg-[linear-gradient(0deg,rgba(10,30,70,0.75)_0%,rgba(10,30,70,0.75)_100%),url('/hdr/bg-contact-new.png')]"
          : "bg-[linear-gradient(0deg,rgba(10,30,70,0.75)_0%,rgba(10,30,70,0.75)_100%),url('/hdr/bg-residential-new.png')]"
      } bg-lightgray bg-center bg-cover bg-no-repeat`}
    >
      <div className="w-full max-w-[928px] mx-auto space-y-2">
        <h1 className="text-3xl md:text-[36px] font-semibold text-white leading-12">
          {title ? title : <span>...</span>}
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-sm text-white hover:text-[#EF8A22] font-medium"
                href="/"
              >
                <House className="h-[13.5px] w-[13.5px]" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            {crumbs?.map((crumb, i) => (
              <Fragment key={i}>
                <BreadcrumbSeparator className="text-white" />
                <BreadcrumbItem>
                  {crumbs?.length === 1 || i === crumbs.length - 1 ? (
                    <BreadcrumbPage className="text-sm text-white font-medium">
                      {formatCrumb(crumb, services)}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      className="text-sm text-white hover:text-[#EF8A22] font-medium"
                      href={`${(current_crumb += "/" + crumb)}`}
                    >
                      {formatCrumb(crumb, services)}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
