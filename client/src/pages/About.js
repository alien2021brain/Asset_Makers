import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"; // Corrected the icon import

function About() {
  return (
    <div>
      <div className="head">
        <div className="lineone">
          <a>
            Asset Makers <FontAwesomeIcon icon={faChevronRight} />
          </a>
          <a className="num">
            About us <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
        <div className="linetwo">
          <h1> About us</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-11 ">
        <div className="grid grid-cols-2 gap-4">
          <div className="col">
            {/* Content for the first column */}
            <div className="content">
              <h1 className="text-xl font-bold">Who we are</h1>
              <p>
                Asset Makers marked the start of its journey in early 2008 and
                has been evolving ever since. The continuous support of happy &
                satisfied clients and some of the builders has fueled our
                growth.
              </p>
              <br></br>
              <p>
                We pride ourselves on our core values that guide us to success
                in everything we do.
              </p>

              <br></br>
              <p>
                Our core values are foundations that let us do what we love to
                do. We portray our values in every project because they are our
                drivers of success.
              </p>
              <br></br>
              <br></br>
              <p>
                The seller looks at the property as a whole figure of the amount
                they would receive. The buyer looks at what they and their
                family would call home in the future. We make sure we do justice
                to both.
              </p>
              <br></br>
              <p>
                {" "}
                <b>
                  "We bridge this gap by providing comprehensive guidance and
                  support to both parties, ensuring a seamless and satisfying
                  transaction for all involved."
                </b>
              </p>
            </div>
          </div>
          <div className="col">
            <div>
              <div className="cont2">
                <img
                  src="/founder images.jpg"
                  alt="Image"
                  className="images1"
                />
                <p>
                  <b>Mr. Kanchan Singh Bedi (Aman)</b>{" "}
                </p>
                <p className="foun">(Founder & Managing Director) </p>

                <img src="/found2.jpg" alt="Image" className="images1" />
                <p>
                  <b>Mr. Sunil Vora</b>
                </p>
                <p className="foun">(Founder & Managing Director) </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-11 ">
        <div className="grid grid-cols-2 gap-4">
          <div className="col">
            {/* Content for the first column */}
            <div className="content">
              <br></br>
              <br></br>
              <img
                src="/prestige-lakeside-habitat-01-1024x576.jpeg"
                alt="Image"
              />

              <br></br>
              <img src="/about2.jpg" alt="Image" />

              <br></br>

              <br></br>
            </div>
          </div>
          <div className="col">
            <div>
              <div className="cont2">
                <h1 className="text-xl font-bold">What makes us special?</h1>
                <p>
                  Hundreds of properties and thousands of clients have been
                  served so far. Some of our esteemed partners include, but are
                  not limited to Sobha, Brigade, Embassy, Purvankara, Prestige,
                  Salarpuria, Hiranandani, Total Environment, Godrej, DLF, etc.
                </p>{" "}
                <br></br>
                <p className="foun">
                  Expert in “Resale” transactions where complete handholding and
                  troubleshooting capabilities are required. Served hundreds of
                  NRI clients who are settled overseas. Dipstick due diligence
                  on cost, titles, and executing the Special Power of Attorney
                  with or without the presence of sellers are some of the KRAs
                  of what we do.
                </p>
                <br></br>
                <p>
                  The key differentiator at Asset Makers is, that transaction
                  services are offered with a holistic approach to ensure that
                  business efficiency and cost savings are fulfilled for
                  clients. What sets us apart is not what we do, but how we do
                  it – Innovative solutions that we have been providing have
                  helped us grow not just in terms of financials, but also in
                  terms of building trust with our clients and have resulted in
                  repeated assignments and referrals business to a large extent.
                  We take complete responsibility for executing the whole
                  transaction & extend end-to-end support to both buyers &
                  sellers. One of our core expertise is, executing the NRI sale
                  transactions wherein the sellers can sell their properties
                  with or without their presence till the deal execution. We
                  inosculate the right set of sellers and buyers with our
                  expertise which in turn results in a flawless experience and a
                  good reference to our business. Our team of solicitors takes
                  care of all legal compliance and we take the front seat to
                  navigate the whole transaction in a smooth manner with all
                  proper legalities.
                </p>
                <br></br>
                <p className="foun">
                  Marketing, Liaisoning, CRM, Financing, Restoration,
                  Refurbishment, Interiors, Fundraising etc are a few services
                  we excel at. By far, we are a one-stop solution to real estate
                  buyers and sellers{" "}
                </p>
              </div>
            </div>
          </div>
          <br></br>
        </div>
        <div className="last">
          <h1 className="text-xl font-bold">Why choose us?</h1>
        </div>
        <br></br>
        <div className="last2">
        <div class="card">
  
  <FontAwesomeIcon icon="fa-solid fa-forward" />
  
  <div class="card-content">
    <h3 class="card-title">Card Title</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id felis vel libero suscipit tincidunt.</p>
    <a href="#" class="btn">Read More</a>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default About;
