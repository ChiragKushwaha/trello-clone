import { CONSTANTS } from "../actions";
import uuid from "uuidv4";

export const addCard = (listID, text, title) => {
  const id = uuid();
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { title, text, listID, id },
  };
};

export const editCard = (id, listID, newText, newTitle) => {
  return {
    type: CONSTANTS.EDIT_CARD,
    payload: { id, listID, newText, newTitle },
  };
};

export const deleteCard = (id, listID) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: { id, listID },
  };
};
