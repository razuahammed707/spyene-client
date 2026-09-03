import { fetchServices } from "@/shared/helpers/fetch-services";
import { DynamicBreadcrumb } from "./dynamic-breadcrumb";
const Header = async () => {
  const services = await fetchServices("&pagination[limit]=-1");


  return (
    <>
      <DynamicBreadcrumb services={services} />
    </>
  );
};

export default Header;
