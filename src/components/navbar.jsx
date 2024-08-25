import * as React from "react";
import Image from "next/image";


const Navbar = () => {
  return ( <div className="flex flex-col">

    
        <div className="flex gap-10 justify-center items-center pr-56 pl-56 w-full text-sm font-medium leading-none whitespace-nowrap bg-white min-h-[60px] text-slate-900 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col self-stretch px-8 my-auto min-w-[240px] w-[989px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 justify-between items-center py-4 w-full border-b border-white min-h-[60px] max-md:max-w-full">
                    <Image 
                src="/SPYENE.png" // Path to your image file in the public directory
                alt="SPYENE" // A description of the image for accessibility
                width={82} // Set the desired width of the image
                height={28} // Set the desired height of the image
              />
            
              <div className="flex gap-6 justify-between items-center self-stretch my-auto min-w-[240px] w-[308px]">
                <div className="flex gap-4 items-center self-stretch h-full">
                  <div className="self-stretch my-auto">Services</div>
                          <Image 
                src="/chevron-down.png" // Path to your image file in the public directory
                alt="down" // A description of the image for accessibility
                width={12} // Set the desired width of the image
                height={12} // Set the desired height of the image
              />
                          
                  
                </div>
                <div className="flex flex-col self-stretch my-auto w-[41px]">
                  <div className="gap-1 self-stretch">About</div>
                </div>
                <div className="flex flex-col self-stretch my-auto w-[51px]">
                  <div className="gap-1 self-stretch">Explore</div>
                </div> 
                
                <div className="flex flex-col self-stretch my-auto w-[54px]">
                  <div className="gap-1 self-stretch">Contact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
   
  </div> );
}
 
export default Navbar;