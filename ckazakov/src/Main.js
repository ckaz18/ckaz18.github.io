import React, { Component } from 'react';
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
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/">Blog</NavLink></li>
                    <li><NavLink to="/">Resume</NavLink></li>
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