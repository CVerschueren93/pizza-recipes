import { RecipeCard } from "./RecipeCard";

export const RecipeArray = ({ recipes, onClick }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.recipe.label}
          selectedRecipe={recipe}
          onClick={onClick}
        />
      ))}
    </>
  );
};
