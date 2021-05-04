import React from 'react';
import './sectionone.css';

function SectionOne({ id }) {

  return (
    <div className="food-london" id="section2">
       <h1>THE BEST FOOD EXPERIENCE</h1>
       <h2>NOW IN LONDON</h2>
       <img className="image-fruits" src="./../../../public/images/fruits.jpg" alt="fruits"></img>
    </div>
  );
}

export default SectionOne;