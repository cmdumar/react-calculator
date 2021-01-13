import React from 'react';
import {
  BrowserRouter, Link, Route, Switch,
} from 'react-router-dom';
import About from './About';
import Calculator from './Calculator';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/calculator" component={Calculator} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
