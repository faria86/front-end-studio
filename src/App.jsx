import React, { Component } from "react";
import './App.scss';

import NavBar from './components/navbar';
import SectionOne from './components/sections/sectionone';
import SectionTwo from './components/sections/sectiontwo';
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
         <SectionTwo
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
