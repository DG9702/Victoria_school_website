'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';

const aboutLinks = [
  { label: 'Thông báo', href: '/thong-bao' },
  { label: 'Tin tức', href: '/tin-tuc' },
  { label: 'Hình ảnh', href: '/hinh-anh' },
  { label: 'Video', href: '/video' },
];

const educationLevels = [
  { label: 'Tiền tiểu học', href: '/tien-tieu-hoc' },
  { label: 'Tiểu học', href: '/tieu-hoc' },
  { label: 'Trung học cơ sở', href: '/trung-hoc-co-so' },
  { label: 'Trung học', href: '/trung-hoc' },
];

const socialIcons = [
  { src: '/images/img_facebook_f.png', alt: 'Facebook' },
  { src: '/images/img_google_plus.png', alt: 'Google Plus' },
  { src: '/images/img_twitter.png', alt: 'Twitter' },
  { src: '/images/img_youtube.png', alt: 'YouTube' },
  { src: '/images/img_instagram.png', alt: 'Instagram', isFullSize: true },
];

const contactInfo = [
  {
    icon: '/images/img_location.png',
    text: 'Lô A2.4 - TH01 - KĐT Thanh Hà - Thanh Oai - Hà Nội',
  },
  {
    icon: '/images/img_phone_25x25.png',
    text: '024 6653 6253',
  },
  {
    icon: '/images/img_fax.png',
    text: '0889 662 899',
  },
  {
    icon: '/images/img_email.png',
    text: 'vicschool@vicschool.edu.vn',
    isEmail: true,
  },
];

const Footer: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-white relative z-10">
        <div className="w-full h-[1px] bg-[#8c191b]"></div>
        <div className="py-6 md:py-8">
          <div className="max-w-[1520px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(280px,1.6fr)_repeat(3,1fr)] gap-6 md:gap-8">
              {/* Company Info */}
              <div className="col-span-1">
                <h3 className="text-[16px] md:text-[20px] font-bold text-[#8c191b] mb-4 font-vollkorn leading-[26px] tracking-tight whitespace-pre-line">
                  CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN GIÁO DỤC VICTORIA THĂNG LONG
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {contactInfo.map((info, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Image
                        src={info.icon}
                        alt="icon"
                        width={25}
                        height={25}
                        className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] mt-1 flex-shrink-0"
                      />
                      <span
                        className={`text-[14px] md:text-[16px] text-black font-montserrat leading-[20px] md:leading-[24px] ${
                          info.isEmail ? 'break-all' : ''
                        }`}
                      >
                        {info.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* About Us */}
              <div className="col-span-1">
                <h4 className="text-[16px] md:text-[18px] font-medium text-[#8c191b] mb-2 font-vollkorn lg:mt-8">
                  VỀ CHÚNG TÔI
                </h4>
                <ul className="space-y-2">
                  {aboutLinks.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className="text-[14px] md:text-[16px] text-black font-montserrat hover:text-[#8c191b] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education Levels */}
              <div className="col-span-1">
                <h4 className="text-[16px] md:text-[18px] font-medium text-[#8c191b] mb-4 font-vollkorn lg:mt-8">
                  CÁC CẤP HỌC
                </h4>
                <ul className="space-y-2">
                  {educationLevels.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className="text-[14px] md:text-[16px] text-black font-montserrat hover:text-[#8c191b] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="col-span-1">
                <h4 className="text-[16px] md:text-[18px] font-medium text-[#8c191b] mb-4 font-vollkorn">
                  LIÊN HỆ VỚI NHÀ TRƯỜNG
                </h4>

                <div className="flex flex-wrap gap-2 mb-4">
                  {socialIcons.map((icon, idx) => (
                    <div
                      key={idx}
                      className={`${
                        icon.isFullSize
                          ? ''
                          : 'w-[30px] h-[30px] md:w-[33px] md:h-[34px] border-2 border-black rounded-[16px] flex items-center justify-center'
                      }`}
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={33}
                        height={34}
                        className={`${
                          icon.isFullSize
                            ? 'w-[30px] h-[30px] md:w-[33px] md:h-[34px]'
                            : 'w-[18px] h-[18px] md:w-[27px] md:h-[28px]'
                        }`}
                      />
                    </div>
                  ))}
                </div>

                <Button className="bg-white text-[#8c191b] border border-[#8c191b] px-4 md:px-6 py-2 rounded-[10px] font-montserrat text-[12px] md:text-[14px] hover:bg-[#8c191b] hover:text-white transition-colors">
                  Đăng ký tư vấn ngay
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#8c191b]"></div>

        <div className="py-3 md:py-4 text-center px-4">
          <p className="text-[12px] md:text-[14px] font-medium text-black font-montserrat leading-[18px] md:leading-[20px]">
            Copyright © 2023 VICSCHOOL · All Rights Reserved · Design by VISSSOFT
          </p>
        </div>
      </footer>

      {/* Back to Top Button (fixed on bottom-right) */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 z-50 p-0 text-center rounded-full shadow-lg"
          aria-label="Lên đầu trang"
        >
          <Image
            src="/images/img_next_page_40x40.png"
            alt="Lên đầu trang"
            width={40}
            height={40}
          />
        </button>
      )}
    </>
  );
};

export default Footer;
