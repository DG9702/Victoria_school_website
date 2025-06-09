import Image from 'next/image';
import React from 'react';

export const SchoolTourSection = () => {
  return (
    <div className="relative my-8">
      <Image
        src="/images/img_image_12.png"
        alt="School Tour"
        width={1440}
        height={470}
        className="w-full h-[300px] md:h-[400px] lg:h-[470px] object-cover"
      />
      <div className="absolute inset-0 bg-[#7c7c7c54]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg p-4 md:p-8 w-[280px] md:w-[367px] h-auto md:h-[105px] flex flex-col items-center justify-center">
          <Image
            src="/images/img_360_view.png"
            alt="360 View"
            width={70}
            height={97}
            className="lg:w-[60px] lg:h-[60px] w-10 h-10 object-cover"
          />
          <h3 className="text-[16px] md:text-[21px] font-bold text-[#8c191b] font-vollkorn cursor-pointer text-center">
            THAM QUAN TRƯỜNG HỌC
          </h3>
        </div>
      </div>
    </div>
  );
};
