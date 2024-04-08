import { Link } from "react-router-dom";
import "./card.scss";

import { useState } from "react";
import DialogProperty from "./DialogProperty";
import { useMutation } from "@tanstack/react-query";
import { toast, Toaster } from "sonner";
import axios from "axios";
import { queryClient } from "../..";

function Card({ item }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const sendMessage = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL}/message/add`,
        data
      );
      return res.data;
    } catch (error) {
      toast.error("Internal error at Sending Message");
      console.error(error);
    }
  };

  const mutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: (success) => {
      toast.success(success);
      queryClient.invalidateQueries({ queryKey: "messages" });
      setOpen(false);
    },
    onError: (error) => {
      console.log(error);
      toast.error("Internal error at Sending Message");
    },
  });

  return (
    <>
      <Toaster richColors />
      <DialogProperty
        open={open}
        setOpen={setOpen}
        item={item}
        handleClose={handleClose}
        mutation={mutation}
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
