import React from "react";
import Container from "./Container";
import MultiCrousel from "./MultiCrousel";

function TopCities() {
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
  return (
    <div>
      <Container className={"flex justify-between py-20 gap-5 "}>
        <div className="left space-y-5 mt-4">
          <h2>Properties In Top Cities</h2>
          <p>
            Find the home of your dreams at the finest cities of India with the
            budget you prefer. Explore apartments, villas, plots and farmlands
            across the nation.
          </p>
        </div>
        <div className="shadow-md   w-[60%]">
          <MultiCrousel data={Featured} autoplay={true} />
        </div>
      </Container>
    </div>
  );
}

export default TopCities;
