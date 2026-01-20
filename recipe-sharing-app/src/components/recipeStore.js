import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  setRecipes: (recipes) => set({ recipes }),

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

    setSearchTerm: (term) => set({ searchTerm: term }),

    filterRecipes: () =>
      set((state) => ({
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      })),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      // mock recommendation logic:
      // Recommend recipes that are NOT in favorites
      // but share a word with favorite titles (simple heuristic)
      const favoriteRecipes = state.recipes.filter((r) =>
        state.favorites.includes(r.id)
      );

      const favoriteWords = favoriteRecipes
        .flatMap((r) => r.title.toLowerCase().split(' '))
        .filter((w) => w.length > 3);

      const recommended = state.recipes.filter((r) => {
        if (state.favorites.includes(r.id)) return false;
        const titleWords = r.title.toLowerCase().split(' ');
        return titleWords.some((w) => favoriteWords.includes(w));
      });

      return { recommendations: recommended };
    }),
}));
