import React from "react";
import { Link } from "react-router-dom";

const SingleBottle = (props) => {
  const { strCategory, strDrinkThumb, strGlass, strInstructions, idDrink } =
    props.drink;

  return (
    <div className="border text-left py-3">
      <div>
        <img src={strDrinkThumb} alt="" />
      </div>
      <div className="text-left px-3 py-2 my-2">
        <h2 className="text-2xl font-semibold">{strGlass}</h2>
        <p>{strInstructions.slice(0, 100)}</p>
        <small>
          Catagory:{" "}
          <span className="text-green-500 font-semibold">{strCategory}</span>
        </small>
      </div>
      <Link
        to={`/cocktails/${idDrink}`}
        className="py-2 px-4 bg-red-500 ml-3 font-semibold text-gray-900 rounded-lg"
      >
        See More
      </Link>
    </div>
  );
};

export default SingleBottle;
