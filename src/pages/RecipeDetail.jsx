import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function RecipeDetail() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    "https://json-api.uz/api/project/recipes/recipes"
  );

  if (error) return <p className="text-center text-red-500">Xatolik: {error}</p>;

  const recipes = data?.data || [];
  const recipe = recipes.find((r) => r.id === parseInt(id));

  const recommendations = recipes
    .filter((r) => r.id !== recipe?.id)
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {loading ? (
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div className="skeleton w-full h-80 rounded-xl"></div>

          <div className="space-y-4">
            <div className="skeleton h-8 w-3/4"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-5/6"></div>
            <div className="skeleton h-6 w-40"></div>
            <div className="skeleton h-4 w-2/3"></div>
            <div className="skeleton h-4 w-1/2"></div>
          </div>
        </div>
      ) : !recipe ? (
        <p className="text-center">Topilmadi</p>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={recipe.image?.small?.replace("./assets/images", "/assets")}
              />
              <img
                className="w-full rounded-xl shadow-md"
                src={recipe.image?.large?.replace("./assets/images", "/assets")}
                alt={recipe.title}
              />
            </picture>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">
                {recipe.title}
              </h1>
              <p className="text-gray-700 mb-6">{recipe.overview}</p>

              <div className="flex flex-wrap gap-6 text-sm text-gray-700 mb-8">
                <div className="flex items-center gap-2">
                  <img src="/assets/icon-servings.svg" alt="Servings" />
                  <span>Servings: {recipe.servings}</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/assets/icon-prep-time.svg" alt="Prep" />
                  <span>Prep: {recipe.prepMinutes} mins</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/assets/icon-cook-time.svg" alt="Cook" />
                  <span>Cook: {recipe.cookMinutes} mins</span>
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-green-800">
                  Ingredients:
                </h2>
                <ul className="space-y-2 text-gray-700">
                  {recipe.ingredients?.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <img
                        className="w-4 h-4 mt-1"
                        src="/assets/icon-bullet-point.svg"
                        alt=""
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-green-800">
                  Instructions:
                </h2>
                <ol className="space-y-3 list-decimal list-inside text-gray-700">
                  {recipe.instructions?.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {recommendations.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-green-900">
                More recipes
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {loading
                  ? Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col p-4 space-y-3"
                      >
                        <div className="skeleton h-48 w-full rounded-lg"></div>
                        <div className="skeleton h-6 w-3/4"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-2/3"></div>
                        <div className="skeleton h-10 w-full"></div>
                      </div>
                    ))
                  : recommendations.map((rec) => (
                      <div
                        key={rec.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
                      >
                        <img
                          src={rec.image?.small?.replace("./assets/images", "/assets")}
                          alt={rec.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4 flex flex-col flex-grow">
                          <h3 className="font-semibold text-lg text-green-900 mb-1 line-clamp-1">
                            {rec.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            {rec.overview}
                          </p>
                          <div className="space-y-1 text-sm text-gray-700 mb-4">
                            <div className="flex items-center gap-2">
                              <img src="/assets/icon-servings.svg" alt="Servings" className="w-4 h-4" />
                              <span>Servings: {rec.servings}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <img src="/assets/icon-prep-time.svg" alt="Prep" className="w-4 h-4" />
                              <span>Prep: {rec.prepMinutes} mins</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <img src="/assets/icon-cook-time.svg" alt="Cook" className="w-4 h-4" />
                              <span>Cook: {rec.cookMinutes} mins</span>
                            </div>
                          </div>
                          <div className="mt-auto">
                            <Link
                              to={`/recipes/${rec.id}`}
                              className="block w-full text-center bg-green-900 text-white py-2 rounded-md font-medium hover:bg-green-800 transition"
                            >
                              View Recipe
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default RecipeDetail;
