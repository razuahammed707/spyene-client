import Header from "@/components/header";

export default function ServiceLayout({ children }) {
  return (
    <page className="flex w-full flex-col items-center">
      {<Header />}
      {children}
    </page>
  );
}
