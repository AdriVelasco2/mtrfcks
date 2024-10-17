import React from "react";
import SelectorNombres from "./select";
import Standard from "./standard"
const HolidayBanner = () => {
  return (
    <div className="flex flex-col  h-screen">
      <div
        className="bg-cover bg-no-repeat w-full bg-center"
        style={{
          backgroundImage:
            "url('')",
        }}
      >
        <h1 className="py-10 font-black text-8xl md:text-9xl bg-red-800 mix-blend-multiply uppercase text-center">
          MTR FCKS <br /> <p className="text-xl"> SNP GRAND SLAM</p>
        </h1>
      </div>
      <div className="p-10">
        <Standard />
      </div>
      <div className="p-10">
        <SelectorNombres/>

      </div>
    </div>
  );
};

export default HolidayBanner;
