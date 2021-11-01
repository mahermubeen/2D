import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Routes />
      </Fragment>
    );
  }
}

export default connect()(App);
