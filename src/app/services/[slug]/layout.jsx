import CategoryWiseServices from "../_components/category-wise-services";

const services = [
  "commercial",
  "industrial",
  "residential",
  "solar-panels",
  "solar-bateries",
];

export default function ServiceLayout({ children, params: { slug } }) {
  return (
    <page className="flex w-full flex-col items-center">
      {services.includes(slug) ? <CategoryWiseServices /> : children}
    </page>
  );
}
