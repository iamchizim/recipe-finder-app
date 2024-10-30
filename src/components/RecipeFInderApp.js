import React, { useEffect } from "react";
import { useState, useContext } from "react";

const RecipeFinderApp = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [recipesPerPage] = useState(10);

  const fetchRecipe = async (query) => {
    try {
      setLoading(true);
      setErrorMessage(null);
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${ff70a64e77bf4aaaa14b477a98e979ab}`
      );
      if (!response.ok) {
        throw new Error("Recipe not found");
      }
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      setErrorMessage(error.message);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(
    (query) => {
      if (query) {
        fetchRecipe(query);
      }
    },
    [query]
  );

  return <section></section>;
};

export default RecipeFinderApp;
