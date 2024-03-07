import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function SingleCrousel({ data }) {
  console.log("dat", data);
  return (
    <Carousel autoPlay={true} showStatus={false}>
      {data.map((item) => (
        <div className="md:h-[400px]" key={item.id}>
          <img src={item.imgUrl} className="object-contain" />
        </div>
      ))}
    </Carousel>
  );
}

export default SingleCrousel;
