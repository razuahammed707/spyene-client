import Body from "./body";
import FAQ from "../_components/faq";
import GetQuotation from "../_components/get-quotation";

const ContactPage = () => {
    return ( <div className="flex max-w-[1440px] w-full flex-col items-center mx-auto">
       
        <Body/>
        <GetQuotation/>
        <FAQ/>
    </div> );
}
 
export default ContactPage;
