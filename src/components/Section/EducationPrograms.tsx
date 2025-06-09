'use client';

import { useState } from 'react';
import Image from 'next/image';
import {Button} from '../ui/Button';

const tabs = [
  {
    id: 'bqt',
    label: 'Bán quốc tế',
    title: 'TỔNG QUAN CHƯƠNG TRÌNH HỆ BÁN QUỐC TẾ',
    contents: [
      {
        label: 'Mục tiêu chung:',
        text: ' Chương trình hệ Bán Quốc tế (BQT) của Victoria Thăng Long tuân thủ mục tiêu chung của Chương trình GDPT 2018 kết hợp với Chương trình Nhà trường của Victoria Thăng Long nhằm phát triển năng lực, phẩm chất cho học sinh.',
      },
      {
        label: 'Hình thành và phát triển cho học sinh những phẩm chất thiết yếu:',
        text: ' YÊU NƯỚC – NHÂN ÁI – CHĂM CHỈ – TRUNG THỰC – TRÁCH NHIỆM.',
      },
      {
        label: 'Góp phần giúp học sinh phát triển các năng lực chung:',
        text: ' TỰ CHỦ & TỰ HỌC – GIAO TIẾP & HỢP TÁC – GIẢI QUYẾT VẤN ĐỀ & SÁNG TẠO.',
      },
    ],
  },
  {
    id: 'ccs',
    label: 'CCS',
    title: 'TỔNG QUAN CHƯƠNG TRÌNH CCS',
    contents: [
      {
        label: 'Giới thiệu:',
        text: ' Chương trình CCS là sự kết hợp giữa chương trình quốc tế và nội địa giúp học sinh phát triển toàn diện.',
      },
      {
        label: 'Lợi ích:',
        text: ' Học sinh được học theo tiêu chuẩn quốc tế với đội ngũ giáo viên chuyên môn cao.',
      },
    ],
  },
  {
    id: 'sn',
    label: 'Song ngữ',
    title: 'TỔNG QUAN CHƯƠNG TRÌNH SONG NGỮ',
    contents: [
      {
        label: 'Định hướng:',
        text: ' Chương trình song ngữ giúp học sinh sử dụng thành thạo tiếng Anh trong môi trường học thuật và đời sống.',
      },
      {
        label: 'Mục tiêu:',
        text: ' Phát triển tư duy toàn cầu và kỹ năng hội nhập quốc tế.',
      },
    ],
  },
];

export const EducationProgramSection = () => {
  const [activeTab, setActiveTab] = useState<'bqt' | 'ccs' | 'sn'>('bqt');
  const tabIndex = tabs.findIndex((tab) => tab.id === activeTab);
  const { title, contents } = tabs[tabIndex];

  return (
    <div className="py-8 bg-white relative">
      <div className="text-center mb-6 md:mb-8 px-4">
        <h2 className="text-[18px] md:text-[22px] font-semibold text-[#8c191b] font-montserrat">
          CHƯƠNG TRÌNH GIÁO DỤC
        </h2>
        <div className="w-[60px] md:w-[83px] h-[1px] bg-[#8c191b] mx-auto mt-2"></div>
      </div>

      <div className="bg-[#8c191b] text-white p-4 md:py-8 md:px-0 relative overflow-hidden">
        {/* Tab buttons */}
        <div className="flex flex-col md:flex-row justify-end items-center gap-4 mb-6 md:mr-8">
          <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'bqt' | 'ccs' | 'sn')}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-[10px] font-montserrat text-sm md:text-base ${
                  activeTab === tab.id
                    ? 'bg-white text-[#353232]'
                    : 'bg-transparent text-white'
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Content area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8">
          <div className="md:px-8">
            <h2 className="text-[18px] md:text-[24px] font-bold mb-6 md:mb-8 font-vollkorn text-center">
              {title}
            </h2>
            <div className="space-y-4 md:space-y-6">
              {contents.map((item, idx) => (
                <div key={idx}>
                  <p className="text-[14px] md:text-[18px] leading-[22px] md:leading-[30px] text-justify font-montserrat">
                    <span className="font-semibold">{item.label}</span> {item.text}
                  </p>
                  <div className="w-full h-[1px] bg-white my-4"></div>
                </div>
              ))}
            </div>
            <div className="mt-6 md:mt-8 text-center">
              <Button className="bg-white text-[#353232] hover:bg-slate-200 px-4 md:px-8 py-2 md:py-3 rounded-[10px] font-montserrat text-sm md:text-base">
                Đăng ký Online
              </Button>
            </div>
          </div>

          {/* Image area */}
          <div className="relative mt-6 lg:mt-0 m-4 h-full">
            <Image
              src="/images/img_image_1.png"
              alt="Education Program"
              width={704}
              height={451}
              className="rounded-s-[20px] w-full"
            />
            <Image
              src="/images/img_logo_1_374x321.png"
              alt="School Logo"
              width={321}
              height={374}
              className="absolute top-2 md:top-4 right-2 md:right-4 w-[80px] h-[90px] md:w-[160px] md:h-[185px] lg:w-[321px] lg:h-[374px]"
            />
          </div>
        </div>

        {/* Prev / Next buttons */}
        {tabIndex > 0 && (
          <Image
            src="/images/img_next_page_38x38.png"
            alt="Prev"
            width={38}
            height={38}
            className="absolute top-1/2 left-[14px] -translate-y-1/2 cursor-pointer z-10"
            onClick={() => {
              const newIndex = tabIndex - 1;
              setActiveTab(tabs[newIndex].id as 'bqt' | 'ccs' | 'sn');
            }}
          />
        )}
        {tabIndex < tabs.length - 1 && (
          <Image
            src="/images/img_next_page.png"
            alt="Next"
            width={38}
            height={38}
            className="absolute top-1/2 right-[14px] -translate-y-1/2 cursor-pointer z-10"
            onClick={() => {
              const newIndex = tabIndex + 1;
              setActiveTab(tabs[newIndex].id as 'bqt' | 'ccs' | 'sn');
            }}
          />
        )}
      </div>
    </div>
  );
}
