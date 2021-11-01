import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="wrapper">
        <h1 className="bg-red-500">Hello This is my home page.</h1>
      </div>
    );
  }
}

export default connect()(Home);
