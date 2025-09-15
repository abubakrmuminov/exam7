import { useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

function Recipes() {
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const queryParams = new URLSearchParams();
  if (prepTime) queryParams.append("prepMinutes", prepTime);
  if (cookTime) queryParams.append("cookMinutes", cookTime);
  if (debouncedSearch.trim() !== "")
    queryParams.append("slug", debouncedSearch.trim());

  const url = `https://json-api.uz/api/project/recipes/recipes${
    queryParams.toString() ? "?" + queryParams.toString() : ""
  }`;

  const { data, loading, error } = useFetch(url);
  const recipes = data?.data || data || [];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-3">
        Explore our simple, healthy recipes
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
        Discover quick, whole-food dishes that fit real-life schedules and taste
        amazing. Use the search bar to find a recipe by name or ingredient, or
        simply scroll the list and let something delicious catch your eye.
      </p>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
      </div>

      <div className="mb-6 flex flex-wrap justify-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Max Prep Time</span>
          <select
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <option value="">Cancel</option>
            <option value="5">5 min</option>
            <option value="10">10 min</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Max Cook Time</span>
          <select
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <option value="">Cancel</option>
            <option value="5">5 min</option>
            <option value="10">10 min</option>
            <option value="15">15 min</option>
            <option value="20">20 min</option>
          </select>
        </div>
      </div>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card bg-base-100 shadow-md">
              <figure>
                <div className="skeleton w-full h-56"></div>
              </figure>
              <div className="card-body space-y-3">
                <div className="skeleton h-6 w-3/4"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-5/6"></div>

                <div className="mt-3 space-y-2">
                  <div className="skeleton h-4 w-1/2"></div>
                  <div className="skeleton h-4 w-1/3"></div>
                  <div className="skeleton h-4 w-1/4"></div>
                </div>

                <div className="card-actions justify-end mt-4">
                  <div className="skeleton h-10 w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-center text-red-500">❌ Xatolik: {error}</p>}

      {recipes.length === 0 && !loading && (
        <p className="text-center text-gray-500">No recipes found</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={recipe.image.large.replace("./assets/images", "/assets")}
              alt={recipe.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg text-green-900 mb-1 line-clamp-1">
                {recipe.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {recipe.overview}
              </p>

              <div className="space-y-1 text-sm text-gray-700 mb-4">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/icon-servings.svg"
                    alt="Servings"
                    className="w-4 h-4"
                  />
                  <span>Servings: {recipe.servings}</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/icon-prep-time.svg"
                    alt="Prep"
                    className="w-4 h-4"
                  />
                  <span>Prep: {recipe.prepMinutes} mins</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/icon-cook-time.svg"
                    alt="Cook"
                    className="w-4 h-4"
                  />
                  <span>Cook: {recipe.cookMinutes} mins</span>
                </div>
              </div>

              <div className="mt-auto">
                <Link
                  to={`/recipes/${recipe.id}`}
                  className="block w-full text-center bg-[#163A34] text-white py-2 rounded-4xl font-medium hover:bg-green-800 transition"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
