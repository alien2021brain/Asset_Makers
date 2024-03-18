import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-slate-900 shadow-md text-[#F5E994]  py-10  w-full padingm  ">
      <div className="grid md:grid-cols-4 max-w-6xl mx-auto p-3">
        <div className="1 space-y-5 mr-10  ">
          <h2 className="text-[#F5E994]">ABOUT</h2>
          <p className="text-[#F5E994]">
            We are real estate professionals that thrive to fill the gap between
            property sellers and buyers. We offer quality services at unbeatable
            prices to ensure client satisfaction.
          </p>
        </div>
        <div className="2 space-y-5">
          <h2 className="text-[#F5E994]">CONTACT INFO</h2>
          <div className="space-y-3">
            <p className="text-[#F5E994]">+91 9243024730</p>
            <p className="text-[#F5E994]">+91 9243024730</p>
            <a target="_blank" href="mailto:info@assetmakers.com">
              info@assetmakers.com
            </a>
            <p className="text-[#F5E994]">
              #02, Level 5, Dhruti Arcade,
              <br />
              Insight Academy Lane,
              <br />
              Marathalli, Bangalore 560103.
            </p>
          </div>
        </div>
        <div className="3 space-y-5">
          <h2 className="text-[#F5E994]">Properties</h2>
          <div className="space-y-3 flex flex-col">
            <Link to={"/"}>Apartments</Link>
            <Link to={"/"}>Villas</Link>
            <Link to={"/"}>Row Houses</Link>
            <Link to={"/"}>Plot</Link>
            <Link to={"/"}>Commercial Properties</Link>
          </div>
        </div>
        <div className="4 space-y-5">
          <h2 className="text-[#F5E994]">Quick Links</h2>
          <div className="space-y-3 flex flex-col">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>About Us</Link>
            <Link to={"/"}>Contact US</Link>
          </div>
        </div>
      </div>
      <p className="text-[#F5E994] flex justify-center mt-8">
        &copy; 2021 Your Company Name. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
