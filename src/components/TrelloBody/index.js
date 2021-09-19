import React, { Component } from "react";

import TrelloSidebar from "../TrelloSidebar";
import TrelloBoard from "../TrelloBoard";

class TrelloBody extends Component {
  render() {
    return (
      <div
        className={`bg-[#0179bf6b] flex h-[calc(100vh-44px)] relative`}
        id="body"
      >
        <TrelloSidebar />
        <TrelloBoard />
      </div>
    );
  }
}

export default TrelloBody;
