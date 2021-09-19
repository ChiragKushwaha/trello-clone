import React, { useState } from "react";
import { connect } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";
import DeleteIcon from "@mui/icons-material/Delete";

import TrelloCard from "../TrelloCard";
import TrelloCreate from "../TrelloCreate";
import { editTitle, deleteList } from "../../actions";
import { IconButton } from "@mui/material";

const TrelloList = ({ title, cards, listID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  const renderEditInput = () => {
    return (
      <form onSubmit={handleFinishEditing}>
        <input
          className={`w-full border-none outline-[blue] rounded-[3px] p-[5px]`}
          type="text"
          value={listTitle}
          onChange={handleChange}
          autoFocus
          onFocus={handleFocus}
          onBlur={handleFinishEditing}
        />
      </form>
    );
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setListTitle(e.target.value);
  };

  const handleFinishEditing = (e) => {
    setIsEditing(false);
    dispatch(editTitle(listID, listTitle));
  };

  const handleDeleteList = () => {
    dispatch(deleteList(listID));
  };

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <div
          className={`bg-[#dfe3e6] rounded-[3px] w-[300px] p-[8px] h-[fit-content]`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(listID)} type="card">
            {(provided) => (
              <div className={`flex flex-col space-y-[8px]`}>
                <div>
                  {isEditing ? (
                    renderEditInput()
                  ) : (
                    <div
                      className={`w-full h-full flex justify-between items-center cursor-pointer`}
                      onClick={() => setIsEditing(true)}
                    >
                      <h4
                        className={`hover:bg-[#ccc] h-[34px] flex items-center duration-300 transition-background ease-in flex-1 px-1`}
                      >
                        {listTitle}
                      </h4>
                      <IconButton
                        className={`h-[34px]`}
                        onClick={handleDeleteList}
                      >
                        <DeleteIcon
                          className={`transition-opacity duration-300 ease-in-out opacity-40 hover:opacity-80`}
                        />
                      </IconButton>
                    </div>
                  )}
                </div>
                <div
                  className={`space-y-[8px]`}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {cards.map((card, index) => (
                    <TrelloCard
                      key={card.id}
                      text={card.text}
                      id={card.id}
                      index={index}
                      listID={listID}
                    />
                  ))}
                  {provided.placeholder}
                  <TrelloCreate listID={listID} />
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default connect()(TrelloList);
