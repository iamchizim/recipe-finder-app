import React from "react";
import { Link } from "react-router-dom";
import LazyLoadImage from "./LazyLoadImage";
const RecipeList = ({ recipes }) => {
  return (
    <section className="recipe-list">
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe.id}>
          <LazyLoadImage src={recipe.image} alt={recipe.title}/>
          <p className="recipe-card-title">{recipe.title}</p>
          <Link  to={`/RecipeDetails/${recipe.id}`} state={{ recipe }}>
           Read More
          </Link>
          
        </div>
      ))}
    </section>
  );
};

export default RecipeList;
