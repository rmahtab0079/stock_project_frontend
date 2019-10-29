import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {SignUp} from './signup.jsx';
import {Portfolio} from './portfolio.jsx';


function App() {
  return (
    <Router>
    <nav class="navbar navbar-expand-lg navbar-default navbar-dark bg-dark">
    <div class="navbar-inner">
      <div class="container">
    <ul class="nav navbar-nav">
    <li class="nav-item">
    <Link to="/">Home</Link>
    </li>
    <li class="nav-item">
    <Link to="/about">About Raeeeb</Link>
    </li>
    <li class="nav-item">
        <Link to="/dashboard">Dashboard</Link>
    </li>
    <li class="nav-item">
    <a class="nav-link" ><Link to="/login">Login</Link></a>
    </li>
    <li class="nav-item">
    <Link to="/signup">Sign Up</Link>
    </li>
    <li class="nav-item">
    <a class="nav-link" ><Link to="/portfolio">Portfolio</Link></a>
    </li>
    <li class="nav-item">
    <a class="nav-link" ><Link to="/transactions">Transactions</Link></a>
    </li>
    </ul>
      </div>
      </div>
    </nav>


    <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/about">
        <About />
        </Route>
        <Route path="/dashboard">
        <Dashboard />
        </Route>
        <Route path="/login">
        <Dashboard />
        </Route>
        <Route path="/signup">
        <SignUp />
        </Route>
        <Route path="/portfolio">
        <Portfolio />
        </Route>
        <Route path="/transactions">
        <Dashboard />
        </Route>
        </Switch>
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin />

        <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin
        />

        <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin
        />
        </Router>
        );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
    <h2>Please show this change</h2>
    <h2>Home</h2>
    <Button>Click Me!</Button>
    </div>
    );
}

function About() {
  return (
    <div>
    <h2>About</h2>
    </div>
    );
}

function Dashboard() {
  return (
    <div>
    <h2>Great</h2>
    </div>
    );
}

export default App;
