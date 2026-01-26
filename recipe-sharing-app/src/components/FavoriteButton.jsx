import { useRecipeStore } from '../components/recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() => {
        if (isFavorite) removeFavorite(recipeId);
        else addFavorite(recipeId);
      }}
    >
      {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
