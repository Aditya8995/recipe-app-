import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchData } from "../utils/fetchData";

function SearchRecipes({ setFoods }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  async function fetchSearchedFoods() {
    const searchedFoods = await fetchData(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=6ae5c4dd92494a398c145afad81af86c&query=${inputValue}&number=10`
    );
    setFoods(searchedFoods.results);
    // console.log(searchedFoods.results);
  }
  function handleClick() {
    fetchSearchedFoods();
  }
  return (
    <div className="search">
      <input
        onChange={handleChange}
        value={inputValue}
        type="text"
        placeholder="Search Recipes"
      />
      <button onClick={handleClick}>
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchRecipes;
