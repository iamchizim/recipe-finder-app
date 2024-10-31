import LazyLoadImage  from "../components/LazyLoadImage"
import { useLocation } from "react-router-dom"

const RecipeDetails = () =>{
const location = useLocation()
const {recipe} = location.state || {}
if (!recipe){
    return <div>No details found</div>
}

return(
    <section>
        <LazyLoadImage 
        src={}
        />
          <p>{recipe.title}</p>
        <p>{formatRecipeDescription(recipe.summary)}</p>
        <p>Preparation time: {recipe.readyInMinutes} mins</p>
    </section>
)
}
export default RecipeDetails