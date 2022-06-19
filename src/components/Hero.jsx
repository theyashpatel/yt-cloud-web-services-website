import React from "react";
import hero from "../assets/hero.jpg";
import GreenBtn from "./GreenBtn";

const Hero = () => {
  return (
    <div
      name="home"
      className="flex flex-col justify-between w-full h-screen bg-gray-900 text-white text-center md:text-left"
    >
      <div className="grid md:grid-cols-2 max-w-screen-xl mx-auto px-3">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl text-gray-500">
            Cheapest Hosting on Planet Earth
          </p>
          <h1 className="pt-1 pb-6 text-5xl md:text-7xl font-bold">
            <span className="text-lightColor">ONNN</span> Web Services
          </h1>
          <p className="text-base font-light text-gray-500">
            Explore cushions he with fowl was nodded, merely suddenly thee bore
            nevermore. My bust sitting the ease of the will.
          </p>
          <GreenBtn
            title="sign up"
            className="capitalize py-3 px-6 sm:w-8/12 my-8"
          />
        </div>

        <div className="flex items-center justify-center">
          <img src={hero} alt="hero" className="w-3/4 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
