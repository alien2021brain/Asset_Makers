import React, { useState } from "react";
import Container from "./Container";
import SelectPlaceholder from "./Select";
import { TextField } from "@mui/material";
import { Button } from "@mui/base";
import SendIcon from "@mui/icons-material/Send";
import { FcSearch } from "react-icons/fc";
import SingleCrousel from "./Crousel";
import MultiCrousel from "./MultiCrousel";
import PropertyCard from "./PropertyCard";
import { GiVillage } from "react-icons/gi";
import { FaKeycdn } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import Exploretypes from "./Explore";
import { useNavigate } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import Lottie from "lottie-react";
import cityLottie from "../public/top-cities.json";
import cloufLottie from "../public/wave.json";

function Hero() {
  const [rent, setRent] = React.useState("BUY");
  const [category, setCategory] = useState("Apartments");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    minPrice: "",
    maxPrice: "",
    property: "",
    bedroom: "",
  });
  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  const handleRent = (event) => {
    const {
      target: { value },
    } = event;
    setRent(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const heroData = [
    {
      key: 1,
      title: "Samanvaya Lotus Lea",
      description: "2455 Area Details 2021 Year Built",
      price: "9000000",
      imgUrl: "/h1.jpg",
    },
    {
      key: 2,
      title: "Samanvaya Lotus Lea",
      description: "2455 Area Details 2021 Year Built",
      price: "1000000",
      imgUrl: "/h2.jpg",
    },
    {
      key: 3,
      title: "Samanvaya Lotus Lea",
      description: "2455 Area Details 2021 Year Built",
      price: "6000000",
      imgUrl: "/h3.jpg",
    },
  ];
  const appartments = [
    {
      key: 1,
      title: "Samanvaya Lotus Lea",
      description: "2455 Area Details 2021 Year Built",
      price: "9000000",
      imgUrl:
        "https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg",
    },
    {
      key: 2,
      title: "Samanvaya Lotus Lea",
      description: "2455 Area Details 2021 Year Built",
      price: "1000000",
      imgUrl:
        "https://media.istockphoto.com/id/483773209/photo/new-cozy-cottage.jpg?s=612x612&w=0&k=20&c=y1rwmoHBg-ZoE7L5WkIWjrTmwXofzqIbozTJyftDu1E=",
    },
    {
      key: 3,
      title: "Samanvaya Lotus Lea",
      description: "2455 Area Details 2021 Year Built",
      price: "6000000",
      imgUrl:
        "https://assets.architecturaldigest.in/photos/60083e76274aca243711c3a4/16:9/w_2560%2Cc_limit/ghaziabad-uttar-pradesh-homes-photos-1366x768.jpg",
    },
  ];
  const Featured = [
    {
      key: 1,
      title: "Samanvaya Lotus Lea",
      description: "2455 Area Details 2021 Year Built",
      price: "9000000",
      imgUrl: "/h1.jpg",
    },
    {
      key: 2,
      title: "Samanvaya Lotus Lea",
      description: "2455 Area Details 2021 Year Built",
      price: "1000000",
      imgUrl: "/h2.jpg",
    },
    {
      key: 3,
      title: "Samanvaya Lotus Lea",
      description: "2455 Area Details 2021 Year Built",
      price: "6000000",
      imgUrl: "/h3.jpg",
    },
  ];

  const handleCategory = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // const handleSearch
  const handleSearch = () => {
    const encodeFilter = encodeURIComponent(JSON.stringify(filters));
    navigate(`/list/${encodeFilter}`);
  };
  return (
    <>
      <section className=" relative featured-listings space-y-5 mt-5">
        <Lottie
          animationData={cloufLottie}
          loop={true}
          className="absolute top-0 left-0 right-0"
        />
        <Container className={"space-y-5  pt-64"}>
          <h2 className="text-center  ">Discover Our Featured Listings</h2>
          <p className="text-center ">
            A few properties you can buy with your eyes closed. Properties that
            are verified. Buy with confidence and 100% assurance.
          </p>
          <MultiCrousel data={Featured} details={true} />
        </Container>
      </section>
      {/* <Exploretypes /> */}

      <section className="top-cities my-10 ">
        <Container className={"space-y-3"}>
          <h2>Top Cities In India</h2>
          <p>Best places to live in India</p>
          <hr className="bg-[#FECE51] w-32 h-1" />

          <div className="places py-7 flex items-center gap-5">
            <div className="bg-white shadow-md rounded-md w-max  border px-8 h-40 ">
              <img
                src="/bangalore.png"
                className="object-cover w-full h-[60%] "
              />
              <h3 className="text-center">Bangalore</h3>
              <p className="text-center text-xs font-light">1000+ properties</p>
            </div>
            <div className="bg-white shadow-md rounded-md w-max  border px-8 h-40 ">
              <img src="/delhi.png" className="object-cover w-full h-[60%] " />
              <h3 className="text-center">Delhi</h3>
              <p className="text-center text-xs font-light">5000+ properties</p>
            </div>
            <div className="bg-white shadow-md rounded-md w-max  border px-8 h-40 ">
              <img src="/pune.png" className="object-cover w-full h-[60%] " />
              <h3 className="text-center">Pune</h3>
              <p className="text-center text-xs font-light">1000+ properties</p>
            </div>
            <div className="bg-white shadow-md rounded-md w-max  border px-8 h-40 ">
              <img
                src="/hyderabad.png"
                className="object-cover w-full h-[60%] "
              />
              <h3 className="text-center">Hyderabad</h3>
              <p className="text-center text-xs font-light">1000+ properties</p>
            </div>

            <div className="bg-white shadow-md rounded-md w-max  border px-8 h-40 ">
              <img
                src="/tripuati.jpg"
                className="object-cover w-full h-[60%] "
              />
              <h3 className="text-center">Triputati</h3>
              <p className="text-center text-xs font-light">1000+ properties</p>
            </div>
            <div className="bg-white shadow-md rounded-md w-max  border px-8 h-40 ">
              <img
                src="/bangalore.png"
                className="object-cover w-full h-[60%] "
              />
              <h3 className="text-center">Bangalore</h3>
              <p className="text-center text-xs font-light">1000+ properties</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Collection in Top Cities */}
      <section className="feature-collection my-10 ">
        <Container className={"space-y-3"}>
          <h2>Featured Collection in Top Cities</h2>
          <p>Curated & Handpicked Properties</p>
          <hr className="bg-[#FECE51] w-32 h-1" />

          <div className="collection flex items-center gap-5  ">
            <div className="w-1/3 h-72 rounded-md shadow-md p-4 overflow-hidden group relative">
              <img
                src="https://images.moneycontrol.com/static-mcnews/2023/10/BeFunky-collage-2023-10-19T142541.707.jpg"
                className="h-full w-full object-cover shadow-inner group-hover:blur-sm transition-all duration-1000 shadow-black  "
              />
              <div className="absolute bottom-5 w-[91%] p-4  bg-black opacity-55 group-hover:bg-transparent">
                <h3 className="text-center text-white">Bangalore</h3>
                <p className="text-center text-xs  text-white">
                  1000+ properties
                </p>
              </div>
            </div>
            <div className="w-1/3 h-72 space-y-3">
              <div className="h-1/2 w-full rounded-md shadow-md p-2 group relative">
                <img
                  src="https://qph.cf2.quoracdn.net/main-qimg-761eda8931ce2b553ae7618ae8424087.webp"
                  className="h-full w-full object-cover shadow-inner  group-hover:blur-sm transition-all duration-1000"
                />
                <div className="absolute bottom-2 w-[95%] p-1  bg-black opacity-55 group-hover:bg-transparent">
                  <h3 className="text-center text-white">Hyderabad</h3>
                  <p className="text-center text-xs  text-white">
                    12000+ properties
                  </p>
                </div>
              </div>
              <div className="h-1/2 w-full rounded-md shadow-md p-1 group relative">
                <img
                  src="https://homebazaar-blog.s3.ap-south-1.amazonaws.com/knowledge/wp-content/uploads/2023/05/11104405/FeatureImage_Top-10-Cheapest-Cities-In-India-20231-732x375.jpg"
                  className="h-full w-full object-cover shadow-inner shadow-black group-hover:blur-sm transition-all duration-1000"
                />
                <div className="absolute bottom-1 w-[97%] p-1  bg-black opacity-55 group-hover:bg-transparent">
                  <h3 className="text-center text-white">Triputai</h3>
                  <p className="text-center text-xs  text-white">
                    1000+ properties
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/3 h-72 rounded-md shadow-md p-4 group relative">
              <img
                src="https://homebazaar-blog.s3.ap-south-1.amazonaws.com/knowledge/wp-content/uploads/2023/05/12054434/Bangalore.jpg"
                className="h-full w-full object-cover shadow-inner shadow-black group-hover:blur-sm transition-all duration-1000"
              />
              <div className="absolute bottom-5 w-[91%] p-4  bg-black opacity-55 group-hover:bg-transparent">
                <h3 className="text-center text-white">Bangalore</h3>
                <p className="text-center text-xs  text-white">
                  1000+ properties
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* <section
        className="Best-Apartments
 py-8 "
      >
        <Container className={"space-y-5 "}>
          <h2 className="text-center text-2xl ">What sets us apart?</h2>

          <div className="grid grid-cols-3 gap-5">
            <motion.div className="card shadow-md p-4 text-center space-y-3 ">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                scale={{ delay: 2, duration: 5 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: "100%",
                }}
              >
                <GiVillage size={200} className="mx-auto text-blue-900" />
              </motion.div>

              <h2>WIDE RANGE OF PROPERTIES</h2>
              <p>
                Our customers have a wide range of options to choose from and
                they are all verified by our team.
              </p>
            </motion.div>
            <div className="card shadow-md p-4 text-center space-y-3">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                scale={{ delay: 3, duration: 5 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: "100%",
                }}
              >
                <FaKeycdn size={200} className="mx-auto text-blue-900" />
              </motion.div>

              <h2>SEAMLESS EXPERIENCE</h2>
              <p>
                We give our best to every client and make the process seamless,
                from choosing a property to confirming on it and moving in.
              </p>
            </div>
            <div className="card shadow-md p-4 text-center space-y-3">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                scale={{ delay: 3, duration: 5 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: "100%",
                }}
              >
                <AiOutlineTransaction
                  size={200}
                  className="mx-auto text-blue-900"
                />
              </motion.div>

              <h2>TRANSACTION SERVICES</h2>
              <p>
                Transaction services are offered with a holistic approach to
                ensure that business efficiency and cost savings are fulfilled
                for clients.
              </p>
            </div>
          </div>
        </Container>
      </section> */}
    </>
  );
}

export default Hero;
