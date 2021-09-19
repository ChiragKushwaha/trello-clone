import React from "react";
import AddIcon from "@mui/icons-material/Add";

const TrelloOpenForm = ({ list, children, onClick }) => {
  const buttonTextOpacity = list ? "opacity-100" : "opacity-50";
  const buttonTextColor = list ? "text-white" : "text-[inherit]";
  const buttonTextBackground = list ? "bg-[rgba(0,0,0,.15)]" : "bg-[inherit]";

  return (
    <div
      className={`flex items-center cursor-pointer rounded-[3px] h-[36px] min-w-[300px] ${buttonTextOpacity} ${buttonTextColor} ${buttonTextBackground}`}
      onClick={onClick}
    >
      <AddIcon />
      <p className={`flex-shrink-0`}>{children}</p>
    </div>
  );
};

export default TrelloOpenForm;
