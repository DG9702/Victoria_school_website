import React from "react";
import { Card, CardContent } from "../common/Card";

export const AboutUsSection: React.FC = () => {
  const textCards = [
    {
      id: 1,
      title: "Tổng quan chương trình",
      description:
        "Chương trình học là một kế hoạch giáo dục định hướng học sinh đến mục tiêu học tập và phát triển cá nhân.",
      iconSrc: "/images/img_education.png",
      iconAlt: "Education",
      bgColor: "bg-[#e98724]",
    },
    {
      id: 2,
      title: "Tuyển sinh 2023",
      description:
        "Tuyển sinh năm 2023 đang là tâm điểm chú ý với thông tin về hồ sơ, ngày thi và thủ tục đăng ký quan trọng.",
      iconSrc: "/images/img_classroom.png",
      iconAlt: "Classroom",
      bgColor: "bg-[#8c191b]",
    },
    {
      id: 3,
      title: "Sự kiện",
      description:
        "Sự kiện là hoạt động xảy ra ở địa điểm và thời gian cụ thể, thu hút người tham gia để giao lưu, vui chơi hoặc học hỏi.",
      iconSrc: "/images/img_sign_up_in_calendar.png",
      iconAlt: "Event accepted",
      bgColor: "bg-[#8c191b]",
    },
    {
      id: 4,
      title: "Đăng ký Online",
      description:
        "Quá trình đơn giản, tiện lợi qua mạng để cung cấp thông tin hoặc sử dụng dịch vụ trực tuyến.",
      iconSrc: "/images/img_sign_up_in_calendar.png",
      iconAlt: "Sign up in calendar",
      bgColor: "bg-[#e98724]",
      isWide: true,
    },
  ];

  const imageCards = [
    {
      id: 1,
      src: "/images/img_image_8.png",
      alt: "Image",
    },
    {
      id: 2,
      src: "/images/img_victoria_thng_long_camp.png",
      alt: "Victoria thng long",
    },
    {
      id: 3,
      src: "/images/img_b_lm_ha_s.png",
      alt: "B lm ha s",
    },
    {
      id: 4,
      src: "/images/img_lp_hc.png",
      alt: "Lp hc",
    },
  ];

  return (
    <section className="w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 lg:h-[1080px]">
        {/* Image 1 (large 2x2 on desktop) */}
        <div className="w-full h-auto lg:col-span-2 lg:row-span-2">
          <img
            className="w-full h-full object-cover"
            alt={imageCards[0].alt}
            src={imageCards[0].src}
          />
        </div>

        {/* Card 1 */}
        <div className="w-full h-auto lg:col-span-1 lg:row-span-1">
          <Card className={`h-full rounded-none ${textCards[0].bgColor}`}>
            <CardContent className="p-0 h-full relative">
              <div className="p-8 flex flex-col h-full">
                <h3 className="font-bold text-2xl text-white font-['Vollkorn',Helvetica] mt-14">
                  {textCards[0].title}
                </h3>
                <p className="font-normal text-lg text-white font-['Montserrat',Helvetica] mt-4 text-justify leading-[26px]">
                  {textCards[0].description}
                </p>
                <div className="mt-auto mb-4 self-end">
                  <img className="w-16 h-16" alt={textCards[0].iconAlt} src={textCards[0].iconSrc} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Image 2 */}
        <div className="w-full h-auto lg:col-span-1 lg:row-span-1">
          <img
            className="w-full h-full object-cover mix-blend-luminosity"
            alt={imageCards[1].alt}
            src={imageCards[1].src}
          />
        </div>

        {/* Image 3 */}
        <div className="w-full h-auto lg:col-span-1 lg:row-span-1">
          <img
            className="w-full h-full object-cover mix-blend-luminosity"
            alt={imageCards[2].alt}
            src={imageCards[2].src}
          />
        </div>

        {/* Card 2 */}
        <div className="w-full h-auto lg:col-span-1 lg:row-span-1">
          <Card className={`h-full rounded-none ${textCards[1].bgColor}`}>
            <CardContent className="p-0 h-full relative">
              <div className="p-8 flex flex-col h-full">
                <h3 className="font-semibold text-2xl text-white font-['Vollkorn',Helvetica] mt-12">
                  {textCards[1].title}
                </h3>
                <p className="font-normal text-lg text-white font-['Montserrat',Helvetica] mt-4 text-justify leading-[26px]">
                  {textCards[1].description}
                </p>
                <div className="mt-auto mb-4 self-end">
                  <img
                    className="w-[67px] h-[67px]"
                    alt={textCards[1].iconAlt}
                    src={textCards[1].iconSrc}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Card 3 */}
        <div className="w-full h-auto lg:col-span-1 lg:row-span-1">
          <Card className={`h-full rounded-none ${textCards[2].bgColor}`}>
            <CardContent className="p-0 h-full relative">
              <div className="p-8 flex flex-col h-full">
                <h3 className="font-semibold text-2xl text-white font-['Vollkorn',Helvetica] mt-12">
                  {textCards[2].title}
                </h3>
                <p className="font-normal text-lg text-white font-['Montserrat',Helvetica] mt-4 leading-[26px]">
                  {textCards[2].description}
                </p>
                <div className="mt-auto mb-4 self-end">
                  <img
                    className="w-[61px] h-[59px]"
                    alt={textCards[2].iconAlt}
                    src={textCards[2].iconSrc}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Image 4 */}
        <div className="w-full h-auto lg:col-span-1 lg:row-span-1">
          <img
            className="w-full h-full object-cover mix-blend-luminosity"
            alt={imageCards[3].alt}
            src={imageCards[3].src}
          />
        </div>

        {/* Card 4 (wide) */}
        <div className="w-full h-auto lg:col-span-2 lg:row-span-1">
          <Card className={`h-full rounded-none ${textCards[3].bgColor}`}>
            <CardContent className="p-0 h-full relative">
              <div className="p-8 flex flex-col h-full items-center">
                <h3 className="font-semibold text-2xl text-white font-['Vollkorn',Helvetica] mt-14">
                  {textCards[3].title}
                </h3>
                <p className="font-normal text-lg text-white font-['Montserrat',Helvetica] mt-4 text-center max-w-[433px] leading-[26px]">
                  {textCards[3].description}
                </p>
                <div className="mt-auto mb-4 self-end">
                  <img
                    className="w-[58px] h-[58px]"
                    alt={textCards[3].iconAlt}
                    src={textCards[3].iconSrc}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
