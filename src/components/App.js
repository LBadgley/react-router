import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Blue from './BlueComponent';
import Yellow from './YellowComponent';
import Red from './RedComponent';

export default function App() {
  return (
    <Router>
      <Route path="/" component={Header} />
      <Route path="/blue" component={Blue} />
      <Route path="/yellow" component={Yellow} />
      <Route path="/red" component={Red} />
    </Router>
  );
}
