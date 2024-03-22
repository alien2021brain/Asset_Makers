import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "./Container";
import { IoMdLogOut } from "react-icons/io";
import { CiSaveDown2 } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "sonner";
import { signOutUserSuccess } from "../redux/userSlice";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
const variants2 = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [citieOpen, setOpenCities] = useState(false);
  const [propOpen, setOpenProp] = useState(false);
  const [citieOpenMobile, setOpenCitiesMobile] = useState(false);
  const [propOpenMobile, setOpenPropMoble] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [profile, setProfile] = useState(false);

  const cityDropdownRef = useRef(null);
  const propDropdownRef = useRef(null);
  const navigate = useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const handleCityClick = () => {
    setOpenCities(false);
    setOpenProp(false);
    navigate("/list");
  };

  const handleCategoryClick = () => {
    setOpenCities(false);
    setOpenProp(false);
    navigate("/list");
  };

  const handleOutsideClick = (event) => {
    if (
      cityDropdownRef.current &&
      !cityDropdownRef.current.contains(event.target) &&
      propDropdownRef.current &&
      !propDropdownRef.current.contains(event.target)
    ) {
      setOpenCities(false);
      setOpenProp(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Logout
  const handleLogout = () => {
    dispatch(signOutUserSuccess());
    navigate("/");
    toast.success("Logot Successful");
  };

  return (
    <>
      <Toaster richColors />
      <header
        className={`${
          active
            ? "bg-[#F7F7F8] text-slate-900 font-medium "
            : "bg-slate-900 text-[#F5E994]"
        } fixed top-0 left-0 right-0  transition-all  duration-1000 ease-in-out px-4 md:px-0 `}
        style={{ zIndex: 100 }}
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to="/">
            <img
              src={
                active
                  ? "/logo2.jpg"
                  : "https://assetmakers.com/wp-content/uploads/2019/07/Asset-Makers-Logo-Brightest.png"
              }
              className="h-12 object-contain"
            />
          </Link>
          <ul className="flex items-center gap-4">
            <Link to={"/"} className="hidden sm:inline  hover:underline">
              HOME
            </Link>
            <button
              className="relative md:block hidden"
              onClick={() => setOpenCities(!citieOpen)}
            >
              <li className="hidden md:flex items-center gap-2  hover:underline">
                <span> CITIES</span> <AiFillCaretDown />
              </li>
              <div
                className={`${
                  citieOpen ? "block" : "hidden"
                } transition-all duration-1000 absolute top-8 right-0 shadow-md bg-white p-10 space-y-5  rounded-md `}
                ref={cityDropdownRef}
              >
                <p className="hover:text-[#F5E994]" onClick={handleCityClick}>
                  Bangalore
                </p>
                <p className="hover:text-[#F5E994]" onClick={handleCityClick}>
                  Hyderabad
                </p>
                <p className="hover:text-[#F5E994]" onClick={handleCityClick}>
                  Tripui
                </p>
              </div>
            </button>
            <Link
              to="/"
              className="relative"
              onClick={() => setOpenProp(!propOpen)}
              ref={propDropdownRef}
            >
              <li className="hidden  hover:underline sm:flex items-center gap-2 relative">
                <span> PROPERTIES </span> <AiFillCaretDown />
                <div
                  className={`${
                    propOpen ? "block" : "hidden"
                  } transition-all duration-1000 absolute top-8 right-0 shadow-md bg-white p-10 space-y-5  rounded-md `}
                >
                  <p
                    className="hover:text-[#F5E994] text-black"
                    onClick={handleCategoryClick}
                  >
                    Apartments
                  </p>
                  <p
                    className="hover:text-[#F5E994] text-black"
                    onClick={handleCategoryClick}
                  >
                    Villas
                  </p>
                  <p
                    className="hover:text-[#F5E994] text-black"
                    onClick={handleCategoryClick}
                  >
                    Plots
                  </p>
                  <p
                    className="hover:text-[#F5E994] text-black"
                    onClick={handleCategoryClick}
                  >
                    Row Houses
                  </p>
                  <p
                    className="hover:text-[#F5E994] text-black"
                    onClick={handleCategoryClick}
                  >
                    Villaments
                  </p>
                  <p
                    className="hover:text-[#F5E994] text-black"
                    onClick={handleCategoryClick}
                  >
                    Commercial Properties
                  </p>
                  <p className="hover:text-[#F5E994] text-black">Pent Houses</p>
                </div>
              </li>
            </Link>
            <li className="hidden sm:inline   hover:underline">ABOUT US</li>
            <Link
              to={"/contact-us"}
              className="hidden sm:inline   hover:underline"
            >
              CONTACT US
            </Link>
            {currentUser ? (
              <button
                onClick={() => setProfile(!profile)}
                className="hover:underline hidden sm:inline relative"
              >
                <img
                  src={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt="profie"
                  className="h-[35px] w-[35px] rounded-full"
                />
                {profile && (
                  <motion.div className="absolute shadow-md rounded-lg p-5  space-y-3 bg-white right-0 ">
                    {currentUser.admin == 1 && (
                      <Link
                        className="flex items-center text-slate-900 gap-2 whitespace-nowrap"
                        to={"/admin"}
                      >
                        {" "}
                        <MdOutlineAdminPanelSettings size={32} />
                        Admin Panel
                      </Link>
                    )}
                    <Link
                      className="flex items-center text-slate-900 gap-2 whitespace-nowrap"
                      to={"/saved-list"}
                    >
                      <CiSaveDown2 size={32} /> Saved List
                    </Link>
                    <Link
                      className="flex items-center text-slate-900 gap-2 whitespace-nowrap"
                      to={"/my-list"}
                    >
                      <IoCreateOutline size={32} /> My List
                    </Link>

                    <button
                      className="flex items-center text-slate-900 gap-2 whitespace-nowrap"
                      onClick={handleLogout}
                    >
                      {" "}
                      <IoMdLogOut size={32} />
                      Logout{" "}
                    </button>
                  </motion.div>
                )}
              </button>
            ) : (
              <li>
                <Link
                  to="/sign-in"
                  className=" hover:underline hidden sm:inline "
                >
                  SIGN IN
                </Link>
              </li>
            )}

            {/* mobile menu */}
            <div className="block sm:hidden">
              <FaHamburger
                size={32}
                className={`${
                  active ? "text-slate-900" : "text-[#F7F7F8]"
                }text-slate-900  sm:inline hover:brightness-100 relative`}
                onClick={() => setMenuOpen(!menuOpen)}
              />
              <motion.div
                animate={menuOpen ? "open" : "closed"}
                variants={variants}
                className="list bg-white p-4 py-10 text-black shadow-xl flex flex-col gap-5 absolute top-16 w-[90%] right-8 rounded-md h-[90vh] "
              >
                {/* Properties */}

                <div
                  onClick={() => {
                    setOpenPropMoble(!propOpenMobile);
                    console.log(propOpenMobile);
                  }}
                  className="flex gap-2 items-center relative"
                >
                  <Link className=""> PROPERTIES </Link> <AiFillCaretDown />
                  <div
                    style={{ zIndex: 50 }}
                    className={`${
                      propOpenMobile == true
                        ? "bg-opacity-100 block"
                        : "opacity-0 hidden"
                    } transition-all duration-1000 absolute top-8 right-0 shadow-md bg-white p-10 space-y-5  rounded-md text-slate-900 flex flex-col gap-5 `}
                  >
                    <Link
                      className="hover:text-[#F5E994]  "
                      to={"/list"}
                      onClick={() => setMenuOpen(false)}
                    >
                      Apartments
                    </Link>
                    <Link
                      className="hover:text-[#F5E994] "
                      to={"/list"}
                      onClick={() => setMenuOpen(false)}
                    >
                      Villas
                    </Link>
                    <Link
                      className="hover:text-[#F5E994]"
                      onClick={handleCategoryClick}
                    >
                      Plots
                    </Link>
                    <Link
                      className="hover:text-[#F5E994]"
                      to={"/list"}
                      onClick={() => setMenuOpen(false)}
                    >
                      Row Houses
                    </Link>
                    <Link
                      className="hover:text-[#F5E994] "
                      to={"/list"}
                      onClick={() => setMenuOpen(false)}
                    >
                      Villaments
                    </Link>
                    <Link
                      className="hover:text-[#F5E994] "
                      to={"/list"}
                      onClick={() => setMenuOpen(false)}
                    >
                      Commercial Properties
                    </Link>
                    <Link
                      className="hover:text-[#F5E994] "
                      to={"/list"}
                      onClick={() => setMenuOpen(false)}
                    >
                      Pent Houses
                    </Link>
                  </div>
                </div>

                {/* Cities */}

                <Link
                  to="/"
                  className="relative text-slate-900"
                  // onClick={() => setOpenCities(!citieOpen)}
                >
                  <li className="  hover:underline flex items-center gap-2 relative text-slate-900">
                    <button
                      onClick={() => setOpenCitiesMobile(!citieOpenMobile)}
                      className="flex gap-2 items-center"
                    >
                      <li className=""> CITIES </li> <AiFillCaretDown />
                    </button>
                    <div
                      className={`${
                        citieOpenMobile
                          ? "bg-opacity-100 block"
                          : "opacity-0 hidden"
                      } transition-all duration-1000 absolute top-8 left-5 shadow-md text-slate-900 bg-white p-10 space-y-5  rounded-md  flex flex-col gap-5`}
                    >
                      <Link
                        className="hover:text-[#F5E994]"
                        to={"/list"}
                        onClick={() => setMenuOpen(false)}
                      >
                        Bangalore
                      </Link>
                      <Link
                        className="hover:text-[#F5E994]"
                        to={"/list"}
                        onClick={() => setMenuOpen(false)}
                      >
                        Hyderabad
                      </Link>
                      <Link
                        className="hover:text-[#F5E994]"
                        to={"/list"}
                        onClick={() => setMenuOpen(false)}
                      >
                        Tripui
                      </Link>
                    </div>
                  </li>
                </Link>
                <Link
                  className="hover:underline"
                  to={"/about-us"}
                  onClick={() => setMenuOpen(false)}
                >
                  ABOUT US
                </Link>
                <li className=" hover:underline">CONTACT US</li>
                <Link to="/sign-in" className=" hover:underline ">
                  SIGN IN
                </Link>
              </motion.div>
            </div>
          </ul>
        </div>
        {active && (
          <motion.div
            className=" shadow-md font-light bg-[#F7F7F8] hidden md:block"
            animate={active ? "open" : "closed"}
            variants={variants2}
          >
            {/* hr */}
            <hr className=" w-full bg-slate-900" />
            <Container className={"flex items-center justify-between"}>
              <Link to={"/list"}>Apartments</Link>
              <Link to={"/list"}>Villas</Link>
              <Link to={"/list"}>Plots</Link>
              <Link to={"/list"}>Row Houses</Link>
              <Link to={"/list"}>Villaments</Link>
              <Link to={"/list"}>Commercial Properties</Link>
              <Link to={"/list"}>Pent Houses</Link>
            </Container>
            {/* hr */}
            <hr className=" w-full bg-slate-900" />
          </motion.div>
        )}
      </header>
    </>
  );
}

export default Header;
