import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function FoodList({ foods }) {
  return (
    <>
      <div className="food-list" id="foods">
        {foods.map((food) => (
          <div key={food.id} className="food">
            <Link style={{ textDecoration: "none" }} to={`/recipe/${food.id}`}>
              <Card image={food.image} title={food.title} />
            </Link>
          </div>
        ))}
      </div>
      ;
    </>
  );
}

export default FoodList;
