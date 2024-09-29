"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, HouseInfoLabel } from "@/components";
import { motion } from "framer-motion";
import Image1 from "@/public/images/slide-1.jpg";

interface IProps {}

const HouseCard: React.FC<IProps> = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
      <div className="min-h-[500px] max-h-[500px] relative flex flex-col justify-end overflow-hidden cursor-pointer">
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring" }}
          className=" absolute left-0 top-0 w-full h-full "
        >
          <Image
            src={Image1}
            width={300}
            height={500}
            alt="cardImage"
            className="w-full h-full object-cover"
            objectFit="cover"
          />
        </motion.div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isHovered ? 0 : 30 }}
          transition={{ type: "spring", duration: 0.01, stiffness: 30 }}
          className="pl-4 z-50 relative"
        >
          <h2 className="text-heading_sm text-gray-100 font-sans">
            206 Mount <br /> Olive Road Two
          </h2>
          <Button containerClass="mt-5" />
          <p className="text-paragraph_lg text-gray-100 mt-3">
            click here o view {" >"}{" "}
          </p>
        </motion.div>
        <HouseInfoLabel isHover={isHovered} />
      </div>
    </>
  );
};

export default HouseCard;
