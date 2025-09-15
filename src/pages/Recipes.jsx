import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";

function Recipes() {
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [search, setSearch] = useState("");

  let url = "https://json-api.uz/api/project/recipes/recipes";
  const params = [];
  if (prepTime) params.push(`prepMinutes=${prepTime}`);
  if (cookTime) params.push(`cookMinutes=${cookTime}`);
  if (search.trim() !== "") params.push(`slug=${search.trim()}`);
  if (params.length > 0) url += "?" + params.join("&");

  const { data, loading, error } = useFetch(url);
  const recipes = data?.data || [];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-3">
        Explore our simple, healthy recipes
      </h1>

      <div className="mb-6 flex justify-center gap-4">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <select
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">Max Prep</option>
          <option value="5">5 min</option>
          <option value="10">10 min</option>
        </select>
        <select
          value={cookTime}
          onChange={(e) => setCookTime(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">Max Cook</option>
          <option value="5">5 min</option>
          <option value="10">10 min</option>
          <option value="15">15 min</option>
          <option value="20">20 min</option>
        </select>
      </div>

=      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {!loading && recipes.length === 0 && (
        <p className="text-center text-gray-500">No recipes found</p>
      )}

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded shadow p-4 flex flex-col"
          >
            <img
              src={recipe.image.large.replace("./assets/images", "/assets")}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="font-semibold text-lg mb-1">{recipe.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{recipe.overview}</p>
            <div className="text-sm text-gray-700 mb-3">
              <div>Prep: {recipe.prepMinutes} mins</div>
              <div>Cook: {recipe.cookMinutes} mins</div>
              <div>Servings: {recipe.servings}</div>
            </div>
            <Link
              to={`/recipes/${recipe.id}`}
              className="mt-auto bg-green-900 text-white text-center py-2 rounded hover:bg-green-800 transition"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
