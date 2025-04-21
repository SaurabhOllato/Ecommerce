import { motion } from "framer-motion";
import { SparklesIcon, StarIcon } from "lucide-react";

import Hero from "./Hero";

import Footer from "./Footer";
import Reel from "./Reel";
import Category from "./Category";
import NewArrival from "./NewArrival";

const Home = () => {
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
      <Hero />

      {/* Shop by Category Section */}
      <Category />

      {/* Features Section */}
      {/* <Feature /> */}

      {/* New Arrivals Section */}
      <NewArrival />

      {/* Banner */}
      <div className="bg-[#f5f0e9] p-6 md:p-12 font-serif min-h-[900px]">
  <div className="grid grid-cols-3 grid-rows-3 gap-4 max-w-6xl mx-auto">
    {/* Top Row Images */}
    {images.slice(0, 3).map((src, i) => (
      <div key={`top-${i}`} className={`${i === 1 ? "col-start-2" : ""}`}>
        <img
          src={src}
          alt={`jewelry-${i}`}
          className="w-full h-[220px] rounded-lg object-cover shadow-md"
        />
      </div>
    ))}

    {/* Middle Row - Left Image, Center Text, Right Image */}
    <div className="row-start-2">
      <img
        src={images[3]}
        alt="jewelry-3"
        className="w-full h-[220px] rounded-lg object-cover shadow-md"
      />
    </div>

    {/* Center Text Block */}
    <div className="col-start-2 row-start-2 flex flex-col justify-center items-center text-center p-8 h-[220px]">
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

    <div className="col-start-3 row-start-2">
      <img
        src={images[4]}
        alt="jewelry-4"
        className="w-full h-[220px] rounded-lg object-cover shadow-md"
      />
    </div>

    {/* Bottom Row Images */}
    {images.slice(5, 8).map((src, i) => (
      <div
        key={`bottom-${i}`}
        className={`row-start-3 ${i === 1 ? "col-start-2" : ""}`}
      >
        <img
          src={src}
          alt={`jewelry-${i + 5}`}
          className="w-full h-[220px] rounded-lg object-cover shadow-md"
        />
      </div>
    ))}
  </div>
</div>


      {/* Shop the Look – Reels Section */}
      <Reel />

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
      <Footer />
    </motion.div>
  );
};

export default Home;
