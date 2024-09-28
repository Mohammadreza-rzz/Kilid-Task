import React from "react";
import { cn } from "@/utils";

interface IProps {}

const Header: React.FC<IProps> = () => {
  return (
    <header className={cn(" mx-auto py-7 bg-white sticky top-0 z-50")}>
      <div className="py-1.5 flex space-x-20 px-4 max-w-[1140px] mx-auto">
        <h1 className="text-heading_sm font-semibold cursor-pointer hover:text-green-50 transition-all duration-500">
          Estate
          <b className="font-semibold text-green-50"> Agency</b>
        </h1>
        <div className="flex items-center space-x-5">
          <p
            className={cn(
              "text-gray-90 text-paragraph_xl font-semibold border-green-50 border-b-2 cursor-pointer"
            )}
          >
            Home
          </p>
          <p className="text-gray-90 text-paragraph_xl font-semibold border-green-50 border-b-2 cursor-pointer">
            About
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
