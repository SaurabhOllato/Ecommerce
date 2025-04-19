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

  return (
    <nav
  className={`sticky top-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-darkMocha shadow-lg py-2"
      : "bg-primary/90 backdrop-blur-sm shadow-sm py-3"
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo and Desktop Navigation */}
      <div className="flex items-center">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          {/* <img
            src={logo}
            alt="Fashion Craze Logo"
            className="h-8 w-8 object-contain transition-transform group-hover:rotate-12 duration-300"
          /> */}
          <span
            className={`text-xl font-bold hidden sm:block ${
              isScrolled ? "text-primary" : "text-logoText"
            }`}
          >
            Fashion Craze
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:ml-20 md:flex md:items-center md:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-1 py-2 text-sm font-medium transition-colors relative ${
                location.pathname === link.path
                  ? isScrolled
                    ? "text-primary"
                    : "text-accent"
                  : isScrolled
                  ? "text-primary/90 hover:text-primary"
                  : "text-subtext hover:text-accent"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full ${
                    isScrolled ? "bg-primary" : "bg-accent"
                  }`}
                ></span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="flex md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`inline-flex items-center justify-center p-2 rounded-md ${
            isScrolled ? "text-primary" : "text-subtext"
          } hover:text-accent focus:outline-none`}
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center gap-5">
        {/* Icon Buttons */}
        {[Search, Heart, User].map((Icon, idx) => {
          const paths = ["/search", "/wishlist", "/profile"];
          return (
            <Link
              key={idx}
              to={paths[idx]}
              className={`p-1 transition-colors relative group ${
                isScrolled
                  ? "text-primary/90 hover:text-primary"
                  : "text-subtext hover:text-accent"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span
                className={`absolute -bottom-1 left-1/2 w-0 h-0.5 transition-all group-hover:w-3/4 group-hover:-translate-x-1/2 ${
                  isScrolled ? "bg-primary" : "bg-accent"
                }`}
              ></span>
            </Link>
          );
        })}

        {/* Cart Icon with badge */}
        <Link
          to="/cart"
          className={`p-1 transition-colors relative group ${
            isScrolled
              ? "text-primary/90 hover:text-primary"
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
    <div className="md:hidden bg-darkMocha shadow-lg rounded-b-lg">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === link.path
                ? "bg-accent/20 text-primary"
                : "text-primary/90 hover:bg-accent/10 hover:text-primary"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="pt-4 pb-3 border-t border-primary/20 px-5 flex items-center justify-between">
        <div className="flex space-x-4">
          <button className="text-primary/90 hover:text-primary">
            <Search className="h-5 w-5" />
          </button>
          <Link to="/wishlist" className="text-primary/90 hover:text-primary">
            <Heart className="h-5 w-5" />
          </Link>
          <Link to="/profile" className="text-primary/90 hover:text-primary">
            <User className="h-5 w-5" />
          </Link>
        </div>
        <Link to="/cart" className="text-primary/90 hover:text-primary relative">
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