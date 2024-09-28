import React from "react";
import { Button } from "@/components";

interface IProps {
  children: React.ReactNode;
}

const MainPageSlide: React.FC<IProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="  absolute top-2/4 -translate-y-3/4 left-[10vw] md:left-[30vw] ">
        <h6 className="text-paragraph_lg text-gray-50 mb-6">
          Doral, Florida <br /> 78345
        </h6>
        <h1 className="text-heading_lg text-gray-50">
          <b className="text-green-50 font-sans">204 </b>
          RINO
        </h1>
        <h1 className="text-heading_lg text-gray-50">VENDA ROUD FIVE</h1>
        <Button containerClass="mt-10" />
      </div>

      {children}
    </div>
  );
};

export default MainPageSlide;
