import React, { Component } from "react";
import "./App.css";
import SmurfList from './smurfs'
import SmurfForm from './form'


const App = () => {
  return (
    <div className="App">
      <SmurfForm/>
      <SmurfList/>
    </div>
  );
}

export default App;
