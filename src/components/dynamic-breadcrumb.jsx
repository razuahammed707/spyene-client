import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function DynamicBreadcrumb({ crumbs }) {
  let current_crumb = "";
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-sm text-white hover:text-[#EF8A22] font-medium"
            href="/"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        {crumbs?.map((crumb, i) => (
          <>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              {crumbs?.length === 1 || i === crumbs.length - 1 ? (
                <BreadcrumbPage className="text-sm text-white font-medium">
                  {crumb?.[0].toUpperCase() + crumb?.slice(1)}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink
                  className="text-sm text-white hover:text-[#EF8A22] font-medium"
                  href={`${(current_crumb += "/" + crumb)}`}
                >
                  {crumb?.[0].toUpperCase() + crumb?.slice(1)}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
