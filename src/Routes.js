import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Containers
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />

        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
