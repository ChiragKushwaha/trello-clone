import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { addBoard } from "../../actions";
import { connect } from "react-redux";

function AddBoard({ handleClose, open, dispatch }) {
  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleChange = (e) => {
    setNewBoardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBoard(newBoardTitle));
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className={`md:w-[500px]`}></div>
      <DialogTitle>Create a new Board</DialogTitle>
      <DialogContent>
        <TextField
          onSubmit={handleSubmit}
          onChange={handleChange}
          value={newBoardTitle}
          autoFocus
          margin="dense"
          id="name"
          label="Enter your board title"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}

export default connect()(AddBoard);
