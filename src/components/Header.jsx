import { Link } from "react-router-dom";

export default function Header() {
  const links = [
    { name: "Culture", path: "/culture" },
    { name: "Tradition", path: "/tradition" },
    { name: "Food", path: "/food" },
    { name: "History", path: "/history" },
    { name: "Languages", path: "/languages" },
    { name: "Festivals", path: "/festivals" },
    { name: "Map", path: "/map" },
  ];

  return (
    <header className="bg-orange-500 text-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold">🇮🇳 India Culture Guide</h1>

        {/* Navigation */}
        <nav className="flex flex-1 justify-evenly ml-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:underline hover:text-yellow-200 transition font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
