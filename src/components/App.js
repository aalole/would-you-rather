import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Login from "./SignIn";
import Navigation from "./Navigation";
import HomePage from "./HomePage";
import PersonCard from "./PersonCard";
import CreatePoll from "./CreateNewPoll";
import ComponentsWrapper from './ComponentsWrapper'
import Board from "./Board";
import Error404 from "./Error404";


function App(props) {
  const { authUser, handleInitialData } = props;
  useEffect(() => {
    handleInitialData();
  }, []);
  return (
    <Router>
      <div className="App">
        {authUser === null ? (
          <Route
            render={() => (
              <ComponentsWrapper>
                <Login />
              </ComponentsWrapper>
            )}
          />
        ) : (
          <Fragment>
            <div className="main-wrapper">
              <Navigation className="navigation" />
              <ComponentsWrapper className="c-wrapper">
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/questions/bad_id" component={Error404} />
                  <Route path="/questions/:question_id" component={PersonCard} />
                  <Route path="/create-new-poll" component={CreatePoll} />
                  <Route path="/Board" component={Board} />
                  <Route component={Error404} />
                </Switch>
              </ComponentsWrapper>
            </div>
          </Fragment>
        )}
      </div>
    </Router>
  );
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps, { handleInitialData })(App);
