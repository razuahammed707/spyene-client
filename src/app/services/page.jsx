import GetQuotation from "../_components/get-quotation";
import { CategoryFilterTabs } from "./_components/category-filter-tabs";

const Page = () => {
  return (
    <>
      <CategoryFilterTabs />
      <GetQuotation className="my-0" />
    </>
  );
};

export default Page;
