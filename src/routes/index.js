import { Button } from "@mui/material";
import React from "react";
import { HashRouter as Router, Link, Route } from "react-router-dom";
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

const Home = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)",
      }}
      className={`w-screen h-screen flex items-center justify-center`}
    >
      <Link to={"/board-0"}>
        <Button variant={"contained"} size="large">
          Welcome to Trello
        </Button>
      </Link>
    </div>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/:boardID" exact component={LandingPage} />
    </Router>
  );
};

export default AppRouter;
