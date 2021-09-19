import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import BoardTile from "../BoardTile";
import language from "../../constants/en.json";
import { connect } from "react-redux";
import AddBoard from "../AddBoard";

const DropdownMenu = ({ boards, boardOrder }) => {
  const [showBoards, setshowBoards] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AddBoard handleClose={handleClose} open={open} />
      <div className={`w-full cursor-default`}>
        <div className={`flex justify-between items-center px-[16px]`}>
          <div
            className={`text-[#5E6C84] font-bold text-[14px] leading-[16px]`}
          >
            {language.yourBoards}
          </div>
          <div>
            <IconButton
              onClick={handleClickOpen}
              className={`text-[#5E6C84]`}
              aria-label="add board"
              component="span"
            >
              <AddIcon />
            </IconButton>
            <IconButton
              onClick={() => setshowBoards(!showBoards)}
              className={`text-[#5E6C84]`}
              aria-label="show boards"
              component="span"
            >
              <KeyboardArrowDownIcon
                className={showBoards ? "transform rotate-180" : ""}
              />
            </IconButton>
          </div>
        </div>

        {showBoards &&
          boardOrder.map((boardID) => {
            const board = boards[boardID];
            return (
              <Link
                key={boardID}
                to={`/${board.id}`}
                style={{ textDecoration: "none" }}
              >
                <BoardTile {...board} key={board.id} />
              </Link>
            );
          })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  boards: state.boards,
  boardOrder: state.boardOrder,
});

export default connect(mapStateToProps)(DropdownMenu);
