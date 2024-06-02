import React, { useState, useEffect } from "react";
import HeroImage from "../Images/smoothies.png";
import SearchRecipes from "../Components/SearchRecipes";
import FoodList from "../Components/FoodList";
import { fetchData } from "../utils/fetchData";

function Home() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const fetchFoods = async () => {
      const foodData = await fetchData(
        "https://api.spoonacular.com/recipes/random?apiKey=6ae5c4dd92494a398c145afad81af86c&number=12"
      );

      setFoods(foodData.recipes);
      // console.log(foods[0].diets);
    };
    fetchFoods();
  }, []);

  return (
    <div className="home">
      <div className="hero">
        <img src={HeroImage} alt="" />
        <h1>
          The best <br /> <span>Recipe</span> app
        </h1>
      </div>
      <SearchRecipes setFoods={setFoods} />
      <FoodList foods={foods} />
    </div>
  );
}

export default Home;
