import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// images
import tick from "../assets/img/tick.png";
// import logo from "../assets/img/logo-s.png";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="home">
        {/* <div className="header">
          <Link to="/" className="logo">
            <img alt="asdf" src={logo} />
          </Link>
          <div className="nav">
            <Link to="/" className="active">Home</Link>
            <Link to="/">Projects</Link>
            <Link to="/">Examples</Link>
          </div>
        </div> */}
        <div className="main-wrapper">
          <div className="signIn-content">
            <div className="left-div">
              <div className="left-main">
                <h3>Sign In</h3>
                <div className="p1-wrap">
                  <p>New user?</p>
                  <Link to="/">Create an account</Link>
                </div>
                <form autcomplete="false" method="post" action="#">
                  <label for="inpt2" className="input-wrap">
                    <input
                      id="inpt2"
                      className="email-input"
                      type="text"
                      name="email"
                      placeholder="Username or email"
                      autcomplete="false"
                    />
                    <img src={tick} className="hidden" alt="asdf" />
                  </label>
                  <label for="inpt1" className="input-wrap pass-wrap">
                    <input
                      id="inpt1"
                      className="pass-input"
                      type="password"
                      name="pass"
                      placeholder="Password"
                      autcomplete="false"
                    />
                    <img src={tick} className="hidden" alt="asdf" />
                  </label>

                  <div className="checkbox-wrap">
                    <input
                      class="styled-checkbox"
                      id="styled-checkbox-1"
                      type="checkbox"
                      value="value1"
                    />
                    <label for="styled-checkbox-1">Keep me signed in</label>
                  </div>

                  <button type="submit" className="login-btn">
                    Sign In
                  </button>
                </form>
              </div>
            </div>

            <div className="right-div">
              <div className="row1 disable">
                <figure>
                  {/* <img src={folder} alt="asdf" /> */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 500 500"
                    height="500px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 500 500"
                    width="500px"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M31.949,390.323c0,20.078,16.264,36.345,36.34,36.345h363.421  c20.078,0,36.34-16.267,36.34-36.345V145.018c0-20.079-16.262-36.342-36.34-36.342H250V92.324c0-11.086-8.903-19.991-19.989-19.991  h-96.304c-11.086,0-19.989,8.905-19.989,19.991v270.746c0,9.99-8.177,18.172-18.17,18.172c-9.996,0-18.173-8.182-18.173-18.172  V131.389c0-12.536-10.177-22.713-22.713-22.713c-12.536,0-22.713,10.177-22.713,22.713V390.323z"
                      fill="#010101"
                      fill-rule="evenodd"
                    />
                  </svg>
                </figure>
                <button>PROJECTS</button>
              </div>
              <div className="row2 disable">
                <button>EXAMPLES</button>
              </div>
              <div className="row3 disable">
                <button>OPEN</button>
                <button>SAVE</button>
              </div>
            </div>
          </div>

          <div className="footer">
            <p className="p1">contact@todwell.com</p>
            <p className="p2">Copyright © 2021 ToDwell. All rights reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Home);
