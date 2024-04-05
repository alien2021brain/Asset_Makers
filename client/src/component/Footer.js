import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineOtherHouses } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-[#1C1C1E] shadow-md text-[#F5E994]  py-10  w-full padingm  ">
      {/* <div className="grid md:grid-cols-4 max-w-6xl mx-auto p-3">
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
      </div> */}

      <Container className={""}>
        <div className=" flex items-center justify-between gap-5">
          <div className="left bg-[#EFB0B0] flex items-center p-5 rounded-md gap-3 py-8 relative">
            <img alt="profile" src="/p1.jpg" className="rounded-md" />
            <div className="space-y-2">
              <h2 className="font-bold">You need a house</h2>
              <p>
                Tell us your needs, we will give you thousands of suggestions
                for the dream home.
              </p>
            </div>
            <div className="absolute left-1/3 -bottom-7 bg-red-600 text-white p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <IoCallOutline className="font-bold" size={22} />|
                <span className="font-bold">Contact sellers</span>
              </div>
            </div>
          </div>
          <div className="right bg-[#EFB0B0] flex items-center p-5 py-8 rounded-md gap-3 relative">
            <img alt="profile" src="/p2.jpg" className="rounded-md" />
            <div className="space-y-2">
              <h2 className="font-bold">Sell your house</h2>
              <p>
                We will connect you to thousands of people who need to buy a
                home.
              </p>
            </div>
            <div className="absolute left-1/3 -bottom-7 bg-red-600 text-white p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <MdOutlineOtherHouses className="font-bold" size={22} />|
                <span className="font-bold">Sell Property</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <hr className="mt-10 text-[#FFFFFF]" />
      {/* down */}
      <Container className={"flex items-center justify-between py-8 "}>
        {/* div1 */}
        <div className="space-y-5">
          <h2 className="font-bold text-base text-white">Office Address</h2>
          <div>
            <p>Head office:</p>
            <p className="font-bold text-white text-sm">Jumeirah, Dubai, UAE</p>
          </div>
          <div>
            <p>Branch:</p>
            <p className="text-white text-sm">
              Reem island Addax tower Floor 45, offi in Abu Dhabi, UAE
            </p>
          </div>
          <hr />
          <p className="text-white text-sm">
            AL SAADA Bakery, Defence Road, Abu Dhabi, UAE
          </p>
        </div>
        {/* div2 */}
        <div className="space-y-5">
          <h2 className="font-bold text-base text-white">Contact Seller</h2>
          <div className="flex items-center gap-2">
            <img
              src="/india.png"
              alt="flg"
              className="rounded-full h-[40px] w-[40px]"
            />
            <div className="font-bold text-white text-sm">
              <p className="text-sm"> Jumeirah, Dubai, UAE</p>
              <p className="text-white text-sm "> (+91) 9243024730</p>
            </div>
          </div>
          <hr />
          <div className="flex items-center gap-2">
            <MdAddIcCall size={32} className="text-white" />
            <div className="font-bold text-white text-sm">
              <p className="text-sm">Hotline:</p>

              <p className="text-white text-sm "> (+91) 9243024730</p>
            </div>
          </div>
          <hr />
          <div className="flex items-center gap-2">
            <MdOutlineEmail size={32} className="text-white" />
            <div className="font-bold text-white text-sm">
              <p className="text-sm"> Email:</p>
              <a
                className="text-white text-sm "
                target="_blank"
                href="mailto:info@assetmakers.com"
              >
                {" "}
                info@assetmakers.com
              </a>
            </div>
          </div>
        </div>
        {/* div3 */}
        <div className="space-y-5">
          <h2 className="font-bold text-base text-white">Our Company</h2>
          <div className="flex items-center gap-2">
            <FaChevronRight className="text-red-600" />
            <p>Property For Sale</p>
          </div>

          <div className="flex items-center gap-2">
            <FaChevronRight className="text-red-600" />
            <p>About Us</p>
          </div>

          <div className="flex items-center gap-2">
            <FaChevronRight className="text-red-600" />
            <p>Terms Of Use</p>
          </div>
          <div className="flex items-center gap-2">
            <FaChevronRight className="text-red-600" />
            <p>Privacy Policy</p>
          </div>
          <div className="flex items-center gap-2">
            <FaChevronRight className="text-red-600" />
            <p>Contact Us</p>
          </div>
        </div>
        {/* div4*/}
        <div className="space-y-5">
          <h2 className="font-bold text-base text-white">Newsletter</h2>

          <p className="text-sm text-white">
            Sign up to receive the latest articles
          </p>

          <input
            className="border bg-white text-black p-4 rounded-lg placeholder:text-black/50"
            placeholder="your email address"
          />
          <button className="  gap-2 flex items-center justify-center p-4 border shadow-md w-full rounded-md">
            Sign Up
            <FaArrowRight />
          </button>
        </div>
      </Container>
      <p className="text-white flex justify-center mt-8">
        &copy; 2021 Your Company Name. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
