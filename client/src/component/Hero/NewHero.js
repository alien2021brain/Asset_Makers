import React from "react";
import "./newhero.css";

function NewHero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="top ">
          <div className="left">
            <h2>
              Find Your Perfect
              <br /> Property with Us
            </h2>
            <p>
              Discover Your Dream Property with Us - Where Perfect
              <br /> Meets Possible in Every Home.
            </p>
          </div>
          <div className="right">
            <div className="button">
              <div className="leftButton">Rent</div>
              <div className="rightButton">Buy</div>
            </div>
            <div className="box">
              <form className="space-y">
                <input placeholder="Type Keyword" />
                <select>
                  <option value="0">Select car:</option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                </select>
                <select>
                  <option value="0">Select car:</option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                </select>
              </form>
              <div className="button">
                <button className="leftButton">Filters</button>
                <button className="rightButton">Search Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewHero;
