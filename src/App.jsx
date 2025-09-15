import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import MainLayout from "./layouts/MainLayout";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "recipes",
          element: <Recipes />,
        },
        {
          path: "recipes/:id",
          element: <RecipeDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
