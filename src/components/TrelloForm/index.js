import React from "react";
import Textarea from "react-textarea-autosize";
import CloseIcon from "@mui/icons-material/Close";
import { Card, IconButton } from "@mui/material";

const TrelloForm = React.memo(
  ({ list, text = "", title = "", onChange, closeForm, children }) => {
    const placeholder = list
      ? "Enter list title..."
      : "Enter a card description...";

    const handleFocus = (e) => {
      e.target.select();
    };

    return (
      <div className={`w-[284px] mb-[8px]`}>
        <Card className={`w-full pt-[6px] px-[8px] ${list ? "" : "space-y-2"}`}>
          {list ? null : (
            <input
              className={`outline-none border-none w-full`}
              autoFocus
              value={title}
              onFocus={handleFocus}
              onChange={(e) => onChange(e, "title")}
              placeholder={"Enter card title"}
            />
          )}
          <Textarea
            className={` resize-none min-h-[84px] w-[284px] overflow-hidden outline-none border-none`}
            placeholder={placeholder}
            autoFocus={list ? true : false}
            onFocus={handleFocus}
            value={text}
            onChange={(e) => onChange(e, "text")}
          />
        </Card>
        <div className={`my-[8px] flex items-center`}>
          {children}
          <IconButton onMouseDown={closeForm}>
            <CloseIcon className={`mx-[8px] cursor-pointer`} />
          </IconButton>
        </div>
      </div>
    );
  }
);

export default TrelloForm;
