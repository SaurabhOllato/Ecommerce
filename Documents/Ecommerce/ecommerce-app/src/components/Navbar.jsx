import { Link, useLocation } from "react-router-dom";
import { Heart, Search, User, ShoppingCart, Menu } from "lucide-react";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close mobile menu on route change
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collection" },
    // { name: "New Arrivals", path: "/new" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Admin", path: "/admin" },
  ];
  // const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
  className={`sticky top-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white shadow-lg py-2"
      : "bg-primary/90 backdrop-blur-sm py-3"
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      className={`relative flex items-center justify-between transition-all duration-300 ease-in-out px-4 ${
        isScrolled ? "h-12" : "h-16"
      }`}
    >
      {/* Hamburger menu for mobile */}
      <div className="flex md:hidden items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Logo - centered on mobile, left on desktop */}
      <div className="flex items-center md:absolute md:left-4">
        <Link
          to="#"
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <span
            className={`text-xl font-bold ${
              isScrolled ? "text-black" : "text-logoText"
            }`}
          >
            Fashion Craze
          </span>
        </Link>
      </div>

      {/* Centered navigation - hidden on mobile */}
      <div className="hidden md:flex mx-auto items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`px-1 py-2 text-sm font-medium transition-colors relative ${
              location.pathname === link.path
                ? isScrolled
                  ? "text-black"
                  : "text-accent"
                : isScrolled
                ? "text-black hover:text-primary"
                : "text-subtext hover:text-accent"
            }`}
          >
            {link.name}
            {location.pathname === link.path && (
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full ${
                  isScrolled ? "bg-black" : "bg-accent"
                }`}
              ></span>
            )}
          </Link>
        ))}
      </div>

      {/* Icons on the right */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4">
          {[Search, Heart, User].map((Icon, idx) => {
            const paths = ["/search", "/wishlist", "/profile"];
            return (
              <Link
                key={idx}
                to={paths[idx]}
                className={`p-1 transition-colors relative group ${
                  isScrolled
                    ? "text-black hover:text-primary"
                    : "text-subtext hover:text-accent"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span
                  className={`absolute -bottom-1 left-1/2 w-0 h-0.5 transition-all group-hover:w-3/4 group-hover:-translate-x-1/2 ${
                    isScrolled ? "bg-primary" : "bg-white"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        <Link
          to="/cart"
          className={`p-1 transition-colors relative group ${
            isScrolled
              ? "text-black hover:text-primary"
              : "text-subtext hover:text-accent"
          }`}
        >
          <div className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-accent text-buttonText text-xs px-1.5 py-0.5 rounded-full flex items-center justify-center">
              2
            </span>
          </div>
          <span
            className={`absolute -bottom-1 left-1/2 w-0 h-0.5 transition-all group-hover:w-3/4 group-hover:-translate-x-1/2 ${
              isScrolled ? "bg-primary" : "bg-accent"
            }`}
          ></span>
        </Link>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMobileMenuOpen && (
    <div className="md:hidden bg-white shadow-lg rounded-b-lg">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === link.path
                ? "bg-primary/10 text-black"
                : "text-gray-700 hover:bg-primary/10 hover:text-black"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="pt-4 pb-3 border-t border-gray-200 px-5 flex items-center justify-between">
        <div className="flex space-x-4">
          <Link
            to="/search"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-700 hover:text-black"
          >
            <Search className="h-5 w-5" />
          </Link>
          <Link
            to="/wishlist"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-700 hover:text-black"
          >
            <Heart className="h-5 w-5" />
          </Link>
          <Link
            to="/profile"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-700 hover:text-black"
          >
            <User className="h-5 w-5" />
          </Link>
        </div>
        <Link
          to="/cart"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-gray-700 hover:text-black relative"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -top-2 -right-2 bg-accent text-buttonText text-xs px-1.5 py-0.5 rounded-full">
            2
          </span>
        </Link>
      </div>
    </div>
  )}
</nav>
  );
};

export default Navbar;
