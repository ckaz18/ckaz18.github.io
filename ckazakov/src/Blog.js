import React, { Component } from 'react';
import Home from './Home';

class Blog extends Component {
    render () {
        return (
            <div>
                <h2>Blog</h2>
                <p>Welcome to my blog: The Disobedient Dev</p>
                <ol>
                    <li>Blog 1</li>
                    <li>Blog 2</li>
                    <li>Blog 3</li>
                </ol>
            </div>
        );
    }
}

export default Home;