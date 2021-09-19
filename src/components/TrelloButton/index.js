import React from "react";
import { Button } from "@mui/material";

const TrelloButton = ({ children, onClick }) => {
  return (
    <Button
      className={`text-white`}
      style={{ backgroundColor: "#5aac44" }}
      variant="contained"
      onMouseDown={onClick}
    >
      {children}
    </Button>
  );
};

export default TrelloButton;
