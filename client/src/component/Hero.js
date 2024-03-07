import React, { useState } from "react";
import Container from "./Container";
import SelectPlaceholder from "./Select";
import { TextField } from "@mui/material";
import { Button } from "@mui/base";
import SendIcon from "@mui/icons-material/Send";

function Hero() {
  const [rent, setRent] = React.useState("BUY");
  const [category, setCategory] = useState("Apartments");
  const handleRent = (event) => {
    const {
      target: { value },
    } = event;
    setRent(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
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
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            sx={{ background: "white", outline: "white" }}
          />
          <Button variant="contained" endIcon={<SendIcon />}>
            Search
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Hero;
