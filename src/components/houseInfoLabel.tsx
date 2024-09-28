import React from "react";

interface IProps {}

const HouseInfo: React.FC<IProps> = () => {
  return (
    <div className="relative w-full bg-green-50 p-2 flex mt-6">
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
    </div>
  );
};
export default HouseInfo;
