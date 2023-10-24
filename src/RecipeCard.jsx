import "./RecipeCard.css";
import "./utils/data";

export const RecipeCard = ({ selectedRecipe, onClick }) => {
  const info = selectedRecipe.recipe;
  return (
    <>
      <button className="RecipeCard" onClick={() => onClick(selectedRecipe)}>
        <img src={info.image} alt="pizza " className="Image"></img>
      </button>
    </>
  );
};
