import React, { useRef, useEffect, useState } from 'react';
import './ourMenu.scss';

const OurMenu = () => {
  const ref = useRef();
  const [scrollPosition, setScrollPosition] = useState('');

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    setScrollPosition(offset)

    console.log(offset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    
      <div className="high-margin-menu" id="section-menu">
        <div className='borders'>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
        </div>
        
        <div className='title-menu'>
            <h2>OUR MENU</h2>
            <h4>KNOW MORE</h4>
        </div>
        
        <div className="col-wrapper" ref={ref}>
          
          <div className="col" style = {{transform: `translateY(-${scrollPosition}px)`, marginTop: 1059 }}>
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

          <div className="col" style = {{transform: `translateY(${scrollPosition}px)`, marginTop: -1109 }}>
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
        
          <div className="col" style = {{transform: `translateY(-${scrollPosition}px)`, marginTop: 1120 }}>
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

          <div className="col" style = {{transform: `translateY(${scrollPosition}px)`, marginTop: -1118 }}>
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