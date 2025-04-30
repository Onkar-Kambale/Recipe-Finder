import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{recipe.title}</h2>
      <p className="text-sm text-gray-600 mt-1">Ready in {recipe.readyInMinutes} minutes</p>
      <h3 className="mt-2 font-semibold">Ingredients:</h3>
      <ul className="text-sm list-disc list-inside">
        {recipe.extendedIngredients?.slice(0, 5).map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
      <a
        href={recipe.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-sm mt-2 inline-block"
      >
        View full recipe →
      </a>
    </div>
  );
};

export default RecipeCard;
