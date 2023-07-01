import React from 'react';
import "./Header.css";
import imageHeader from "../../assets/pexels-sl-wong-1023953.jpg"
import Button from '../UI/button/Button';
import '../UI/button/Button.css';
import  {IoIosFlower} from "react-icons/io";

const Header = () => {
    return (
        <section id="header">
            <div className="container header">
                <div className="header-left">
                    <h1>
                        <span>The only place</span>
                        <span>to buy flowers</span>
                        <span>beyond your imagination</span>
                    </h1>
                
                <p className="u-text-small u-text-light">
                    Flowers are very pretty and smell nice. 
                    Buy them for your friends, family, and loved ones.
                    But not from here, because these flowers are 100%
                    imaginary.
                </p>
                <div className="header-cta">
                    <Button 
                    text={"Get Started"} 
                    btnClass= {"btn-dark"} 
                    href={"#"}>
                    </Button>
                    <Button 
                    text={"Get Started"} 
                    btnClass= {"btn-light"} 
                    href={"#"}>
                    </Button>
                </div>
                </div>
                <div className="header-right">
                    <img src={imageHeader} 
                    alt="imageHeader" />
                </div>
            </div> 
            <div className="floating-icon">
                <a href="#features">
                    <IoIosFlower color="#fff" size={25} className="flower" />
            </a>
            </div>
        </section>
      );
    };
    

export default Header