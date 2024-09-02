import GetQuotation from "@/app/_components/get-quotation";
import { CategoryFilterTabs } from "./category-filter-tabs";
import FilteredServices from "./filtered-services";

const CategoryWiseServices = () => {
  return (
    <>
      <CategoryFilterTabs />
      <FilteredServices />
      <GetQuotation className="my-0" />
    </>
  );
};

export default CategoryWiseServices;
