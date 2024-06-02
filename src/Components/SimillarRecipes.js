import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import Card from "./Card";
import FoodList from "./FoodList";

function SimillarRecipes({ id }) {
  const [simillarFood, setSimillarFood] = useState("");
  useEffect(() => {
    async function fetchSimillarFood() {
      const food = await fetchData(
        `https://api.spoonacular.com/recipes/${id}/similar?apiKey=6ae5c4dd92494a398c145afad81af86c`
      );
      setSimillarFood(food);
    }
    fetchSimillarFood();
  }, [id]);

  return (
    <div className="simillar-recipes">
      {/* <FoodList foods={simillarFood} /> */}
    </div>
  );
}

export default SimillarRecipes;
