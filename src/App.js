import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./component/Header";
import Cover from "./component/cover";
import About from "./component/about";
import Projects from "./component/Projects/projects";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Cover} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
