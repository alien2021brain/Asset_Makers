import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { FcInfo } from "react-icons/fc";
import { motion } from "framer-motion";

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
            <motion.div
              animate={{ color: "#fcfeff" }}
              className="space-y-5 text-black text-justify"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 2 }}
                className="font-bold text-3xl text-white"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 4 }}
                className="text-white"
              >
                {item.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 6 }}
                className="font-bold text-xl text-white"
              >
                {item.price}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 8, stiffness: 500 }}
              >
                <motion.button
                  whileHover={{ scale: 1.5 ,textShadow:"0px 0px 8px #fcfeff",boxShadow:"0px 0px 8px #fcfeff"}}
                  className="flex items-center gap-2 border p-2 rounded-md shadow-md"
                >
                  {" "}
                  <Link> View Details</Link>
                  <FcInfo size={26} />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default SingleCrousel;
