import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <Switch>
            <Route path="/" exact>
              <h1>Home Page</h1>
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
