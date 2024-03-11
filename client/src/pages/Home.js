import React from "react";
import Hero from "../component/Hero";
import EnquiryForm from "../component/EnquiryForm";
import Clients from "./Clients";
import Patners from "../component/OurPatners";

function Home() {
  return (
    <div className="">
      <Hero />
      <EnquiryForm />
      <Clients />
      <Patners />
    </div>
  );
}

export default Home;
