import Services from "./_components/services";
import CustomerReview from "./_components/customer-review";
import FAQ from "./_components/faq";
import GetQuotation from "./_components/get-quotation";
import WhySpyene from "./_components/why-spyene";
import Supports from "./_components/supports";
import LandingHeader from "./_components/landing-header";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center mx-auto">
      <LandingHeader />
      <Services />
      <Supports />
      <GetQuotation />
      <WhySpyene />
      <FAQ />
      <CustomerReview />
    </main>
  );
}
