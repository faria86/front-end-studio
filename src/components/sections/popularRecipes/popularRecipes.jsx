import React from 'react';
import Slider from "react-slick";
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

import './popularRecipes.scss';

const PopularRecipes = () => {

  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 3,
    variableWidth: true
  };

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
        <Slider {...settings}>

          <div className="card" style={{ width: 371 }}>
            <div className='servings-big'>
              <h3 className='big'>4</h3>
              <h3 className='big'>SERVINGS</h3>
            </div>
            <div className='pink-box-toast'></div>
            <div className="right-arrow"></div>
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

          <div className="card" style={{ width: 250 }}>
            <div className='servings-small'>
                <h3 className='small'>2</h3>
                <h3 className='small'>SERVINGS</h3>
            </div>
            <div className='pink-box-pine'></div>
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

          <div className="card" style={{ width: 242, marginTop: 100 }}>
            <div className='servings-small'>
              <h3 className='small'>2</h3>
              <h3 className='small'>SERVINGS</h3>
            </div>
            <div className='pink-box-spinach'></div>
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

          <div className="card" style={{ width: 240 }}>
            <div className='servings-small'>
              <h3 className='small'>8</h3>
              <h3 className='small'>SERVINGS</h3>
            </div>
            <div className='pink-box-feta'></div>
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

          <div className="card" style={{ width: 240}}>
            <div className='servings-small'>
              <h3 className='small'>8</h3>
              <h3 className='small'>SERVINGS</h3>
            </div>
            <div className='pink-box-feta'></div>
            <div className="inner" >
              <img src={process.env.PUBLIC_URL + '/images/feta2.jpg'} alt="feta2" />
                <div className="text">
                  <article>DIFFICULTY</article>
                  <h3>FETA AND PEACH COUSCOUS</h3>
                  <p>Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta...</p>
                </div>
            </div> 
            <span>USER FULL NAME</span>
          </div>

        </Slider>
      </div>
    
    </div>
  );
}

export default PopularRecipes;