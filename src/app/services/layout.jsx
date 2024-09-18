import Header from "@/components/Header";

const ServicesLayout = ({ children }) => {
  return (
    <div className="flex w-full flex-col items-center">
      <Header />
      {children}
    </div>
  );
};
export default ServicesLayout;
