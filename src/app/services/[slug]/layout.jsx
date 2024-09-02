"use client";
import Header from "@/components/header";
import { useParams } from "next/navigation";
import Services from "./_components/services";

const services = ["commercial", "industrial"]

export default function ServiceLayout({ children }) {
  const {slug} = useParams();
  return (
    <page className="flex w-full flex-col items-center">
      {<Header />}
      {
        services.includes(slug) ?
        <Services/>
        :
        children
      }
    </page>
  );
}
