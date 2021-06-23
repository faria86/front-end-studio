import React from 'react';
import './popularRecipes.scss';

const PopularRecipes = ({ id }) => {

  return (
    <div className="high-margin-recipes" id="section-recipes">
      
      <div className="title">
        <div className="title-left">
          <h2>POPULAR</h2> 
          <h3>RECIPES</h3>
          <h4>SEE ALL</h4>
        </div>

        <div className="title-right">
          <p>DO YOU WANT TO SHARE YOUR OWN RECIPE?</p>
          <h4>SEND IT NOW</h4>
        </div>
      </div>
        

      <div className="scrolling-wrapper">
        
        <div className="card">
          <div className="inner">
            <img src={process.env.PUBLIC_URL + '/images/toast.jpg'} alt="toast" />
            <div className="text">
              <article>DIFFICULTY</article>
              <h3>CHARRED BROCCOLI & CHEAT’S VEGGIE<br></br> ROMESCO TOAST</h3>
              <p>Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…</p>
            </div>
          </div>
          <span>USER FULL NAME</span>
        </div>

        <div className="card">
          <div className="inner">
            <img src={process.env.PUBLIC_URL + '/images/pineapple.jpg'} alt="pine" />
            <div className="text">
              <article>DIFFICULTY</article>
              <h3>PINEAPPLE FRUIT SALAD WITH FRESH CREAM</h3>
              <p>The pineapple juice is the star of the dressing and what gives it such a refreshing and sweet taste. Pineapple juice is kno</p>
            </div>
          </div>
          <span>USER FULL NAME</span>
        </div>

        <div className="card">
          <div className="inner">
            <img src={process.env.PUBLIC_URL + '/images/cheese.jpg'} alt="cheese" />
            <div className="text">
              <article>DIFFICULTY</article>
              <h3>CHEESE, SPINACH &<br></br> MUSHROOM STUFFED CHI…</h3>
              <p>Amp up this dinner party classic by stuffing three types of cheese, spinach and mushroom into the chicken…</p>
            </div>
          </div>
          <span>USER FULL NAME</span>
        </div>

        <div className="card">
          <div className="inner">
            <img src={process.env.PUBLIC_URL + '/images/feta1.jpg'} alt="feta1"/>
            <div className="text">
              <article>DIFFICULTY</article>
              <h3>FETA AND PEACH COUSCOUS</h3>
              <p>Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta...</p>
            </div>
          </div>  
          <span>USER FULL NAME</span>
        </div>

        <div className="card">
          <div className="inner">
            <img src={process.env.PUBLIC_URL + '/images/feta2.jpg'} alt="feta2" />
              <div className="text">
                <article>DIFFICULTY</article>
                <h3>FETA AND PEACH COUSCOUS</h3>
                <p>Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta...</p>
              </div>
          </div> 
          <span>USER FULL NAME</span>
        </div>
        
      </div>
    
    </div>
  );
}

export default PopularRecipes;