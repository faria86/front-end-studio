import React from 'react';
import './popularRecipes.scss';

function PopularRecipes({ id }) {

  return (
    <div className="map" id="section4">
      
      <div className="title">
        <div className="title-left">
          <h2>POPULAR RECIPES</h2>
          <h3>SEE ALL</h3>
        </div>

        <div className="title-right">
          <h2>DO YOU WANT TO SHARE YOUR OWN RECIPE?</h2>
          <h3>SEE ALL</h3>
        </div>
      </div>
        

      <div className="scrolling-wrapper">
        
        <div className="card"style={{ width: "389px", height: "685px" }}>
          <img src={process.env.PUBLIC_URL + '/images/toast.jpg'} alt="toast" style={{ width: "370px", height: "370px" }} />
          <div className="container1">
            <article>DIFFICULTY</article>
            <h3>CHARRED BROCCOLI & CHEAT’S VEGGIE<br></br> ROMESCO TOAST</h3>
            <p>Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…</p>
            <span>USER FULL NAME</span>
          </div>
        </div>

        <div className="card2" style={{ width: "242px", height: "480px" }}>
          <img src={process.env.PUBLIC_URL + '/images/pineapple.jpg'} alt="pine" style={{ width: "170px", height: "240px" }} />
          <div className="container2">
            <article>DIFFICULTY</article>
            <h3>PINEAPPLE FRUIT SALAD WITH FRESH CREAM</h3>
            <p>The pineapple juice is the star of the dressing and what gives it such a refreshing and sweet taste. Pineapple juice is kno</p>
            <span>USER FULL NAME</span>
          </div>
        </div>

        <div className="card" style={{ width: "242px", height: "480px" }}>
          <img src={process.env.PUBLIC_URL + '/images/cheese.jpg'} alt="cheese" style={{ width: "240px", height: "450px" }} />
          <div className="container3">
            <article>DIFFICULTY</article>
            <h3>CHEESE, SPINACH &<br></br> MUSHROOM STUFFED CHI…</h3>
            <p>Amp up this dinner party classic by stuffing three types of cheese, spinach and mushroom into the chicken…</p>
            <span>USER FULL NAME</span>
          </div>
        </div>

        <div className="card" style={{ width: "240px", height: "480px" }}>
          <img src={process.env.PUBLIC_URL + '/images/feta1.jpg'} alt="feta1" style={{ width: "240px", height: "240px" }}/>
          <div className="container4">
            <article>DIFFICULTY</article>
            <h3>FETA AND PEACH COUSCOUS</h3>
            <p>Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta...</p>
            <span>USER FULL NAME</span>
          </div>
        </div>

        <div className="card" style={{ width: "240px", height: "480px" }}>
          <img src={process.env.PUBLIC_URL + '/images/feta2.jpg'} alt="feta2" style={{ width: "240px", height: "240px" }} />
          <div className="container5">
            <article>DIFFICULTY</article>
            <h3>FETA AND PEACH COUSCOUS</h3>
            <p>Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta...</p>
            <span>USER FULL NAME</span>
          </div>
        </div>

      </div>
    
    </div>
  );
}

export default PopularRecipes;