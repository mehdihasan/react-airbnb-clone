import React, { Component } from 'react';
import Greeter from "./components/greeter";
import Title from "./components/title";
import Section from "./components/section";
import SortingButton from "./components/sortingbutton";
import logo from './logo.svg';
import { seedSections, filterTypes } from './data/seed'
import './css/App.css';

class App extends Component {

  state = {
    seeds: []
  }

  componentDidMount = () => {
    this.setState({
      seeds: seedSections
    })
  }

  handleMenuClick = (sectionId) => {
    var newSeeds = []
    if (sectionId === 0) {
      newSeeds = seedSections
    } else {
      {seedSections.map((section) => 
        {
          if (section.typeId === sectionId) {
            newSeeds.push(section)
          }
        }
      )}
    }
    
    this.setState({
      seeds: newSeeds
    })
  }
  
  render() {

    // const seeds = seedSections
    const filter = filterTypes

    return (
      <div className="App">

        <div className="App-header">
          <div className="content">

            <img src={logo} className="App-logo" alt="logo" />

            <Title text="Welcome to Air Demo" />
          </div>
        </div>

        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Greeter 
            msg="Hi React"
            des="This is the desc."/>
        </p> */}

        <div className="content">
          <div className="ms-menu ms-section-holder default-padding">
            {filter.map((filterData) => 
              <SortingButton
                key={filterData.id}
                data={filterData}
                onMenuClick={this.handleMenuClick} />
            )}
          </div>
          <div className="ms-section-holder">
            {this.state.seeds.map((sectionData) =>
                <Section
                    key={sectionData.id}
                    data={sectionData} />
            )}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
