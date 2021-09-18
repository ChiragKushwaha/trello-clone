import React from "react";
import AccountInfo from "./AccountInfo";
import DropdownMenu from "./DropdownMenu";
import "./style.css";

const TrelloSidebar = () => {
  return (
    <div id="mySidebar" className="sidebar">
      <AccountInfo />
      <DropdownMenu />

      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
};

export default TrelloSidebar;
