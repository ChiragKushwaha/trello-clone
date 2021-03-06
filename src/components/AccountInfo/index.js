import React from "react";
import IconButton from "@mui/material/IconButton";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import language from "../../constants/en.json";

const AccountInfo = ({ openNav, closeNav, sidePanelOpen }) => {
  return (
    <div
      className={`w-full flex items-center cursor-default ${
        sidePanelOpen
          ? "flex-row px-[16px] justify-between py-[6px]"
          : "flex-col pt-[10px]"
      }`}
    >
      <div className={`flex space-x-[8px] items-center`}>
        <img
          src={
            "https://media-exp1.licdn.com/dms/image/C5103AQGNNKb5MKdHmQ/profile-displayphoto-shrink_800_800/0/1565883227975?e=1637798400&v=beta&t=n7VZjtLCsWeZeVnc9_Qu8tWGigqC4szZ-3weKX8p6c0"
          }
          loading="lazy"
          alt={"chirag_linkedIn_image"}
          className={`w-[32px] h-[32px] bg-black rounded-[4px]`}
        ></img>
        {sidePanelOpen && (
          <div className={``}>
            <div className={`font-semibold text-[14px]`}>
              {language.trelloTitle}
            </div>
            <div className={`font-medium text-[12px]`}>{language.about}</div>
          </div>
        )}
      </div>
      <IconButton
        onClick={sidePanelOpen ? closeNav : openNav}
        color="primary"
        aria-label="open close side panel arrow"
        component="span"
      >
        <DoubleArrowIcon
          className={`w-[20px] h-[20px] group-hover:text-[#172B4D] ${
            sidePanelOpen
              ? "transform rotate-180 text-[#172B4D]"
              : "text-[white]"
          }`}
        />
      </IconButton>
    </div>
  );
};

export default AccountInfo;
