import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./component/Header";
import Home from "./Home";
function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
