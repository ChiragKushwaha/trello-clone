import { CONSTANTS } from "../actions";

const initialState = {
  "card-0": {
    text: "Last Episode",
    id: `card-0`,
    list: "list-0",
  },
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const { title, text, listID, id } = action.payload;

      const newCard = {
        title,
        text,
        id: `card-${id}`,
        list: listID,
        creationTime: Date.now(),
      };

      return { ...state, [`card-${id}`]: newCard };
    }
    case CONSTANTS.EDIT_CARD: {
      const { id, newText, newTitle } = action.payload;
      const card = state[id];
      card.text = newText;
      card.title = newTitle;
      return { ...state, [`card-${id}`]: card };
    }

    case CONSTANTS.DELETE_CARD: {
      const { id } = action.payload;
      const newState = state;
      delete newState[id];
      return newState;
    }
    default:
      return state;
  }
};

export default cardsReducer;
