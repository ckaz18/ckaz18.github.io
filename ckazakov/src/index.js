import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import './index.css';
import profileImg from './images/profileImage.JPG';

// class App extends Component {
//     render() {
//       return (
//         <div className="App">
//             <center>
//             <h1>Christi Kazakov</h1>
//             <img src={profileImg} alt="profileImage" width="90" height="140"></img>
//             </center>
//         </div>
//       );
//     }
//   }


ReactDOM.render(<Main />, document.getElementById('root'));
