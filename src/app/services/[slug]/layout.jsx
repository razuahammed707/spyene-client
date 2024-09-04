import CategoryWiseServices from "../_components/category-wise-services";

const services = [
  "commercial",
  "industrial",
  "residential",
  "solar-panels",
  "solar-batteries",
];

export default function ServiceLayout({ children, params: { slug } }) {
  return (
    <div className="flex w-full flex-col items-center">
      {services.includes(slug) ? <CategoryWiseServices ctg={slug} /> : children}
    </div>
  );
}
