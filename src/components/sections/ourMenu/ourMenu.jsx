import React from 'react';
import './ourMenu.scss';

const OurMenu = () => {
  return (
    
      <div className="high-margin-menu" id="section-menu">
        
        <div className='title-menu'>
            <div className='line'>
              <h2>OUR MENU</h2>
            </div>
            <h4>KNOW MORE</h4>
        </div>
        
        <div className="col-wrapper">
          
          <div className="col">
            <h2>STARTERS</h2>
            <div className="starter">
              <div className='dish'>
                <article>QUINOA CROQUETTAS</article>
                <p> Quinoa and chedar croquetas with aji rocotto & pineapple salsa (v)</p>
                <h4>£4.95</h4>
              </div>
              <div className='dish'>
                <article>CHIFA CHICHARRONES</article>
                <p>Slow cooked, crispy pork belly with sweet soy sauce</p>
                <h4>£6.95</h4>
              </div>
              <div className='dish'>
                <article>CALAMARES</article>
                <p>Crispy baby squid with pickled jalapeño miso salsa</p>
                <h4>£6.95</h4>
              </div>
            </div>
          </div>

          <div className="col">
            <h2>MAIN COURSES</h2>
            <div className="main">
              <div className='dish'>
                <article>EL CLASICO</article>
                <p>Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn,red onion, coriander & plantain (gf)</p>
                <h4>£8.95</h4>
              </div>
              <div className='dish'>
                <article>TIRADITO CALLAO</article>
                <p>Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies</p>
                <h4>£8.95</h4>
              </div>
            </div>
          </div>
        
          <div className="col">
            <h2>SIDES</h2>
            <div className="side">
              <div className='dish'>
                <article>SUPER POLLO</article>
                <p>Marinated corn fed chicken pieces with rocotto salsa</p>
                <h4>£4.95</h4>
              </div>
              <div className='dish'>
                <article>PATATAS FRITAS</article>
                <p>Sweet potato fries with aji rocotto mayonnaise (v)</p>
                <h4>£3.95</h4>
              </div>
            </div>
          </div>

          <div className="col">
            <h2>DESSERTS</h2>
            <div className="dessert">
              <div className='dish'>
                <article>ICE CREAM</article>
                <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
                <h4>£3.95</h4>
              </div>
              <div className='dish'>
                <article>TIRAMISU</article>
                <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
                <h4>£3.95</h4>
              </div>
              <div className='dish'>
                <article>CHOCOLATE BROWNIE</article>
                <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
                <h4>£3.95</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
  );
}

export default OurMenu;