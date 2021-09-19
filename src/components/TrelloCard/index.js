import React, { useState } from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

import TrelloForm from "../TrelloForm";
import { editCard, deleteCard } from "../../actions";
import TrelloButton from "../TrelloButton";

const TrelloCard = React.memo(
  ({ title, text, id, listID, index, dispatch }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [cardText, setText] = useState(text);
    const [cardTitle, setTitle] = useState(title);

    const closeForm = (e) => {
      setIsEditing(false);
    };

    const handleChange = (e, type) => {
      if (type === "text") {
        setText(e.target.value);
      } else {
        setTitle(e.target.value);
      }
    };

    const saveCard = (e) => {
      e.preventDefault();

      dispatch(editCard(id, listID, cardText, cardTitle));
      setIsEditing(false);
    };

    const handleDeleteCard = (e) => {
      dispatch(deleteCard(id, listID));
    };

    const renderEditForm = () => {
      return (
        <TrelloForm
          list={false}
          title={cardTitle}
          text={cardText}
          onChange={handleChange}
          closeForm={closeForm}
        >
          <TrelloButton onClick={saveCard}>Save</TrelloButton>
        </TrelloForm>
      );
    };

    const renderCard = () => {
      return (
        <Draggable draggableId={String(id)} index={index}>
          {(provided) => (
            <div
              className={`group relative max-w-full`}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              onDoubleClick={() => setIsEditing(true)}
            >
              <Card className={`flex items-center justify-between`}>
                <CardContent>
                  <h5 className={"font-medium text-[18px]"}>{title}</h5>
                  <Typography className={"break-all"}>{text}</Typography>
                </CardContent>
                <div
                  className={`hidden group-hover:flex transition-all ease-in-out flex-col justify-between items-center`}
                >
                  <IconButton className={``} onMouseDown={handleDeleteCard}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    className={``}
                    onMouseDown={() => setIsEditing(true)}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                </div>
              </Card>
            </div>
          )}
        </Draggable>
      );
    };

    return isEditing ? renderEditForm() : renderCard();
  }
);

export default connect()(TrelloCard);
