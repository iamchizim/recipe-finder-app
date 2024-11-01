import React, { useEffect } from "react";
import { useState } from "react";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";
import Pagination from "./Pagination";
import ErrorMessage from "./ErrorMessage";

const RecipeFinderApp = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 10; // Set the number of recipes to display per page

  const formatRecipeDescription = (description) => {
    return description.replace(/<\/?[^>]+(>|$)/g, "");
  };

  const fetchRecipe = async (query) => {
    const apiKey = "ff70a64e77bf4aaaa14b477a98e979ab";
    const number = 100; // Fetch up to 100 recipes
    try {
      setLoading(true);
      setErrorMessage(null);
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=true&apiKey=${apiKey}&number=${number}`
      );
      console.log("Response:", response);
      if (!response.ok) {
        throw new Error("Recipe not found");
      }
      const data = await response.json();
      setRecipes(data.results); // Set all recipes at once
    } catch (error) {
      setErrorMessage(error.message);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      setCurrentPage(1); // Reset to the first page when the query changes
      fetchRecipe(query); // Fetch all recipes based on the new query
    }
  }, [query]);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe); // Slice the recipes for the current page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="container">
      <RecipeForm setQuery={setQuery} />
      {loading && <div className="spinner"></div>}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <RecipeList recipes={currentRecipes}   formatRecipeDescription={formatRecipeDescription}/>
      <Pagination
        totalRecipes={recipes.length} // Use the total number of recipes fetched
        recipesPerPage={recipesPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
     
    </section>
  );
};

export default RecipeFinderApp;
