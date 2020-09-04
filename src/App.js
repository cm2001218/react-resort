import React from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Navbar name="hello"></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/rooms" component={Rooms}></Route>
        <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;
