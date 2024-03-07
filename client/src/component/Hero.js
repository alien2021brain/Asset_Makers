import React, { useState } from "react";
import Container from "./Container";
import SelectPlaceholder from "./Select";
import { TextField } from "@mui/material";
import { Button } from "@mui/base";
import SendIcon from "@mui/icons-material/Send";
import { FcSearch } from "react-icons/fc";
import SingleCrousel from "./Crousel";
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
      price: "9000000",
      imgUrl:
        "https://media.istockphoto.com/id/483773209/photo/new-cozy-cottage.jpg?s=612x612&w=0&k=20&c=y1rwmoHBg-ZoE7L5WkIWjrTmwXofzqIbozTJyftDu1E=",
    },
    {
      key: 3,
      title: "Samanvaya Lotus Lea",
      description: "2455 Area Details 2021 Year Built",
      price: "9000000",
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
                name="search"
                value={search}
                className="h-full px-2"
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
    </>
  );
}

export default Hero;
