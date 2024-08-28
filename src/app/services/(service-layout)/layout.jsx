import Header from "@/components/header";

export default function CategoryLayout({ children }) {
  return (
    <page className="flex w-full flex-col items-center">
      <Header />
      {children}
    </page>
  );
}
