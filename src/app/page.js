import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/navbar";
import Services from "./_components/services";
import CustomerReview from "./_components/customer-review";
import FAQ from "./_components/faq";
import GetQuotation from "./_components/get-quotation";
import WhySpyene from "./_components/why-spyene";
import Supports from "./_components/supports";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[1440px] border flex-col items-center justify-between mx-auto ps-[256px]">
      <Header />
      <Services />
      <Supports />
      <GetQuotation />
      <WhySpyene />
      <FAQ />
      <CustomerReview />
    </main>
  );
}
