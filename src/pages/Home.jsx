import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="relative flex flex-col items-center text-center px-6 py-16 bg-gradient-to-b from-green-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
          <span className="text-green-600">Healthy</span> meals, zero fuss
        </h1>
        <p className="mt-4 max-w-xl text-gray-600">
          Discover eight quick, whole-food recipes that you can cook tonight—no
          processed junk, no guesswork.
        </p>
        <Link to="/recipes" className="btn btn-primary mt-6">
          Start exploring
        </Link>

        <div className="relative mt-10">
          <img
            className="absolute -left-10 top-0 w-20 opacity-60"
            src="/assets/pattern-squiggle-1.svg"
            alt=""
          />
          <img
            className="absolute right-0 bottom-0 w-16 opacity-70"
            src="/assets/mbatt.svg"
            alt=""
          />
          <img
            className="rounded-xl shadow-lg w-full max-w-3xl"
            src="/assets/image-home-hero-large.webp"
            alt="Hero"
          />
        </div>
      </section>

      {/* Features */}
      <main className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What you’ll get
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <img
              className="w-12 mb-4"
              src="/assets/icon-whole-food-recipes.svg"
              alt=""
            />
            <h3 className="text-lg font-semibold">Whole-food recipes</h3>
            <p className="text-gray-600 mt-2">
              Each dish uses everyday, unprocessed ingredients.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              className="w-12 mb-4"
              src="/assets/icon-minimum-fuss.svg"
              alt=""
            />
            <h3 className="text-lg font-semibold">Minimum fuss</h3>
            <p className="text-gray-600 mt-2">
              All recipes are designed to make eating healthy quick and easy.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              className="w-12 mb-4"
              src="/assets/icon-search-in-seconds.svg"
              alt=""
            />
            <h3 className="text-lg font-semibold">Search in seconds</h3>
            <p className="text-gray-600 mt-2">
              Filter by name or ingredient and jump straight to the recipe you
              need.
            </p>
          </div>
        </div>
      </main>

      {/* Real life */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Built for real life</h2>
            <p className="text-gray-600">
              Cooking shouldn’t be complicated. These recipes come in under{" "}
              <span className="text-green-600 font-semibold">30 minutes</span>{" "}
              of active time, fit busy schedules, and taste good enough to
              repeat.
              <br />
              <br />
              Whether you’re new to the kitchen or just need fresh ideas, we’ve
              got you covered.
            </p>
          </div>
          <img
            className="rounded-xl shadow-lg"
            src="/assets/image-home-real-life-large.webp"
            alt=""
          />
        </div>
      </section>

      <section className="bg-gray-100 rounded-xl p-8 flex flex-col items-center text-center relative mt-20">
        <img
          src="/assets/pattern-fork.svg"
          alt="Fork"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[314px] h-[390px] opacity-60 object-contain"
        />

        <img
          src="/assets/pattern-knife.svg"
          alt="Knife"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[314px] h-[390px] opacity-60 object-contain"
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Ready to cook smarter?
        </h2>

        <p className="text-gray-600 mb-6">
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>

        <Link
          to="/recipes"
          className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
        >
          Browse recipes
        </Link>
      </section>
    </>
  );
}

export default Home;
