import React from "react";
import Textarea from "react-textarea-autosize";
import CloseIcon from "@mui/icons-material/Close";
import { Card, IconButton } from "@mui/material";

const TrelloForm = React.memo(
  ({ list, text = "", onChange, closeForm, children }) => {
    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";

    const handleFocus = (e) => {
      e.target.select();
    };

    return (
      <div className={`w-[284px] mb-[8px]`}>
        <Card className={`w-full pt-[6px] px-[8px]`}>
          <Textarea
            className={`resize-none w-[284px] overflow-hidden outline-none border-none`}
            placeholder={placeholder}
            autoFocus
            onFocus={handleFocus}
            value={text}
            onChange={(e) => onChange(e)}
            onBlur={closeForm}
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
