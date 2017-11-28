import React, { Component } from 'react';
import Greeter from "./components/greeter";
import Title from "./components/title";
import SortingButton from "./components/sortingbutton";
import Item from "./components/item";
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Title text="Welcome to React" />

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Greeter 
            msg="Hi React"
            des="This is the desc."/>
        </p>

        <div className="content">

          <div className="ms-menu">
            <SortingButton />
            <SortingButton />
            <SortingButton />
          </div>

          <div className="ms-items-container flex-container space-between">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
