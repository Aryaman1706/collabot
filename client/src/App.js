import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Common from "./Components/Common";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Task from "./Pages/Task";
import Team from "./Pages/Team";
import EditTaskTeam from "./Pages/EditTaskTeam";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Common />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/task" component={Task} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/editTaskTeam" component={EditTaskTeam} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
// Color Theme :- https://coolors.co/011627-ff3366-2ec4b6-f6f7f8-20a4f3
