import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./Exploretypes.css";

function Exploretypes() {
  return (
    <main className="container">
      <div className="row text-center">
        <b>
          <h1 className="heading"> Explore by Property Types</h1>
        </b>
        <p>
          Handpicked properties at affordable prices. Choose the type you are
          looking for.
        </p>
        <div className="col-4">
          <div className="image-container">
            <div className="image-wrapper">
              <img src="/images.jpg" alt="Image" className="image" />
              <div className="overlay">
                <div className="text" > Flates<FontAwesomeIcon icon={faArrowRight} /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="image-container">
            <div className="image-wrapper">
              <img src="/villas1.jpg" alt="Image" className="image" />
              <div className="overlay">
                <div className="text">villas <FontAwesomeIcon icon={faArrowRight} /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="image-container">
            <div className="image-wrapper">
              <img src="/plotes1.jpg" alt="Image" className="image" />
              <div className="overlay">
                <div className="text">plotes <FontAwesomeIcon icon={faArrowRight} /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="image-container">
            <div className="image-wrapper">
              <img src="/row1.jpg" alt="Image" className="image" />
              <div className="overlay">
                <div className="text">Row Houses <FontAwesomeIcon icon={faArrowRight} /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="image-container">
            <div className="image-wrapper">
              <img src="/commercial.jpg" alt="Image" className="image" />
              <div className="overlay">
                <div className="text">Commerical Propertyes <FontAwesomeIcon icon={faArrowRight} /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="image-container">
            <div className="image-wrapper">
              <img src="/penthouse.jpg" alt="Image" className="image" />
              <div className="overlay">
                <div className="text">Pent Houses <FontAwesomeIcon icon={faArrowRight} /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="image-container">
            <div className="image-wrapper">
              <img src="/villas2.jpg" alt="Image" className="image" />
              <div className="overlay">
                <div className="text">villaments   <FontAwesomeIcon icon={faArrowRight} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Exploretypes;
