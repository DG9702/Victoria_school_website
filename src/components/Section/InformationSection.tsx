import React from 'react';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../common/Card';

export const InformationSection = () => {
  const newsItems = [
    {
      id: 1,
      image: '/images/img_rectangle_71.png',
      text: 'Thông báo chương trình "Tìm kiếm tài năng Tiếng Anh" dành cho học sinh chuẩn bị vào lớp 1',
    },
    {
      id: 2,
      image: '/images/img_rectangle_72.png',
      text: 'Thông báo chương trình "Tìm kiếm tài năng Tiếng Anh" dành cho học sinh chuẩn bị vào lớp 1',
    },
  ];

  return (
    <section className="w-full bg-white shadow-md py-6 px-4 md:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-['Montserrat',Helvetica] font-semibold text-[#8c191b] text-[22px]">
            CỔNG THÔNG TIN
          </h2>
          <img
            className="w-[83px] h-px mt-1 object-cover"
            alt="Line CNG THNG TIN"
            src="/line---c-ng-th-ng-tin.svg"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
          <div className="relative">
            <div className="w-[143px] h-[49px] bg-[100%_100%] flex items-center justify-center">
              <span className="font-['Montserrat',Helvetica] font-semibold text-white text-lg text-center">
                Thông báo
              </span>
            </div>
          </div>
          <span className="font-['Montserrat',Helvetica] font-normal text-[#8c191b] text-lg whitespace-nowrap">
            Tin tức chung
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-7 items-stretch h-full">
        {/* Featured news */}
        <Card className="w-full lg:w-1/2 shadow-md rounded-[30px] border-0 bg-neutral-100 overflow-hidden flex flex-col h-full">
          <CardContent className="p-0 flex flex-col h-full">
            <img
              className="w-full h-auto object-cover rounded-b-[30px]"
              alt="Info"
              src="/images/img_rectangle_67.png"
            />
            <div className="p-6 flex-1 flex items-center justify-center">
              <p className="font-['Montserrat',Helvetica] font-medium text-[#353232] text-xl leading-[30px] text-center">
                Thông báo chương trình “Tìm kiếm tài năng Tiếng Anh” dành cho học sinh chuẩn bị vào
                lớp 1
              </p>
            </div>
          </CardContent>
        </Card>

        {/* News list */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 md:gap-12">
          {newsItems.map((item) => (
            <Card
              key={item.id}
              className="shadow-md rounded-[30px] border-0 bg-neutral-100 overflow-hidden h-full"
            >
              <CardContent className="p-0 flex flex-col md:flex-row h-full">
                <img
                  className="w-full md:w-[50%] h-auto object-cover rounded-t-[30px] md:rounded-t-none md:rounded-l-[30px]"
                  alt={`News ${item.id}`}
                  src={item.image}
                />
                <div className="p-6 flex items-center">
                  <p className="font-['Montserrat',Helvetica] font-medium text-[#353232] text-base leading-[30px] text-justify">
                    {item.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* View all button */}
      <div className="flex justify-center mt-10 px-4 md:px-0">
        <Button className="bg-[#8c191b] text-white rounded-[9px] font-['Montserrat',Helvetica] font-medium text-xl px-8 py-2.5 hover:bg-[#a01e20] shadow-md">
          Xem tất cả
        </Button>
      </div>
    </section>
  );
};
