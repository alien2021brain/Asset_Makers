import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { FcInfo } from "react-icons/fc";

function SingleCrousel({ data }) {
  console.log("dat", data);
  return (
    <Carousel autoPlay={true} showStatus={false}>
      {data.map((item) => (
        <div className="md:h-[600px] relative" key={item.id}>
          <img
            src={item.imgUrl}
            className="object-contain"
            style={{ zIndex: 1 }}
          />
          <div className="absolute  bottom-44 left-16" style={{ zIndex: 2 }}>
            <div className="space-y-5 text-white text-justify">
              <h2 className="font-bold text-3xl text-white">{item.title}</h2>
              <p className="text-white">{item.description}</p>
              <p className="font-bold text-xl text-white">{item.price}</p>

              <button className="flex items-center gap-2 border p-2 rounded-md shadow-md">
                {" "}
                <Link> View Details</Link>
                <FcInfo size={26} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default SingleCrousel;
