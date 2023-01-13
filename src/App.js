import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import Home from "./Home";
import Create from "./Create";
function App() {
  return (
   
      
        <Router>
    
            <Switch>

              <Route exact path="/">
                <Login />
              </Route>

              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/Create">
                <Create />
              </Route>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/Edit/:id">
                <Create />
              </Route>
              
             
            </Switch>
        </Router>
  );
}

export default App;
