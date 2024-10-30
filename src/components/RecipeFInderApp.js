import React, { useEffect } from "react";
import { useState, useContext } from "react";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";
import Pagination from "./Pagination";
import LoadingMessage from "./LoadingMessage";
import ErrorMessage from "./ErrorMessage";

const RecipeFinderApp = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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

  const indexOfLastPost = currentPage * recipesPerPage;
  const indexOfFirstPost = indexOfLastPost - recipesPerPage;
  const currentPosts = recipes.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section>
      <RecipeForm setQuery={setQuery} />
      {loading && <LoadingMessage />}
      {errorMessage && <ErrorMessage />}
      <RecipeList recipes={currentPosts} />
      <Pagination
        totalRecipes={recipes.length}
        recipesPerPage={recipesPerPage}
        paginate={paginate}
      />
    </section>
  );
};

export default RecipeFinderApp;
