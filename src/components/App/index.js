import "./style.css";
import TrelloBody from "../TrelloBody";
import TrelloHeader from "../TrelloHeader";

const App = () => {
  return (
    <div className={`main`}>
      <TrelloHeader />
      <TrelloBody />
    </div>
  );
};

export default App;
