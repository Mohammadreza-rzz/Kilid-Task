import React from "react";
import { cn } from "@/utils";

interface IProps {
  containerClass?: string;
  type?: string;
  price?: string;
}

const Button: React.FC<IProps> = ({ containerClass, type, price }) => {
  return (
    <div
      className={cn(
        "border border-green-50 px-4 py-3 rounded-full inline-flex space-x-2 bg-transparent cursor-pointer",
        containerClass
      )}
    >
      <h3 className="text-paragraph_xl text-gray-50">
        {!!type ? type : "RENR"}{" "}
      </h3>
      <span className="w-[2px] h-[20px] bg-gray-50"></span>
      <p className="text-paragraph_xl text-gray-50">
        $ {!!price ? price : "12,000"}
      </p>
    </div>
  );
};

export default Button;
