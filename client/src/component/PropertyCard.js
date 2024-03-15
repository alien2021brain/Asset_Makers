import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { MdBathtub } from "react-icons/md";
import { LuScale3D } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
function PropertyCard({ card }) {
  console.log(card, "cafrd");
  return (
    <div className="border space-y-2 rounded-md shadow-md relative overflow-hidden md:ml-5 bg-white p-5  ">
      <img
        src={card.imgUrl}
        className="object-cover h-full w-full  rounded-s-md"
      />
      <div className="eye absolute top-8 right-8 bg-white p-2 rounded-lg opacity-75">
        <FaEye className="text-red-600" />
      </div>
      <p className="text-slate-900">{card.description}</p>
      <div className="flex items-center  gap-4">
        <div className="flex gap-1 items-center">
          <FaRupeeSign className="text-[#727272]" />
          <p>{card.price}</p>
        </div>
        <div className="flex gap-1 items-center">
          <FaCar className="text-[#727272]" size={22} />
          <p>2</p>
        </div>
        <div className="flex gap-1 items-center">
          <MdBathtub className="text-[#727272]" size={22} />
          <p>2</p>
        </div>
        <div className="flex gap-1 items-center">
          <LuScale3D className="text-[#727272]" size={22} />
          <p>80 sqft</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
