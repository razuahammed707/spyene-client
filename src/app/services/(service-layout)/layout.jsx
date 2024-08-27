import Header from "@/components/header";
import { Fragment } from "react";

export default function CategoryLayout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}
