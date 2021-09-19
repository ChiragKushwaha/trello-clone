import React from "react";
import IconButton from "@mui/material/IconButton";

import Menu from "../../../public/icons/menu.svg";
import TrelloIcon from "../../../public/icons/trello.gif";

const TrelloHeader = () => {
  return (
    <div className={`bg-[#172b4d] h-[44px] space-x-[8px] flex items-center`}>
      <IconButton color="primary" aria-label="menu" component="span">
        <Menu className={`w-[20px] h-[20px] text-white`} />
      </IconButton>
      <a href={"/"}>
        <img
          className={`w-[75px] cursor-pointer`}
          src={TrelloIcon}
          alt={"logo"}
        />
      </a>
    </div>
  );
};

export default TrelloHeader;
