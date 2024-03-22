import { Link } from "react-router-dom";
import "./card.scss";

import { useState } from "react";
import DialogProperty from "./DialogProperty";

function Card({ item }) {
  console.log(item, "hii");
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <DialogProperty
        open={open}
        setOpen={setOpen}
        item={item}
        handleClose={handleClose}
      />
      <div className="cardProperty flex gap-7">
        <Link to={`/${item.id}`} className="imageContainer">
          <img src={item.img} alt="" />
        </Link>
        <div className="textContainer">
          <h2 className="title">
            <Link to={`/${item.id}`}>{item.title}</Link>
          </h2>
          <p className="address">
            <img src="/pin.png" alt="" />
            <span>{item.address}</span>
          </p>
          <p className="price">$ {item.price}</p>
          <div className="bottom">
            <div className="features">
              <div className="feature">
                <img src="/bed.png" alt="" />
                <span>{item.bedroom} bedroom</span>
              </div>
              <div className="feature">
                <img src="/bath.png" alt="" />
                <span>{item.bathroom} bathroom</span>
              </div>
            </div>
            <div className="icons">
              <Link to={"/saved-list"} className="icon">
                <img src="/save.png" alt="" />
              </Link>
              <div className="icon" onClick={() => setOpen(true)}>
                <img src="/chat.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
