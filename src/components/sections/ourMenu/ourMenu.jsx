import React from 'react';
import './ourMenu.scss';

const OurMenu = () => {

  return (
    
    <div className="high-margin" id="section-menu">
       <h1>OUR MENU</h1>
       <h3>KNOW MORE</h3>
       
      <div className="columns-wrapper">
        
        <div className="col">
          <h1>STARTERS</h1>
          <div className="starter">
            <article>QUINOA CROQUETTAS</article>
            <p> Quinoa and chedar croquetas with aji rocotto & pineapple salsa (v)</p>
            <span>£4.95</span>

            <article>CHIFA CHICHARRONES</article>
            <p>Slow cooked, crispy pork belly with sweet soy sauce</p>
            <span>£6.95</span>

            <article>CALAMARES</article>
            <p>Crispy baby squid with pickled jalapeño miso salsa</p>
            <span>£6.95</span>
         </div>
        </div>

        <div className="col">
          <h1>MAIN COURSES</h1>
          <div className="main">
            <article>EL CLASICO</article>
            <p>Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn,red onion, coriander & plantain (gf)</p>
            <span>£8.95</span>
          
            <article>TIRADITO CALLAO</article>
            <p>Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies</p>
            <span>£8.95</span>
          </div>
        </div>
      
        <div className="col">
          <h1>SIDES</h1>
          <div className="side">
            <article>SUPER POLLO</article>
            <p>Marinated corn fed chicken pieces with rocotto salsa</p>
            <span>£4.95</span>

            <article>PATATAS FRITAS</article>
            <p>Sweet potato fries with aji rocotto mayonnaise (v)</p>
            <span>£3.95</span>
          </div>
        </div>

        <div className="col">
          <h1>DESSERTS</h1>
          <div className="dessert">
            <article>ICE CREAM</article>
            <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
            <span>£3.95</span>

            <article>TIRAMISU</article>
            <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
            <span>£3.95</span>

            <article>CHOCOLATE BROWNIE</article>
            <p>Lorem ipsum dolor sit amet salerma petrum sea</p>
            <span>£3.95</span>
         </div>
      </div>

    </div>
       

    </div>
  );
}

export default OurMenu;