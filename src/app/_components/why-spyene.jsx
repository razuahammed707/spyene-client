

import Image from 'next/image';

const images = [
  '/image1.png',
  '/image2.png',
  '/image3.png',
  '/image4.png',
  '/image5.png',
  '/image6.png',
];

 function WhySpyene() {
  return (
    <div className='flex w-[1440px] flex-col items-start gap-[128px] bg-white'>
    

    <div className="px-[256px] py-[128px] grid grid-cols-3 gap-4">
    
      {images.map((src, index) => (
        <div key={index} className="w-full h-auto">
          <Image 
            src={src} 
            alt={`Image ${index + 1}`} 
            width={304} 
            height={215} 
            className="object-cover w-full h-full" 
          />
        </div>
      ))}
    </div>
    </div>
  );
}
export default WhySpyene;