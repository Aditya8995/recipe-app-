import React from "react";
import Card from "../Components/Card";

function Details({ content, setContent, currentFood }) {
  return (
    <div className="details">
      <Card
        image={currentFood.image}
        title={currentFood.title}
        className="details-card"
      />
      <div className="info">
        <div className="buttons">
          <button
            onClick={() => {
              if (content !== "ingredient") setContent("ingredient");
              else setContent("");
            }}
          >
            Ingredients
          </button>
          <button
            onClick={() => {
              if (content !== "recipe") setContent("recipe");
              else setContent("");
            }}
          >
            Recipe
          </button>
        </div>
        <ol type="1" className="content">
          {content == "recipe" || content == "ingredient" ? (
            content == "recipe" ? (
              currentFood.analyzedInstructions[0].steps.map(
                (instruction, index) => <li key={index}>{instruction.step}</li>
              )
            ) : (
              currentFood.extendedIngredients.map((ingredient, index) => (
                <li key={index} style={{ textTransform: "capitalize" }}>
                  {ingredient.name}
                </li>
              ))
            )
          ) : (
            <></>
          )}
        </ol>
      </div>
    </div>
  );
}

export default Details;
