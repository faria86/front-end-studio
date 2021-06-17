import React, { Component } from "react";
import './App.scss';

import NavBar from './components/navbar';
import MapContainer from './components/sections/map/mapContainer';
import BigPicture from './components/sections/bigPicture/bigPicture';
import OurMenu from './components/sections/ourMenu/ourMenu';
import PopularRecipes from './components/sections/popularRecipes/popularRecipes';
import ListOfUsers from "./components/sections/listOfUsers/listOfUsers";


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <BigPicture/>
        <MapContainer/>
        <OurMenu/>
        <PopularRecipes/>
        <ListOfUsers/>
      </div>
    );
  }
}

export default App;
