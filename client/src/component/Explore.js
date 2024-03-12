import React from "react";
import Container from "./Container";

function Exploretypes() {
  return (
    <main className="container mt-5 py-20 ">
      <Container>
        <div className="text-center space-y-5">
          <h2 className="text-3xl">Explore by Property Types</h2>

          <p>
            Handpicked properties at affordable prices. Choose the type you are
            looking for.
          </p>
          <div className="grid grid-cols-3 gap-5 ">
            <div className="image-container">
              <div className="image-wrapper">
                <img src="/admin-ajax (1).jpeg" alt="Image" className="image" />
                <div className="overlay">
                  <div className="text"> Flates</div>
                </div>
              </div>
            </div>

            <div className="image-container">
              <div className="image-wrapper">
                <img src="/admin-ajax (2).jpeg" alt="Image" className="image" />
                <div className="overlay">
                  <div className="text">villas</div>
                </div>
              </div>
            </div>

            <div className="image-container">
              <div className="image-wrapper">
                <img src="/admin-ajax (3).jpeg" alt="Image" className="image" />
                <div className="overlay">
                  <div className="text">plotes</div>
                </div>
              </div>
            </div>

            <div className="image-container">
              <div className="image-wrapper">
                <img src="/admin-ajax (4).jpeg" alt="Image" className="image" />
                <div className="overlay">
                  <div className="text">Commerical Propertyes</div>
                </div>
              </div>
            </div>

            <div className="image-container">
              <div className="image-wrapper">
                <img src="/admin-ajax (5).jpeg" alt="Image" className="image" />
                <div className="overlay">
                  <div className="text">Pent Houses</div>
                </div>
              </div>
            </div>

            <div className="image-container">
              <div className="image-wrapper">
                <img src="/admin-ajax (6).jpeg" alt="Image" className="image" />
                <div className="overlay">
                  <div className="text">villaments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Exploretypes;