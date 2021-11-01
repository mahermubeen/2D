import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div className="not-found-wrapper">
        <div className="not-found">
          <div className="not-found-code">404</div>
          <div className="not-found-message">Page not found</div>
          <div className="not-found-description">
            Sorry, we couldn’t find the page. But don’t worry, you can find
            plenty of other things in our{" "}
            <span>
              <Link to="/">Home</Link>
            </span>
            .
          </div>
          <div className="not-found-home-icon"></div>
        </div>
      </div>
    );
  }
}

export default NotFound;
