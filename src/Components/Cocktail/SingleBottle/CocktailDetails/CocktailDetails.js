import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CocktailDetails = () => {
  const [cocktailDetails, setCocktailDetails] = useState([]);
  const { cocktailId } = useParams();
  console.log(cocktailId);
  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
    )
      .then((res) => res.json())
      .then((data) => setCocktailDetails(data.drinks[0]));
  }, []);
  const { strDrinkThumb, strGlass, strInstructions, strCategory } =
    cocktailDetails;

  console.log(cocktailDetails);
  return (
    <div className="mx-10 py-6">
      <div className="w-1/3">
        <img height="400" src={strDrinkThumb} alt="" />
      </div>
      <h1 className="text-2xl font-semibold py-2">{strGlass}</h1>
      <p>{strInstructions}</p>
      <small>
        Catagory :{" "}
        <span className="text-green-600 font-semibold">{strCategory}</span>
      </small>
      <h3 className="text-xl font-semibold mt-4">Ingredients:</h3>
      <ul className="text-gray-600">
        <li>{cocktailDetails?.strIngredient1}</li>
        <li>{cocktailDetails?.strIngredient2}</li>
        <li>{cocktailDetails?.strIngredient3}</li>
        <li>{cocktailDetails?.strIngredient4}</li>
        <li>{cocktailDetails?.strIngredient5}</li>
        <li>{cocktailDetails?.strIngredient6}</li>
        <li>{cocktailDetails?.strIngredient7}</li>
        <li>{cocktailDetails?.strIngredient8}</li>
        <li>{cocktailDetails?.strIngredient9}</li>
        <li>{cocktailDetails?.strIngredient10}</li>
        <li>{cocktailDetails?.strIngredient11}</li>
        <li>{cocktailDetails?.strIngredient12}</li>
        <li>{cocktailDetails?.strIngredient13}</li>
        <li>{cocktailDetails?.strIngredient14}</li>
        <li>{cocktailDetails?.strIngredient15}</li>
      </ul>
    </div>
  );
};

export default CocktailDetails;
