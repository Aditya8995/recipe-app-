import { useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
// import SimillarRecipes from "../Components/SimillarRecipes";
import Details from "../Components/Details";

function Recipe() {
  const { id } = useParams();
  const [currentFood, setCurrentFood] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchInformation = async () => {
      const food = await fetchData(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=6ae5c4dd92494a398c145afad81af86c`
      );
      setCurrentFood(food);
    };
    fetchInformation();
  }, [id]);

  return (
    <div className="recipe">
      <Details
        content={content}
        setContent={setContent}
        currentFood={currentFood}
      />
      {/* <SimillarRecipes id={id} /> */}
    </div>
  );
}

export default Recipe;
