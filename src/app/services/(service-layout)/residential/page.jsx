export default function HorizontalScroll() {
  return (<>
   <div className="flex justify-center bg-white mx-auto w-[928px] h-[2200px] pt-[128px]">
   <div className="overflow-hidden w-auto">
        <div className="flex flex-col max-w-[496px] h-[2264px] bg-white">
        <h2 class="self-stretch text-black font-inter text-[30px] font-semibold leading-[36px] tracking-[-0.225px]">
        Quick Air Condition Installation & Repair 
</h2><p className="pt-[16px]">

The bright summer sun outside the house makes the indoors quite uncomfortable. It affects regular life in the house and productivity at the office. The installation of air conditioning can help to resolve the problem. 

</p>


<h2 class="self-stretch text-black font-inter text-[30px] font-semibold leading-[36px] tracking-[-0.225px] pt-[72px]">
Benefits of Having Air Conditions in NSW 
</h2><p className="pt-[16px]">

Air conditioning keeps a place cool and comfortable during NSW’s hot summers. It also improves air quality and boosts property value. 

</p>

<h3 class="self-stretch text-black font-inter text-[18px] font-semibold leading-[36px] tracking-[-0.225px] pt-[72px]">
Increased Comfort During Extreme Weather
</h3><p className="pt-[16px]">

Air conditioners create a pleasant environment for employees, customers, and residents. This improves the quality of life at home and a satisfying working environment at the office. ACs ensure everyone stays comfortable no matter how hot it gets outside. 

</p>

        </div>
      </div>

      {/* Right Div (Fixed with 48px gap) */}
      <div className="sticky right-0 top-0 ml-[48px] w-[384px] h-[306px]">
        <div className="h-full bg-green-200">
          {/* Content of the right div */}
          Fixed content here
        </div>
      </div>














   </div>
    </>
  );
}
