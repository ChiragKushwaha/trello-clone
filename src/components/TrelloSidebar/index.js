import React, { useState } from "react";
import { connect } from "react-redux";

import AccountInfo from "../AccountInfo";
import DropdownMenu from "../DropdownMenu";

const TrelloSidebar = () => {
  const [sidePanelOpen, setsidePanelOpen] = useState(false);

  const openNav = () => {
    document.getElementById("sideBar").style.minWidth = "260px";
    setsidePanelOpen(true);
  };
  const closeNav = () => {
    document.getElementById("sideBar").style.minWidth = "40px";
    setsidePanelOpen(false);
  };

  return (
    <div
      onClick={sidePanelOpen ? null : openNav}
      id="sideBar"
      className={`group min-w-[40px] ${
        sidePanelOpen ? "bg-[#FAFBFC]" : "bg-[#086099] hover:bg-[#FAFBFC]"
      } transition-all overflow-x-hidden cursor-pointer`}
    >
      <AccountInfo
        openNav={openNav}
        closeNav={closeNav}
        sidePanelOpen={sidePanelOpen}
      />
      {sidePanelOpen && (
        <>
          <div className={`w-full h-[0.5px] bg-gray-300`}></div>
          <DropdownMenu />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  boards: state.boards,
  boardOrder: state.boardOrder,
});

export default connect(mapStateToProps)(TrelloSidebar);
