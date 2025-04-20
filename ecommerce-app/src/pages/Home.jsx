import { motion } from "framer-motion";
import { SparklesIcon, StarIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);

  const reels = [
    {
      id: 1,
      video: "/videos/Video-346.mp4",
      title: "✨ Rose Gold Bridal Set",
      collection: "bridal-collection",
    },
    {
      id: 2,
      video: "/videos/Video-346.mp4",
      title: "💎 Diamond Stud Earrings",
      collection: "earrings-collection",
    },
    {
      id: 3,
      video: "/videos/Video-346.mp4",
      title: "🌟 Pearl Necklace Set",
      collection: "necklace-collection",
    },
    {
      id: 4,
      video: "/videos/Video-346.mp4",
      title: "💫 Silver Anklet Collection",
      collection: "anklet-collection",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToIndex = (index) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const item = container.children[index];

    if (item) {
      const itemLeft = item.offsetLeft;
      const itemWidth = item.offsetWidth;
      const containerWidth = container.offsetWidth;

      container.scrollTo({
        left: itemLeft - (containerWidth - itemWidth) / 2,
        behavior: "smooth",
      });

      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + reels.length) % reels.length;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % reels.length;
    scrollToIndex(newIndex);
  };

  const items = [
    {
      src: "/Bracelet.jpeg",
      alt: "Gold Rings",
    },
    {
      src: "/Bracelet.jpeg",
      alt: "Gold Earrings on Stone",
    },
    {
      src: "/Bracelet.jpeg",
      alt: "Gold Chain on Rock",
    },
    {
      src: "/Bracelet.jpeg",
      alt: "Gold Necklace Draped on Stones",
    },
    {
      src: "/Bracelet.jpeg",
      alt: "Double Gold Rings",
    },
    {
      src: "/Bracelet.jpeg",
      alt: "Gold and Silver Earrings",
    },
  ];

  const images = [
    "/Jhumka.jpeg",
    "/Jhumka.jpeg",
    "/Jhumka.jpeg",
    "/Jhumka.jpeg",
    "/Jhumka.jpeg",
    "/Jhumka.jpeg",
    "/Jhumka.jpeg",
    "/Jhumka.jpeg",
    "/Jhumka.jpeg",
    "/Jhumka.jpeg",
    "/Jhumka.jpeg",
    "/Jhumka.jpeg",
    "/Jhumka.jpeg",
    "/Jhumka.jpeg",
  ];
  return (
    <motion.div
      className="bg-white text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-20 py-16 bg-gradient-to-r from-primary/95 to-primary overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-accent/20 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-accent/10 blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-accent/15 blur-lg"></div>

        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left z-10 space-y-6">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-heading"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Welcome to{" "}
            <span className="text-accent relative inline-block group">
              Fashion Craze
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </span>
          </h1>

          <p
            className="text-lg md:text-xl mb-6 max-w-lg mx-auto md:mx-0 text-subtext leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Discover premium artificial jewelry at unbeatable prices. Shop our
            collection of stylish, minimal, and trendy designs perfect for every
            occasion and vibe!
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <Link
              to="/shop"
              className="relative overflow-hidden bg-accent text-buttonText px-8 py-3 rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 font-medium group"
            >
              <span className="relative z-10">Shop Now</span>
              <span className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            </Link>

            <Link
              to="/collections"
              className="relative overflow-hidden border-2 border-accent text-accent px-8 py-3 rounded-full hover:bg-primary/20 transition-all duration-300 font-medium"
            >
              View Collections
            </Link>
          </div>

          <div
            className="flex items-center justify-center md:justify-start gap-4 mt-8"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((item) => (
                <img
                  key={item}
                  src={`/customer-${item}.jpg`}
                  alt={`Happy Customer ${item}`}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="text-sm text-subtext">
              <p>Join 10k+ happy customers</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-4 h-4 text-accent fill-current"
                  />
                ))}
                <span>5.0 (2.5k reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Main Hero Image */}
        <div
          className="flex-2 mb-10 md:mb-0 relative"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="relative w-full max-w-md mx-auto md:mx-0">
            <img
              src="/hero.png"
              alt="Trendy Fashion Jewelry"
              className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 border-2 border-white/30"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-white/30">
              <div className="flex items-center gap-2">
                <SparklesIcon className="w-6 h-6 text-accent" />
                <span className="font-medium text-heading">Trending Now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="max-w-6xl mx-auto py-16 px-4 grid  md:grid-cols-3 gap-8 text-center">
        <div>
          <img
            src="data:image/png;base64,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"
            className="h-16 mx-auto mb-4"
            alt="shipping"
          />
          <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
          <p className="text-sm">On orders above ₹999. Delivered pan India.</p>
        </div>
        <div>
          <img
            src="data:image/jpeg;base64,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"
            className="h-16 mx-auto mb-4"
            alt="quality"
          />
          <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
          <p className="text-sm">Handpicked and finely crafted for elegance.</p>
        </div>
        <div>
          <img
            src="data:image/png;base64,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"
            className="h-16 mx-auto mb-4"
            alt="return"
          />
          <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
          <p className="text-sm">7-day hassle-free returns on all items.</p>
        </div>
      </section> */}

      {/* New Arrivals Section */}
      <section className=" py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-heading">
            <span className="text-accent">✨</span> New Arrivals{" "}
            <span className="text-accent">✨</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product Cards */}
            {[
              {
                name: "Elegant Pearl Earrings",
                price: "₹499",
                image: "/Ring.jpeg",
              },
              {
                name: "Gold-Plated Necklace",
                price: "₹899",
                image: "/Jhumka.jpeg",
              },
              {
                name: "Gold-Plated Necklace",
                price: "₹899",
                image: "/Jhumka.jpeg",
              },
              {
                name: "Stylish Layered Bracelet",
                price: "₹649",
                image: "/Bracelet.jpeg",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm border first-letter: border-primary/20  overflow-hidden hover:shadow-lg transition duration-300 group"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <div className="relative overflow-hidden h-60">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkMocha/10 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-heading mb-1">
                    {product.name}
                  </h3>
                  <p className="text-subtext mb-3">{product.price}</p>
                  <button className="w-full bg-accent/90 text-buttonText py-2.5 rounded-lg hover:bg-accent transition-all font-medium shadow-sm hover:shadow-accent/20">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12" data-aos="fade-up" data-aos-delay="400">
            <Link
              to="/shop"
              className="inline-block border-2 border-accent/80 text-accent px-8 py-3 rounded-full hover:bg-accent/10 transition-all duration-300 font-medium hover:border-accent"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
            <span></span> Shop by Category
          </h2>

          {/* <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      
      <div
        class="bg-white shadow-md hover:shadow-xl transition duration-300 cursor-pointer group overflow-hidden rounded-lg"
      >
        <div class="relative overflow-hidden h-80">
          <img
            src="/Ring.jpeg"
            alt="Earrings"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div class="p-4">
          <h4 class="text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors">
            Earrings
          </h4>
        </div>
      </div>

      <div
        class="bg-white shadow-md hover:shadow-xl transition duration-300 cursor-pointer group overflow-hidden rounded-lg"
      >
        <div class="relative overflow-hidden h-80">
          <img
            src="/Kangan.jpeg"
            alt="Necklaces"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div class="p-4">
          <h4 class="text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors">
            Necklaces
          </h4>
        </div>
      </div>

      <div
        class="bg-white shadow-md hover:shadow-xl transition duration-300 cursor-pointer group overflow-hidden rounded-lg"
      >
        <div class="relative overflow-hidden h-80">
          <img
            src="/Bracelet1.jpeg"
            alt="Bangles"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div class="p-4">
          <h4 class="text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors">
            Bangles
          </h4>
        </div>
      </div>

      <div
        class="bg-white shadow-md hover:shadow-xl transition duration-300 cursor-pointer group overflow-hidden rounded-lg"
      >
        <div class="relative overflow-hidden h-80">
          <img
            src="/Jhumka.jpeg"
            alt="Rings"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div class="p-4">
          <h4 class="text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors">
            Rings
          </h4>
        </div>
      </div>
    </div> */}

          <div class="bg-white shadow-md hover:shadow-xl transition duration-300 cursor-pointer group overflow-hidden rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6  mx-auto">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`border border-[#e6e4de] p-2 bg-white shadow-sm  ${
                    index === 3
                      ? "col-span-2 md:col-span-1 row-span-2 md:row-span-2"
                      : ""
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <h2 className="text-4xl tracking-widest font-serif text-gray-300">
                MOODBOARD
              </h2>
              <p className="-mt-4 text-3xl italic text-black font-light">
                Aesthetic
              </p>
            </div>
          </div>

          {/* <!-- View All Button --> */}
          <div class="mt-12">
            <a
              href="/shop"
              class="inline-block bg-yellow-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:bg-yellow-700 font-medium"
            >
              View All Categories
            </a>
          </div>
        </div>
      </section>

      {/*  */}
      <div className="bg-[#f5f0e9] min-h-screen p-6 md:p-12 font-serif">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.slice(0, 4).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`jewelry-${i}`}
              className="rounded-lg object-cover shadow-md"
            />
          ))}

          {/* Center Text Block */}
          <div className="col-span-2 md:col-span-2 flex flex-col justify-center items-center text-center py-10">
            <h2 className="text-[40px] md:text-[60px] tracking-wide text-[#a08a6c] font-light leading-none">
              430
            </h2>
            <h1 className="text-[32px] md:text-[48px] text-gray-800 tracking-wider">
              INSTA <br /> <span className="text-[#c0a06f]">JEWELRY</span>
            </h1>
            <p className="text-sm mt-2 text-gray-500 uppercase tracking-wider">
              Instagram posts, stories & highlight icons
            </p>
          </div>

          {images.slice(4, 10).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`jewelry-${i + 4}`}
              className="rounded-lg object-cover shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Shop the Look – Reels Section */}
      <section className="py-16 px-4 relative bg-primary/50">
        <div className="max-w-6xl mx-auto mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            <span className="text-accent">🎥</span> Shop the Look
          </h2>
          <p className="text-sm text-subtext mt-2">
            Scroll through style videos & grab your fav pieces!
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {isMobile && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition"
                aria-label="Previous reel"
              >
                <ChevronLeft className="text-heading" size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition"
                aria-label="Next reel"
              >
                <ChevronRight className="text-heading" size={24} />
              </button>
            </>
          )}

          {/* Reels */}
          <div
            ref={scrollContainerRef}
            className={`${
              isMobile ? "overflow-x-hidden" : "overflow-x-auto"
            } whitespace-nowrap space-x-6 px-2 flex scrollbar-hide`}
          >
            {reels.map((reel, index) => (
              <div
                key={reel.id}
                className={`inline-block w-72 md:w-96 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden ${
                  isMobile ? "flex-shrink-0" : ""
                }`}
              >
                <video
                  src={reel.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[500px] object-cover"
                />
                <div className="p-4 text-center bg-white">
                  <h4 className="font-semibold text-heading text-lg mb-2">
                    {reel.title}
                  </h4>
                  <button
                    className="bg-accent text-buttonText py-2 px-5 rounded-full text-sm hover:bg-accent/90 transition shadow-sm hover:shadow-accent/30"
                    onClick={() =>
                      (window.location.href = `/shop/${reel.collection}`)
                    }
                  >
                    🛒 Shop Collection
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          {isMobile && (
            <div className="flex justify-center mt-4 space-x-2">
              {reels.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-accent" : "bg-subtext/50"
                  }`}
                  aria-label={`Go to reel ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Review Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            <span className="text-accent">💬</span> What Our Customers Say
          </h2>
          <p className="text-subtext mt-2 text-sm">
            Genuine reviews from our lovely shoppers!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {[
            {
              text: "“Absolutely loved the rose gold set! Looks even better than the photos 😍. Fast delivery too!”",
              img: "https://i.pravatar.cc/100?img=12",
              name: "Priya Sharma",
              city: "Mumbai",
            },
            {
              text: "“Super happy with the earrings I ordered. Got compliments at a wedding 💖.”",
              img: "https://i.pravatar.cc/100?img=25",
              name: "Anjali Desai",
              city: "Ahmedabad",
            },
            {
              text: "“Fashion Craze is my new fav jewelry stop! Quality is 💯. Will order again soon.”",
              img: "https://i.pravatar.cc/100?img=32",
              name: "Ritika Jain",
              city: "Delhi",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition hover:translate-y-[-4px]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-4 h-4 text-accent fill-current"
                  />
                ))}
              </div>
              <p className="text-subtext text-sm mb-4">{review.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-accent/20"
                />
                <div>
                  <h4 className="font-semibold text-heading text-sm">
                    {review.name}
                  </h4>
                  <p className="text-xs text-accent">{review.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* footer */}
      <footer className="bg-darkMocha text-primary py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-3">
              Fashion Craze
            </h3>
            <p className="text-sm mb-2 text-primary/90">
              Discover your sparkle with our handpicked collection of stylish,
              affordable jewelry ✨
            </p>
            <p className="text-xs text-primary/50 mt-4">
              &copy; 2025 Fashion Craze. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-accent transition text-primary/80"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="hover:text-accent transition text-primary/80"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-accent transition text-primary/80"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-accent transition text-primary/80"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-primary">
              Customer Care
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/faq"
                  className="hover:text-accent transition text-primary/80"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/shipping"
                  className="hover:text-accent transition text-primary/80"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-accent transition text-primary/80"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-accent transition text-primary/80"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Socials */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-primary">
              Stay in Touch
            </h4>
            <form className="flex flex-col space-y-2 text-sm">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-lg border border-primary/30 bg-primary/10 focus:outline-none focus:ring-2 focus:ring-accent/50 text-primary placeholder-primary/50"
              />
              <button className="bg-accent text-buttonText py-2 px-4 rounded-lg hover:bg-accent/90 transition font-medium">
                Subscribe
              </button>
            </form>

            <div className="flex gap-4 mt-4 text-primary/80">
              <a href="#" className="hover:text-accent transition">
                Instagram
              </a>
              <a href="#" className="hover:text-accent transition">
                Facebook
              </a>
              <a href="#" className="hover:text-accent transition">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Home;
