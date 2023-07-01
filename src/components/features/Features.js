import React from 'react';
import "./Features.css"
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import imageFeatures from "../../assets/pexels-secret-garden-931162.jpg"
import Feature from './Feature';
import { featureList } from './data.js';

const Features = () => {
    return (
   <section id="features">
    <div className="container features">
        <div className="u-title">
            <BsFillBookmarkStarFill color="red" size={30}/>
                <h2>Our promise</h2>
                <p className="u-text-small u-text-dark">
                    We deliver in record time. With one thought you can have an 
                    imaginary bouquet delivered directly to your mind palace.
                </p>
        </div>
        <div className="features-content">
            <div className="features-left">
                <img src={imageFeatures} alt= "flower2"/>
            </div>
            <div className="features-right">
                {
                featureList.map((feature) => (
                    <Feature key={feature.id}
                    icon={feature.icon}
                    heading={feature.heading}
                    text={feature.text}/>
                ))}
               
            </div>
        </div>
    </div>
    </section>
      );
    };

export default Features