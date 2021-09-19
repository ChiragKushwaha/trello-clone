import React from "react";
import { connect } from "react-redux";
import AddIcon from "@mui/icons-material/Add";

import TrelloButton from "../TrelloButton";
import { addList, addCard } from "../../actions";
import TrelloForm from "../TrelloForm";
import TrelloOpenForm from "../TrelloOpenForm";

class TrelloCreate extends React.PureComponent {
  state = {
    formOpen: false,
    text: "",
  };

  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };

  closeForm = (e) => {
    this.setState({
      formOpen: false,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: "",
      });
      dispatch(addList(text));
    }
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: "",
      });
      dispatch(addCard(listID, text));
    }
  };

  renderOpenForm = () => {
    const { list } = this.props;

    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? "opacity-100" : "opacity-50";
    const buttonTextColor = list ? "text-white" : "text-[inherit]";
    const buttonTextBackground = list ? "bg-[rgba(0,0,0,.15)]" : "bg-[inherit]";

    return (
      <div
        className={`flex items-center cursor-pointer rounded-[3px] h-[36px] w-[300px] px-[10px] ${buttonTextOpacity} ${buttonTextColor} ${buttonTextBackground}`}
        onClick={this.openForm}
      >
        <AddIcon />
        <p className={`bg-transparent flex-shrink-0`}>{buttonText}</p>
      </div>
    );
  };

  render() {
    const { text } = this.state;
    const { list } = this.props;
    return this.state.formOpen ? (
      <TrelloForm
        text={text}
        onChange={this.handleInputChange}
        closeForm={this.closeForm}
      >
        <TrelloButton onClick={list ? this.handleAddList : this.handleAddCard}>
          {list ? "Add List" : "Add Card"}
        </TrelloButton>
      </TrelloForm>
    ) : (
      <TrelloOpenForm list={list} onClick={this.openForm}>
        {list ? "Add another list" : "Add another card"}
      </TrelloOpenForm>
    );
  }
}

export default connect()(TrelloCreate);
