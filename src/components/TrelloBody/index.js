import React from "react";

import TrelloSidebar from "../TrelloSidebar";
import "./style.css";

const TrelloBody = () => {
  return (
    <div
      id="body"
      style={{
        position: "relative",
        height: "calc( 100vh - 44px )",
        display: "flex",
      }}
    >
      <TrelloSidebar />
      <div>
        <button className="openbtn">☰ Open Sidebar</button>
        <h2>Collapsed Sidebar</h2>
        <p>
          Click on the hamburger menu/bar icon to open the sidebar, and push
          this content to the right.
        </p>
      </div>
    </div>
  );
};

export default TrelloBody;
