"use client";
import React from "react";
import { motion } from "framer-motion";

interface IProps {
  isHover?: boolean;
}

const HouseInfo: React.FC<IProps> = ({ isHover }) => {
  console.log(isHover, "isHover");
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isHover ? 0 : 100 }}
      transition={{ type: "spring", duration: 0.01, stiffness: 30 }}
      className="relative w-full bg-green-50 p-2 flex mt-6"
    >
      <span className="inline-flex flex-col flex-1">
        <h6>Area</h6>
        <p className="text-gray-100 relative mt-1">
          340 m
          <b className="text-gray-100 font-normal text-paragraph_sm absolute translate-x-1">
            2
          </b>
        </p>
      </span>
      <span className="inline-flex flex-col flex-1">
        <h6>Beds</h6>
        <p className="text-gray-100 relative mt-1">2</p>
      </span>
      <span className="inline-flex flex-col flex-1">
        <h6>Baths</h6>
        <p className="text-gray-100 relative mt-1">1</p>
      </span>
      <span className="inline-flex flex-col flex-1">
        <h6>Garages</h6>
        <p className="text-gray-100 relative mt-1">1</p>
      </span>
    </motion.div>
  );
};
export default HouseInfo;
