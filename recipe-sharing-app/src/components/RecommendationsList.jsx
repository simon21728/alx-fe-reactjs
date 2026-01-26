import { useRecipeStore } from '../components/recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  return (
    <div>
      <h2>Recommended For You</h2>
      <button onClick={generateRecommendations}>
        Generate Recommendations
      </button>

      {recommendations.length === 0 && <p>No recommendations yet.</p>}

      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
