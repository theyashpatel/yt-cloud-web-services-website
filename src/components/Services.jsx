import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";

const Services = () => {
  return (
    <div name="services" className="w-full h-fit md:h-screen bg-slate-300">
      <div className="flex flex-col items-center justify-center max-w-screen-xl h-full px-3 py-12">
        <h2 className="text-5xl font-bold text-center">Services</h2>

        <p className="text-xl py-8 text-gray-600 text-center">
          At uttered there the late be bird answer, with more burned these my
          something craven. Startled usby my marvelled on.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-4">
          <div className="flex items-start p-4 bg-gray-900 text-white rounded-md">
            <div>
              <FaChevronCircleRight
                size={20}
                className="mt-3 mr-4 text-lightColor"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-lightColor pt-2 pb-4">
                Hosting
              </h3>
              <p className="text-lg">
                Pallid nothing made still thing nevermore burden all and, so i a
                suddenly wretch eagerly aidenn at, remember the only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
