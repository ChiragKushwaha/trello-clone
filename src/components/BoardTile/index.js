import React from "react";

const BoardTile = ({ title }) => {
  return (
    <div
      tabIndex={1}
      className={`cursor-pointer  flex items-center space-x-[8px] px-[16px] py-[4px] hover:bg-[#091e4214] active:bg-[#e4f0f6] `}
    >
      <div className={`w-[24px] h-[20px] rounded-[2px] bg-red-700`}></div>
      <div>{title}</div>
    </div>
  );
};

export default BoardTile;
