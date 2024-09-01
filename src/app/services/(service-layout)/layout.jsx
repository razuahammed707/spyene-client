import Header from "@/components/header";
import GetQuotation from "../../_components/get-quotation";
import { CategoryFilterTabs } from "./_components/category-filter-tabs";
 
export default function ServicesLayout({ children }) {
  return (
    <page className="flex w-full flex-col items-center">
      {<Header />}
      <CategoryFilterTabs />
      {children}
      <GetQuotation className="my-0" />
    </page>
  );
}
