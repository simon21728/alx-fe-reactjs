import { Link } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';
import FavoriteButton from './FavoriteButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.length === 0 && <p>No recipes added yet.</p>}

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>

          <FavoriteButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
