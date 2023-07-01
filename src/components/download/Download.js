import React from 'react';
import { FaLowVision, FaAd, FaAlgolia } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import "./Download.css";

const Download = () => {
    return (
        <section id="download">
        <div className="container download">
            <div className="u-title">
                    <h2>Our other promise</h2>
                    <p className="u-text-small u-text-light">
                        You will not see any adverts from us longer than 5 seconds.
                        We care about our customers time.
                    </p>
            </div>
            <IconContext.Provider value = {{ size: "30" }}> 
            <div className="download-icons">
                <div className="download-icon">
                    <FaLowVision />
                    <FaAd />
                    <FaAlgolia />      
                </div>
            </div>
            </IconContext.Provider>
        </div>
        </section>
      );
    };

export default Download