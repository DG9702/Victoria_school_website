// components/InfoBox.tsx
import React from "react";
import { Button } from "@/components/ui/Button";

interface InfoBoxProps {
  title: string;
  content: string;
  buttonText?: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, content, buttonText = "Xem thêm" }) => {
  return (
    <>
      <h2 className="text-[18px] md:text-[24px] font-bold text-[#8c191b] mb-4 font-vollkorn">
        {title}
      </h2>

      <p className="text-[14px] md:text-[18px] text-[#353131] leading-[24px] md:leading-[30px] mb-4 font-montserrat">
        {content}
      </p>

      <div className="h-[2px] bg-[#8c191b] mb-4 w-full max-w-[90%] mx-8"></div>

      <Button className="bg-[#8c191b] text-white rounded-[9px] font-['Montserrat',Helvetica] font-medium text-xl px-8 py-2.5 hover:bg-[#a01e20] shadow-md">
        {buttonText}
      </Button>
    </>
  );
};

export default InfoBox;
