import React from "react";

interface IProps {
  headTitle: string;
}

const HeadTitle: React.FC<IProps> = ({ headTitle }) => {
  return (
    <div className="bg-white py-6 mt-4 px-4">
      <h1 className="text-heading_sm text-black bg-white">{headTitle}</h1>
    </div>
  );
};

export default HeadTitle;
