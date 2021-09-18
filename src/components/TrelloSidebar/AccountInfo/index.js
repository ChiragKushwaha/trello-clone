import React, { useState } from "react";
import "./style.css";
import arrow from "../../../../public/icons/arrow.svg";
import IconButton from "@mui/material/IconButton";

const AccountInfo = () => {
  const [sidePanelOpen, setsidePanelOpen] = useState(false);

  const openNav = () => {
    document.getElementById("mySidebar").style.width = "260px";
  };
  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "40px";
  };

  return (
    <div className={`wrapper ${sidePanelOpen && "wrapper-addons"}`}>
      <div className={`avatar`}></div>
      {sidePanelOpen && (
        <div className={`text-wrapper`}>
          <div>Trello Clone</div>
          <div>Free</div>
        </div>
      )}
      <IconButton
        onClick={() => {
          if (sidePanelOpen) {
            closeNav();
          } else {
            openNav();
          }
          setsidePanelOpen(!sidePanelOpen);
        }}
        color="primary"
        aria-label="upload picture"
        component="span"
      >
        <img className={`arrow`} src={arrow} alt={"open_side_panel"} />
      </IconButton>
    </div>
  );
};

export default AccountInfo;
