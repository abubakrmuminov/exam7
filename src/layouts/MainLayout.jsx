import { Outlet, NavLink, Link } from "react-router-dom";
import { useState } from "react";

function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="relative flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <img src="/assets/logot.svg" alt="Logo" className="h-10" />

        <div className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 ${
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `px-4 py-2 ${
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="recipes"
            className={({ isActive }) =>
              `px-4 py-2 ${
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }`
            }
          >
            Recipes
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/recipes"
            className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Browse recipes
          </Link>
          <button
            className="text-2xl md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="recipes"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
              onClick={() => setMenuOpen(false)}
            >
              Recipes
            </NavLink>
            <Link
              to="/recipes"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Browse recipes
            </Link>
          </div>
        )}
      </nav>

      <main className="flex-1">
          <Outlet />
      </main>

      <footer className=" text-[#163A34] py-16 px-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h3>Made with ❤️ and 🥑</h3>
          <div className="flex gap-4">
            <a href="https://instagram.com">
              <img src="/assets/icon-instagram.svg" alt="Instagram" />
            </a>
            <a href="https://bluesky.com">
              <img src="/assets/icon-bluesky.svg" alt="Bluesky" />
            </a>
            <a href="https://tiktok.com">
              <img src="/assets/icon-tiktok.svg" alt="TikTok" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
