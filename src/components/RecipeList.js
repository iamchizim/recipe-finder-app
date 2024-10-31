import React from "react";
import { Link } from "react-router-dom";
import LazyLoadImage from "./LazyLoadImage";
const RecipeList = ({ recipes, formatRecipeDescription }) => {
  return (
    <section>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <LazyLoadImage src={recipe.image} alt={recipe.title}/>
          <p>{recipe.title}</p>
          <Link to={`/RecipeDetails/${recipe.id}`} state={{ recipe }}>
            Read More
          </Link>
          
        </div>
      ))}
    </section>
  );
};

export default RecipeList;
