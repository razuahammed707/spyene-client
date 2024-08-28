import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function DynamicBreadcrumb({crumbs}) {
  let current_crumb = "";
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <span className="text-sm text-white font-medium">Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {crumbs?.map((crumb, i) => (
          <>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              <BreadcrumbLink href={`${(current_crumb += "/" + crumb)}`}>
                <span className="text-sm text-white font-medium">
                  {crumb?.[0].toUpperCase() + crumb?.slice(1)}
                </span>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
