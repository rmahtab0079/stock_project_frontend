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


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
    <Router>
    <div>
    <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous"
    />
    <nav class="navbar navbar-expand-lg navbar-default navbar-dark bg-dark">
    <div class="navbar-inner">
      <div class="container">
    <ul class="nav navbar-nav">
    <li class="nav-item">
    <a class="nav-link" ><Link to="/">Home</Link></a>
    </li>
    <li class="nav-item">
    <a class="nav-link" ><Link to="/about">About</Link></a>
    </li>
    <li class="nav-item">
     <a class="nav-link" ><Link to="/dashboard">Dashboard</Link></a>
    </li>
    <li class="nav-item">
    <a class="nav-link" ><Link to="/login">Login</Link></a>
    </li>
    <li class="nav-item">
    <a class="nav-link" ><Link to="/signup">Sign Up</Link></a>
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
        <Dashboard />
        </Route>
        <Route path="/transactions">
        <Dashboard />
        </Route>
        </Switch>
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin />

        <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin
        />

        <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
        />
        </div>
        </Router>
        );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
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
    <h2>Dashboard</h2>
    </div>
    );
}

export default App;
