import React from "react";
import { useState } from "react";

const RecipeForm = ({ setQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setQuery(inputValue.trim());
      setInputValue("");
    }
  };
  
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          placeholder="Type in meal"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default RecipeForm;
