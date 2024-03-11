import React from "react";

function PropertyCard({ card }) {
  console.log(card, "cafrd");
  return (
    <div className="border h-72 rounded-md shadow-md relative overflow-hidden md:ml-5">
      <img src={card.imgUrl} className="object-cover h-full w-full " />
    </div>
  );
}

export default PropertyCard;
