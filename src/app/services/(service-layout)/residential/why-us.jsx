import Image from "next/image";
const WhyUs = () => {
    return ( <>

        <h2 class="self-stretch text-black font-inter text-[30px] font-semibold leading-[36px] tracking-[-0.225px] pt-[48px]">
        Why Choose Us?
        </h2>
        <p className="pt-[16px] text-[14px]">
        
        We stand out for our expertise and dedication to serve the community. Our team is highly trained, skilled, and committed to delivering top-quality results. We prioritize customer satisfaction and adhere to the highest safety standards.
        
        </p>
        
        <ul className="pt-[16px] text-[14px] pb-[48px]" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>
                 Highly trained and certified technicians
              </li>
              <li>
                 Committed to precision and quality
              </li>
              <li>
                Focused on safety and reliability
              </li>
              <li>
              Competitive and transparent pricing
              </li>
              <li>
              Quick response times for urgent needs
              </li>
              <li>
              Comprehensive warranty and follow-up support
              </li>
            
            </ul>
            <button className="flex items-center p-[16px] h-[40px] w-[120px] rounded-[6px] bg-[#1045AD] text-white gap-[10px]">
            <Image src="/call.png" alt="CALLUS" width={20} height={20} />

            call us
            </button>

          
            </> );
}
 
export default WhyUs;