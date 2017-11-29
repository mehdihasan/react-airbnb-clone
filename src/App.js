import React, { Component } from 'react';
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
      seedSections.map((section) => 
        {
          if (section.typeId === sectionId) {
            newSeeds.push(section)
          }
        }
      )
    }
    
    this.setState({
      seeds: newSeeds
    })
  }

  handleCategoryClick = (propertyType) => {
    // alert(propertyType)
    var newItems = []
    var newSeeds = []
    seedSections.map((section) => 
      {if (section.id !== 0) {
        section.listings.map((item) => 
          {
            if (propertyType === item.property_type) {
              newItems.push(item)
            }
          }
        )
      }}
    )
    var newSection = {
      id: 0,
      typeId: 9,
      title: propertyType,  
      listings: newItems
    }
    newSeeds.push(newSection)
    this.setState({
      seeds: newSeeds
    })
  }

  handleFavClick = (itemId, item, section) => {
    // remove item
    if (this.state.seeds[0].listings.includes(item)) {
      var index = this.state.seeds[0].listings.indexOf(item);
      this.state.seeds[0].listings.splice(index, 1);
    } 
    // add item
    else {
      this.state.seeds[0].listings.push(item)
    }
    this.setState({
      seeds: this.state.seeds
    })
  }
  
  render() {

    // const seeds = seedSections
    const filter = filterTypes

    return (
      <div className="App">

        <div className="App-header">
          <div className="content ms-logo flex-container">

            <img src={logo} className="App-logo" alt="logo" />

            <Title text="Welcome to Air Demo" />
          </div>
        </div>

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
                    data={sectionData}
                    onCatClick={this.handleCategoryClick}
                    onFavClick={this.handleFavClick} />
            )}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
