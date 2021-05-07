import React, { Component } from "react";
import './App.scss';

import NavBar from './components/navbar';
import MapContainer from './components/sections/map/mapContainer';
import BigPicture from './components/sections/bigPicture';
import OurMenu from './components/sections/ourMenu';
import PopularRecipes from './components/sections/popularRecipes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <BigPicture/>
         <MapContainer/>
        <OurMenu/>
        <PopularRecipes/>
      </div>
    );
  }
}

export default App;
