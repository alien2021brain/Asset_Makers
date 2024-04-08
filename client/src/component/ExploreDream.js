import React from "react";

function ExploreDream() {
  return (
    <div className="bg-white flex w-screen overflow-hidden ">
      <img src="/exploreleft.jpg" alt="exolreleft" className=" w-1/2" />
      <div className=" bg-[#EFB0B0]  py-14 px-3 pr-5 ">
        <h2 className="font-bold text-4xl leading-10 ">
          {" "}
          Explore Your Dream Home or
          <br /> Boost Your Investment Portfolio
          <br /> Today - Your Future Awaits!
        </h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          tristique metus
        </p>
        <div className="flex gap-5 mt-10">
          <div className="card bg-white h-max shadow-md pb-5 w-60 rounded-lg">
            <div className="h-1/2 w-full">
              <img src="/pp2.jpg" className="h-full" />
            </div>
            <div className="p-3">
              <h4>Darlene Robertson</h4>
              <p>Realtor</p>
              <h3>Contact seller</h3>
            </div>
          </div>
          {/* 2 */}
          <div className="card bg-white h-max shadow-md pb-5 w-60 rounded-lg">
            <div className="h-1/2 w-full">
              <img src="/pp2.png" className="h-full" />
            </div>
            <div className="p-3">
              <h4>Darlene Robertson</h4>
              <p>Realtor</p>
              <h3>Contact seller</h3>
            </div>
          </div>

          {/* 2 */}
          <div className="card bg-white h-max shadow-md pb-5 w-60 rounded-lg">
            <div className="h-1/2 w-full">
              <img src="/pp2.png" className="h-full" />
            </div>
            <div className="p-3">
              <h4>Darlene Robertson</h4>
              <p>Realtor</p>
              <h3>Contact seller</h3>
            </div>
          </div>
        </div>
        <div className="flex items-center ml-5 gap-5 mt-5">
          <hr className="h-1.5 w-10 bg-red-600/50 rounded-xl" />
          <hr className="h-1.5 w-10 bg-red-600 rounded-xl" />
          <hr className="h-1.5 w-10 bg-red-600/50 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default ExploreDream;
