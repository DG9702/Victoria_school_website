import React from 'react';
import InfoContent from '../common/infoContent';
import Image from 'next/image';

export const AboutVicSection:React.FC = () => {
  return (
    <div className="py-4 md:py-16 bg-white">
      <div className="text-center mb-6 md:mb-8 px-4">
        <h2 className="text-[18px] md:text-[22px] font-semibold text-[#8c191b] font-montserrat">
          VỀ VICTORIA THĂNG LONG
        </h2>
        <div className="w-[60px] md:w-[83px] h-[1px] bg-[#8c191b] mx-auto mt-2"></div>
      </div>

      <div className="relative px-0">
        {/* Hình ảnh nền */}
        <Image
          src="/images/img_rectangle_50.png"
          alt="School Building"
          width={1440}
          height={460}
          className="w-full h-[300px] md:h-[400px] lg:h-[460px] object-cover"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[90%] sm:w-[500px] md:w-[600px] lg:w-[722px] h-auto p-4 md:p-6 lg:p-8 text-center shadow-lg">
          <InfoContent
            title={'CƠ SỞ VẬT CHẤT'}
            content={
              'Nằm trong khu đô thị Thanh Hà – Hà Đông – Hà Nội, Trường Liên cấp Victoria Thăng Long tự hào có cơ sở vật chất và dịch vụ học đường được thiết kế tối ưu và hiện đại, được xây dựng theo các tiêu chuẩn quốc tế, đảm bảo các điều kiện dạy và học, chăm sóc dinh dưỡng, y tế… khép kín với sự quản lý chặt chẽ của Tập đoàn Vicgroup.'
            }
          />
        </div>
        <Image
          src="/images/img_next_page.png"
          alt="Next"
          width={38}
          height={38}
          className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-[14px]"
        />
        <Image
          src="/images/img_next_page_38x38.png"
          alt="Previous"
          width={38}
          height={38}
          className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[14px]"
        />
      </div>
    </div>
  );
};
