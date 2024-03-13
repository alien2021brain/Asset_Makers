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
import { motion, useScroll } from "framer-motion";
function Hero() {
  const [rent, setRent] = React.useState("BUY");
  const [category, setCategory] = useState("Apartments");
  const [search, setSearch] = useState("");
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

  const handleCategory = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      <div className="bg-[#054850] text-white ">
        <Container>
          <form className="inputshero flex items-center gap-10">
            <SelectPlaceholder
              personName={rent}
              setPersonName={setRent}
              handleChange={handleRent}
            />
            <SelectPlaceholder
              personName={category}
              setPersonName={setCategory}
              handleChange={handleCategory}
            />
            <div className="search flex items-center bg-white border h-[52px] rounded-md mt-3 w-[320px] justify-between overflow-hidden">
              <input
                name="search text-black"
                value={search}
                className="h-full px-2 text-black" // Added text-black class here
                placeholder="Search..."
              />
              <button className="bg-blue-600 text-white flex items-center h-full px-2 w-full">
                <p>Search</p>
                <FcSearch size={32} />
              </button>
            </div>
          </form>
        </Container>
      </div>
      <SingleCrousel data={heroData} />

      <section className="featured-listings space-y-5">
        <Container className={"space-y-5 "}>
          <h2 className="text-center text-2xl ">
            Discover Our Featured Listings
          </h2>
          <p className="text-center ">
            A few properties you can buy with your eyes closed. Properties that
            are verified. Buy with confidence and 100% assurance.
          </p>
          <MultiCrousel data={Featured} />
        </Container>
      </section>
      <Exploretypes />
      <section
        className="Best-Apartments
 py-8 bg-[#F0F4F7]"
      >
        <Container className={"space-y-5 "}>
          <h2 className="text-center text-2xl ">The Best Apartments</h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 15, stiffness: 500 }}
            className="grid grid-cols-3 "
          >
            {appartments.map((item) => (
              <PropertyCard card={item} />
            ))}
          </motion.div>
        </Container>
      </section>
      <section
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
      </section>
    </>
  );
}

export default Hero;
