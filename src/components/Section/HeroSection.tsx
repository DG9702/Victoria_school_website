import React from "react";
import {Card, CardContent} from "../common/Card";
import {Button} from "../ui/Button";

export const HeroSection = () => {
  // Data for education level buttons
  const educationLevels = [
    { id: 1, name: "TIỀN TIỂU HỌC" },
    { id: 2, name: "TIỂU HỌC" },
    { id: 3, name: "TRUNG HỌC CƠ SỞ" },
    { id: 4, name: "TRUNG HỌC" },
  ];

  return (
    <Card className="relative z-10 border-0 rounded-none !pb-0 -translate-y-12 sm:-translate-y-16 md:-translate-y-20 shadow-none">
  <div className="mx-8 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5] rounded-[20px] py-4 sm:py-6 shadow-xl">
    <CardContent className="p-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {educationLevels.map((level) => (
          <Button
            key={level.id}
            className="w-full h-14 sm:h-16 md:h-20 bg-[#e98724] hover:bg-[#d67a1f] rounded-[20px] flex items-center justify-center"
          >
            <span className="font-semibold text-white text-[18px] sm:text-[20px] md:text-[22px] font-montserrat text-center px-2">
              {level.name}
            </span>
          </Button>
        ))}
      </div>
    </CardContent>
  </div>
</Card>


  );
};
