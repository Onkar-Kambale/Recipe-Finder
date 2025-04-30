import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

  const searchRecipes = async () => {
    if (!query.trim()) return;

    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&addRecipeInformation=true&apiKey=${apiKey}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="container">
      <h1>🍽️ Recipe Finder</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchRecipes}>Search</button>
      </div>

      {recipes.length === 0 && <p>Try searching for something delicious!</p>}

      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} className="recipe-img" />
          <h2 className="recipe-title">{recipe.title}</h2>
          <p className="recipe-time">Ready in {recipe.readyInMinutes} minutes</p>

          <div className="ingredients">
            <h3>Ingredients:</h3>
            <ul>
              {recipe.extendedIngredients?.map((ing, index) => (
                <li key={index}>{ing.original}</li>
              ))}
            </ul>
          </div>

          <a
            href={recipe.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="recipe-link"
          >
            View full recipe →
          </a>
        </div>
      ))}
    </div>
  );
}

export default App;
