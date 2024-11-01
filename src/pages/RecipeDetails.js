import LazyLoadImage from "../components/LazyLoadImage";
import { useLocation } from "react-router-dom";

const RecipeDetails = () => {
  const location = useLocation();
  const { recipe } = location.state || {};

  if (!recipe) {
    return <div>No details found</div>;
  }

  return (
    <section className="recipe-details">
      <LazyLoadImage src={recipe.image} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <p>{recipe.summary}</p>
      <p className="preparation-time">Preparation time: {recipe.readyInMinutes} mins</p>
    </section>
  );
};

export default RecipeDetails;

