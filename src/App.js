import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import './App.css';



function App(props){
 
   return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => <Signup {...props}/>} />
        <Route path="/home" render={props => <Home {...props}/>} />
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;