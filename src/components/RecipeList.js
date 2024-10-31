import React from "react";

const RecipeList = ({ recipes, formatRecipeDescription}) => {

  return (
    <section>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <img src={recipe.image} alt={recipe.title}/>
          <p>{recipe.title}</p>
          <p>{formatRecipeDescription(recipe.summary)}</p>
          <p>Preparation time: {recipe.readyInMinutes} mins</p>
        </div>
      ))}
    </section>
  );
};

export default RecipeList;
