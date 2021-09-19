import React, { PureComponent, useMemo } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { withRouter } from "react-router-dom";

import TrelloList from "../TrelloList";
import TrelloCreate from "../TrelloCreate";
import { sort, setActiveBoard } from "../../actions";
import sorted from "../../utils/sort";

// TODO: Fix performance issue

class TrelloBoard extends PureComponent {
  componentDidMount() {
    // set active trello board here
    const { boardID } = this.props.match.params;
    this.props.dispatch(setActiveBoard(boardID));

    this.unlisten = this.props.history.listen((location, action) => {
      this.props.dispatch(setActiveBoard(location.pathname.substr(1)));
    });
  }

  componentWillUnmount() {
    this.unlisten();
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
          <h2 className={`py-[8px] font-bold text-3xl`}>{board.title}</h2>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {(provided) => (
              <div
                className={`h-full flex w-[calc(100vw-56px)] space-x-[8px] overflow-x-scroll`}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {listOrder.map((listID, index) => {
                  const list = lists[listID];
                  if (list) {
                    const sortedList = sorted(list, cards, true);
                    const listCards = sortedList.cards.map(
                      (cardID) => cards[cardID]
                    );
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
