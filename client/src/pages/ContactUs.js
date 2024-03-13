import React from "react";
import Container from "../component/Container";
import EnquiryForm from "../component/EnquiryForm";
import { TextField } from "@mui/material";
import { FcCallback } from "react-icons/fc";
import { FaMapLocation } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import Lottie from "lottie-react";
import Contactus from "../public/contact-us.json";
import { motion, useScroll } from "framer-motion"

function ContactUs() {
  return (
    <section>
      <Container className={" py-20 space-y-10"}>
        <Lottie animationData={Contactus} loop={true} />;
        <h2 className="text-3xl ">ContactUs</h2>
        <div className="content-wraper md:flex items-start block justify-between mt-10">
          <div className="left  space-y-5">
            <p className="text-2xl ">Corporate Office</p>
            <p>
              We deal with properties in many cities and are headquartered in
              Bangalore, Karnataka, India. You can get in touch with us for any
              query through our address mentioned below. To contact us
              instantly, you can choose to call us or email us.{" "}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-5">
              <motion.div  className="flex items-center gap-3">
                <motion.div whileHover={{ scale: 1.5 ,textShadow:"0px 0px 8px #fcfeff",boxShadow:"0px 0px 8px #0c61c9",borderRadius:"50%"}}><FcCallback size={52} /></motion.div>
                
                <p>
                  Call us
                  <br />
                  +91 9243024730
                  <br />
                  +91 7022856908
                </p>
              </motion.div>
              <div className="flex items-center gap-3">
                <motion.div  whileHover={{ scale: 1.5 ,textShadow:"0px 0px 8px #fcfeff",boxShadow:"0px 0px 8px #0c61c9",borderRadius:"25%"}}><FaMapLocation size={52} className="text-[#2196F3]" /></motion.div>
                
                <p>
                  #02, Level 5, Dhruti Arcade, Insight
                  <br /> Academy Lane, Marathalli, Bangalore, 560103
                </p>
              </div>
              <div className="flex items-center gap-3">
                <motion.div whileHover={{ scale: 1.5 ,textShadow:"0px 0px 8px #fcfeff",boxShadow:"0px 0px 8px #0c61c9",borderRadius:"25%"}}> <FaMailBulk size={52} className="text-[#2196F3]" /></motion.div>
               
                <p>
                  Have any Questions?
                  <br />
                  <a className="outline-none"> info@assetmakers.com</a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <motion.div whileHover={{ scale: 1.5 ,textShadow:"0px 0px 8px #fcfeff",boxShadow:"0px 0px 8px #0c61c9",borderRadius:"25%"}}><FaMailBulk size={52} className="text-[#2196F3]" /></motion.div>
                
                <p>
                  Monday — Friday
                  <br />
                  9:30 AM — 8:00 PM
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3888.4656838973183!2d77.69882092507596!3d12.942025937370644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%2302%2C%20Level%205%2C%20Dhruti%20Arcade%2C%20Insight%20Academy%20Lane%2C%20Marathalli%2C%20Bangalore%2C%20560103!5e0!3m2!1sen!2sin!4v1710156581285!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style={{
                  width: "100%",
                  height: "600",
                }}
                className="col-span-2 -ml-5"
              ></iframe>
            </div>
          </div>

          <div className="   flex flex-col gap-14 w-full shadow-md border p-5 rounded-md ">
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Phone No"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Email ID"
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              className="hover:border-blue-200 hover:border"
            />
            <motion.button  whileHover={{ scale: 1.1 ,textShadow:"0px 0px 8px #fcfeff",boxShadow:"0px 0px 8px #0c61c9"}} className="border bg-violet-500 py-3 rounded-md text-white">
              Submit
            </motion.button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactUs;
