import React, { Component } from "react";
import "./App.css";
import SmurfList from './smurfs'
import SmurfForm from './form'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfForm/>
        <SmurfList/>
      </div>
    );
  }
}

export default App;
