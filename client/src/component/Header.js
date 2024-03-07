import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

function Header() {
  const [currentUser, setCurrentUser] = useState(false);
  const [citieOpen, setOpenCities] = useState(false);
  const [propOpen, setOpenProp] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenCities(false);
        setOpenProp(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const navigate = useNavigate();
  return (
    <header className="bg-[#054850] shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <img
            src="https://assetmakers.com/wp-content/uploads/2019/07/Asset-Makers-Logo-Brightest.png"
            className="h-12"
          />
        </Link>
        {/* <form
          //   onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form> */}
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-[#F5E994] hover:underline">
              HOME
            </li>
          </Link>
          <button
            to="/"
            onClick={() => setOpenCities(!citieOpen)}
            className="relative"
            ref={dropdownRef}
          >
            <li className="hidden sm:flex items-center gap-2  text-[#F5E994]  hover:underline ">
              <span> CITIES</span> <AiFillCaretDown />
            </li>
            <div
              className={`${
                citieOpen ? "block transition-all duration-1000" : "hidden"
              } transition-all duration-1000 absolute top-8 right-0 shadow-md bg-white p-10 space-y-5  rounded-md  `}
            >
              <p className="hover:text-[#F5E994]">Bangalore</p>
              <p className="hover:text-[#F5E994]">Hydrebad</p>
              <p className="hover:text-[#F5E994]">Tripui</p>
            </div>
          </button>
          <Link
            to="/"
            onClick={() => setOpenProp(!propOpen)}
            className="relative"
            ref={dropdownRef}
          >
            <li className="hidden  text-[#F5E994]  hover:underline sm:flex items-center gap-2 relative ">
              <span> PROPERTIES </span> <AiFillCaretDown />
              <div
                className={`${
                  propOpen ? "block transition-all duration-1000" : "hidden"
                } transition-all duration-1000 absolute top-8 right-0 shadow-md bg-white p-10 space-y-5  rounded-md  `}
              >
                <p className="hover:text-[#F5E994] text-black">Apartments</p>
                <p className="hover:text-[#F5E994] text-black">Villas</p>
                <p className="hover:text-[#F5E994] text-black">Plots</p>
                <p className="hover:text-[#F5E994] text-black">Row Houses</p>
                <p className="hover:text-[#F5E994] text-black">Villaments</p>
                <p className="hover:text-[#F5E994] text-black">
                  Commercial Properties
                </p>
                <p className="hover:text-[#F5E994] text-black">Pent Houses</p>
              </div>
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-[#F5E994]  hover:underline">
              ABOUT US
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-[#F5E994]  hover:underline">
              CONTACT US
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-[#F5E994]  hover:underline"> SIGN IN</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
