import React from "react";
import "./Cocktail.css";

const Banner = (props) => {
  return (
    <>
      <div className="banner flex items-center justify-center">
        <input
          className="w-4/5 md:w-1/4 py-2 focus:outline-none border-t-0 border-r-0 text-white px-3 border-2 border-gray-200 bg-transparent"
          type="text"
          placeholder="Search here"
          onChange={props.inputChange}
        />
      </div>
    </>
  );
};

export default Banner;
