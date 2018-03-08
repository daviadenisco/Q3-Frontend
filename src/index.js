import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/navbar';
import MeetTheStudents from './components/meetTheStudents';
import Cards from './Cards';
import Footer from './components/footer';
import './Cards.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NavBar />, document.getElementById('nav'));
ReactDOM.render(<MeetTheStudents />, document.getElementById('meetTheStudents'));
ReactDOM.render(<Cards />, document.getElementById('cards'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

registerServiceWorker();
