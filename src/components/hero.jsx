import React from "react";
import SelectorNombres from "./select";
import Standard from "./standard";
const HolidayBanner = () => {
  return (
    <div className="flex flex-col border-6 border-cyan-600 h-screen">
      <div
        className="bg-cover bg-no-repeat border-6 border-cyan-600 w-full bg-center"
        style={{
          backgroundImage: "url('')",
        }}
      >
        <div className="flex py-10 font-black justify-center items-center text-8xl md:text-9xl bg-white border-6 border-cyan-600 mix-blend-multiply uppercase text-center">
          <img
            src="img/logonlypadel.png"
            className="mix-blend-normal"
            alt="Logo Only Padel"
          />
        </div>
      </div>
      <div className="p-10">
        <Standard />
      </div>
    
    </div>
  );
};

export default HolidayBanner;
