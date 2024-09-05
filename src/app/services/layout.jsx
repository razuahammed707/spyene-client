import Header from "@/components/Header";

const ServicesLayout = ({ children }) => {
  return (
    <page className="flex w-full flex-col items-center">
      <Header />
      {children}
    </page>
  );
};
export default ServicesLayout;
