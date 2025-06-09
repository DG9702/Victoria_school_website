import Image from 'next/image';
import InfoContent from '../common/infoContent';

export const InfoOverlaySection = () => {
  return (
    <section className="relative w-full bg-white">
      {/* Desktop layout */}
      <div className="hidden md:flex w-full min-h-[400px]">
        {/* Left: Image */}
        <div className="w-1/2 relative">
          <Image src="/images/img_csvc_2.png" alt="Info Image" fill className="object-cover" />
        </div>

        {/* Right: Text with box overlapping image */}
        <div className="w-1/2 flex items-center pl-12 relative">
          <div className="bg-[#f5f5f5] shadow-lg p-6 relative z-10 -ml-20 text-center">
            <InfoContent
              title={'GIỚI THIỆU VICTORIA THĂNG LONG'}
              content={
                'Chương trình giáo dục cấp Tiểu học giúp học sinh hình thành, phát triển những yếu tố đặt nền móng cho sự phát triển hài hòa về cả thể chất lẫn tinh thần. Chúng tôi đặt mục tiêu phát triển giáo dục toàn diện, cung cấp đào tạo, nâng cao dân trí và bồi dưỡng nhân tài ở Việt Nam. Tập trung vào các chương trình giáo dục từ Mầm non, Phổ thông đến Ngôn ngữ và Kỹ năng.'
              }
            />
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col md:hidden relative w-full">
        {/* Image on top */}
        <div className="relative w-full h-[250px]">
          <Image
            src="/images/img_csvc_2.png"
            alt="Info Image"
            fill
            className="object-cover rounded-b-lg"
          />
        </div>

        {/* Box overlaps image slightly */}
        <div className="relative -mt-10 px-4 z-10">
          <div className="bg-[#f5f5f5] shadow-lg p-4 rounded-xl text-center">
            <InfoContent
              title={'GIỚI THIỆU VICTORIA THĂNG LONG'}
              content={
                'Chương trình giáo dục cấp Tiểu học giúp học sinh hình thành, phát triển những yếu tố đặt nền móng cho sự phát triển hài hòa về cả thể chất lẫn tinh thần. Chúng tôi đặt mục tiêu phát triển giáo dục toàn diện, cung cấp đào tạo, nâng cao dân trí và bồi dưỡng nhân tài ở Việt Nam. Tập trung vào các chương trình giáo dục từ Mầm non, Phổ thông đến Ngôn ngữ và Kỹ năng.'
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
