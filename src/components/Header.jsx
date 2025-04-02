import { Link } from "react-router-dom";
import MatrixEffect from "./MatrixEffect";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); 
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFix(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-lg z-50">
      <MatrixEffect />
      <header
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 container mx-auto  max-w-[1200px] ${
        fix ? " py-4 shadow-md" : " py-6 shadow-sm"
      }`}
    >
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-white">
            NetZamin
          </Link>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className="hidden md:flex items-center gap-5">
            {[
              { to: "/login", label: "Kirish" },
              { to: "/regestr", label: "Ro'yhatdan o'tish" },
            ].map((item) => (
              <motion.div key={item.to} whileTap={{ scale: 0.9 }}>
                <Link
                  to={item.to}
                  className={`px-4 py-2 rounded shadow transition-all duration-300 ${
                    active === item.to
                      ? "bg-blue-800 scale-105"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white`}
                  onClick={() => setActive(item.to)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </ul>
        </nav>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:hidden absolute top-16 right-6 bg-blue-700 p-4 rounded-lg shadow-lg flex flex-col gap-4`}
        >
          {[
            { to: "/login", label: "Kirish" },
            { to: "/regestr", label: "Ro'yhatdan o'tish" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-4 py-2 rounded transition-all duration-300 ${
                active === item.to ? "bg-blue-800" : "bg-blue-600 hover:bg-blue-700"
              } text-white`}
              onClick={() => {
                setActive(item.to);
                setMenuOpen(false); // Tugmani bosganda menyuni yopish
              }}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Header;
