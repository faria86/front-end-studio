import React, { Component } from "react";
import './App.scss';

import NavBar from './components/navbar';
import SectionOne from './components/sections/sectionone';
import { MapSection } from './components/sections/mapsection';
import SectionThree from './components/sections/sectionthree';
import SectionFour from './components/sections/sectionfour';
import SectionFive from './components/sections/sectionfive';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <SectionOne
          id="section1"
        />
         <MapSection
          id="section2"
        />
        <SectionThree
          id="section3"
        />
        <SectionFour
          id="section4"
        />
          <SectionFive
          id="section5"
        />
      </div>
    );
  }
}

export default App;
