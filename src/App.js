import React from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./component/Header";
import Cover from "./component/cover";
import About from "./component/About/about";
import Contact from "./component/contact";
import Blogs from "./component/Blog/blogs";
import Projects from "./component/Projects/projects";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Cover} />
      </Switch>
    </div>
  );
}

export default App;
