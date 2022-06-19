import React from "react";

import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full h-fit text-white bg-gray-900">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <div className="px-4 py-12 text-center">
          <h2 className="text-5xl font-bold">Pricing</h2>
          <p className="text-xl py-8 text-gray-500">
            Startled that over nothing hear and or it into. Lenore cushioned
            angels something bust if from and for laden. Opened said nothing i
            entreating a shorn nothing that, word perched.He bird repeating
            moment that repeating mortals rapping prophet a with.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          {/* pricing card */}

          <PriceCard
            priceCategory="hobby"
            dollar="55"
            features={[
              {
                id: 1,
                title: "Feature One",
              },
              {
                id: 2,
                title: "Feature Two",
              },
              {
                id: 3,
                title: "Feature Three",
              },
            ]}
          />
          <PriceCard
            priceCategory="growth"
            dollar="69"
            features={[
              {
                id: 1,
                title: "* Feature One",
              },
              {
                id: 2,
                title: "+ Feature Two",
              },
              {
                id: 3,
                title: "Feature Three",
              },
            ]}
          />

          {/* pricing card end */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
