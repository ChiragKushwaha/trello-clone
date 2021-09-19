import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { withRouter } from "react-router-dom";

import TrelloList from "../TrelloList";
import TrelloCreate from "../TrelloCreate";
import { sort, setActiveBoard } from "../../actions";

// TODO: Fix performance issue

class TrelloBoard extends PureComponent {
  componentDidMount() {
    // set active trello board here
    const { boardID } = this.props.match.params;

    this.props.dispatch(setActiveBoard(boardID));
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    const { lists, cards, match, boards } = this.props;
    const { boardID } = match.params;
    const board = boards[boardID];
    if (!board) {
      return <p>Board not found</p>;
    }
    const listOrder = board.lists;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className={`flex flex-col p-[8px]`}>
          <h2 className={`py-[8px]`}>{board.title}</h2>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {(provided) => (
              <div
                className={`flex w-[calc(100vw-56px)] space-x-[8px] overflow-x-scroll`}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {listOrder.map((listID, index) => {
                  const list = lists[listID];
                  if (list) {
                    const listCards = list.cards.map((cardID) => cards[cardID]);

                    return (
                      <TrelloList
                        listID={list.id}
                        key={list.id}
                        title={list.title}
                        cards={listCards}
                        index={index}
                      />
                    );
                  }
                })}
                {provided.placeholder}
                <TrelloCreate list />
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
  cards: state.cards,
  boards: state.boards,
});

export default withRouter(connect(mapStateToProps)(TrelloBoard));
