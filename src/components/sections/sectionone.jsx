import React from 'react';
import './sectionone.scss';

function SectionOne({ id }) {
  return (
    <div 
    className="food-london" 
    id="section2" 
    style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + "/images/fruits.jpg"})`, 
      backgroundRepeat: "no-repeat",
      backgroundSize: "65%",
      backgroundPosition: "center bottom"
    }} >
       <h1>THE BEST FOODIE</h1>
       <h1 class="bigger">EXPERIENCE</h1>
       <h2>NOW IN LONDON</h2>
    </div>
  );
}

export default SectionOne;