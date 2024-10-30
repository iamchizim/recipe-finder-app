import React from "react";

const RecipeList = ({ recipes }) => {
  return (
    <section>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <img src={recipe.image} alt={recipe.title}/>
          <p>{recipe.title}</p>
        </div>
      ))}
    </section>
  );
};

export default RecipeList;
