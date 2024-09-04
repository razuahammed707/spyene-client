import GetQuotation from "@/app/_components/get-quotation";
import { CategoryFilterTabs } from "./category-filter-tabs";
import FilteredServices from "./filtered-services";

const CategoryWiseServices = ({ ctg }) => {
  return (
    <>
      <CategoryFilterTabs />
      <FilteredServices ctg={ctg} />
      <GetQuotation className="my-0" />
    </>
  );
};

export default CategoryWiseServices;
