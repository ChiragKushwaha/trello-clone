import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";

import Menu from "../../../public/icons/menu.svg";
import TrelloIcon from "../../../public/icons/trello.gif";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import TrelloCreate from "../TrelloCreate";

const TrelloHeader = () => {
  const [showCreateListModal, setShowCreateListModal] = useState(false);

  const handleSubmit = () => {};

  return (
    <>
      <CreateListModal
        open={showCreateListModal}
        handleClose={() => setShowCreateListModal(false)}
      />
      <div
        className={`bg-[#172b4d] h-[44px] flex items-center justify-between pr-[8px] md:pr-[16px]`}
      >
        <div className={`flex items-center space-x-[8px]`}>
          <IconButton color="primary" aria-label="menu" component="span">
            <Menu className={`w-[20px] h-[20px] text-white`} />
          </IconButton>
          <a href={"/"}>
            <img
              className={`w-[75px] cursor-pointer`}
              src={TrelloIcon}
              alt={"logo"}
            />
          </a>
        </div>
        <Button
          size={"small"}
          variant={"contained"}
          onClick={() => setShowCreateListModal(true)}
        >
          Add List
        </Button>
      </div>
    </>
  );
};

const CreateListModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className={`md:w-[500px]`}></div>
      <DialogTitle>Create a new List</DialogTitle>
      <DialogContent>
        <TrelloCreate list={true} cb={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default TrelloHeader;
