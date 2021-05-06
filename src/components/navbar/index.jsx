import React, { Component } from "react";
import './style.scss';
import { Link } from "react-scroll";

export default class Navbar extends Component {

    render() {
    return (
      <nav className="navbar" id="navbar">
        
        <div className="logo">
            <span>LOGO</span>
        </div>

        <div className="sections">
          <ul className="nav-items">
            <li className="nav-item">
                <Link
                    activeClass="active"
                    to="section5"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                      ABOUT
                </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                LOCATION
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                OUR MENU
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                RECIPES
              </Link>
            </li>
          </ul>
        </div>

        <div className="user">
            <ul>
                <li>CONTACT</li>
                <li>LOGIN</li>
            </ul>
        </div>
      </nav>
    );
  }
}