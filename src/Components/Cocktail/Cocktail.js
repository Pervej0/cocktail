import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import "./Cocktail.css";
import SingleBottle from "./SingleBottle/SingleBottle";

const Cocktail = () => {
  const [value, setValue] = useState("");
  const [drinks, setDrinks] = useState([]);

  const inputChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
      .then((res) => res.json())
      .then((data) => setDrinks(data.drinks))
      .catch((error) => console.log(error));
  }, [drinks]);

  return (
    <section>
      <Banner inputChange={inputChange} />
      <div className="min-h-screen">
        <div className="grid grid-cols-4 gap-3 my-8 mx-8">
          {drinks?.map((item) => (
            <SingleBottle drink={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cocktail;
