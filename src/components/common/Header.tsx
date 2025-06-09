'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import InputField from '@/components/ui/InputField';

// Danh sách các item điều hướng
const NAV_ITEMS = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Chương trình', href: '/chuong-trinh' },
  { name: 'Tuyển sinh', href: '/tuyen-sinh' },
  { name: 'Tin tức', href: '/tin-tuc' },
  { name: 'Sổ tay PHHS', href: '/so-tay-phhs' },
  { name: 'Dịch vụ', href: '/dich-vu' },
  { name: 'Thông báo', href: '/thong-bao' },
  { name: 'Liên hệ', href: '/lien-he' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Tìm tên trang hiện tại dựa trên pathname
  const currentPage = NAV_ITEMS.find((item) => item.href === pathname)?.name || '';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="bg-[#e98724] h-auto lg:h-[113px] px-4 py-2 lg:py-0">
        <div className="flex flex-col sm:flex-row items-center justify-between lg:mx-[74px] h-full max-w-[100rem] mx-auto gap-4">
          <div className=" flex flex-1 items-center sm:justify-start w-full justify-between">
            <Image
              src="/images/img_logo_topbar.png"
              alt="Victoria Thang Long Logo"
              width={87}
              height={87}
              className="w-16 h-16 lg:w-[87px] lg:h-[87px]"
            />
  
            <div className="flex-1 max-w-md mx-2 lg:mx-8 w-full lg:w-auto">
              <InputField
                placeholder="Tìm kiếm..."
                className="w-full bg-white border border-[#e98724] rounded-full px-4 py-2"
                rightIcon={<Image src="/images/img_search.png" alt="Search" width={22} height={22} />}
              />
            </div>
          </div>

          <div className="flex items-center justify-between space-x-8 text-white">
            <div className="flex items-center space-x-2">
              <Image src="/images/img_phone.png" alt="Phone" width={20} height={20} />
              <span className="text-[16px] font-montserrat">024 6653 6253</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image src="/images/img_envelope.png" alt="Email" width={20} height={20} />
              <span className="text-[16px] font-montserrat truncate max-w-[150px] md:max-w-full inline-block">
                vicschool@vicschool.edu.vn
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white lg:mx-[74px] py-4">
        <div className="max-w-[100rem] mx-auto">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center justify-between">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-[18px] font-montserrat ${
                    pathname === item.href
                      ? 'font-bold text-[#353232]'
                      : 'text-[#353232] hover:text-[#8c191b]'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden px-4 flex justify-between items-center">
            <div className="text-[#353232] text-base font-semibold font-montserrat">
              {currentPage}
            </div>
            <button
              onClick={toggleMobileMenu}
              className="text-[#353232] focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <ul className="lg:hidden mt-4 space-y-4 border-t border-gray-200 pt-4">
              {NAV_ITEMS.filter((item) => item.href !== pathname).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-[16px] text-[#353232] font-montserrat hover:text-[#8c191b] py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
