import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import TrelloBody from "../components/TrelloBody";
import TrelloHeader from "../components/TrelloHeader";

const LandingPage = () => {
  return (
    <>
      <TrelloHeader />
      <TrelloBody />
    </>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/:boardID" exact component={LandingPage} />
        {/* <Route path="/:boardID" component={TrelloBoard} /> */}
      </div>
    </Router>
  );
};

export default AppRouter;
