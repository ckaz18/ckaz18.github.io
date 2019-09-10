import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Blog from "./Blog";
  import Resume from "./Resume";

  class Main extends Component {
      render() {
          return (
            <HashRouter>
                <div>
                    <h1>Test</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/resume">Resume</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route path="/" component={Home}/>
                        <Route path="/blog" component={Blog}/>
                        <Route path="/resume" component={Resume}/>
                    </div>
                </div>
            </HashRouter>
          );
      }
}

export default Main;