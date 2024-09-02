import Header from "@/components/header";

const ServicesLayout = ({ children }) => {
  return (
    <page className="flex w-full flex-col items-center">
      <Header />
      {children}
    </page>
  );
};
export default ServicesLayout;
