import { motion } from "framer-motion";
import { SparklesIcon, StarIcon } from "lucide-react";
import Bracelet from "./../../assets/Bracelet.jpeg";
import Bracelet1 from "./../../assets/Bracelet1.jpeg";
import Jhumka from "./../../assets/Jhumka.jpeg";
import Kangan from "./../../assets/Kangan.jpeg";
import Ring from "./../../assets/Ring.jpeg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Hero from "./Hero";

import Footer from "./Footer";
import Reel from "./Reel";
import Category from "./Category";
import NewArrival from "./NewArrival";

const Home = () => {
  const images = [
    Jhumka,
    Kangan,
    Bracelet,
    Ring,
    Jhumka,
    Kangan,
    Bracelet,
    Ring,
    Jhumka,
    Kangan,
    Bracelet,
    Ring,
    Jhumka,
    Kangan,
    Bracelet,
    Ring,
  ];

  const reviews = [
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
    {
      text: "“The necklace was exactly as shown. Perfect for my anniversary dinner!”",
      img: "https://i.pravatar.cc/100?img=45",
      name: "Neha Kapoor",
      city: "Bangalore",
    },
    {
      text: "“Excellent customer service and beautiful packaging. Made a great gift!”",
      img: "https://i.pravatar.cc/100?img=51",
      name: "Sanya Malhotra",
      city: "Hyderabad",
    }
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
      <section className="py-6">
        <div className="bg-[#f5f0e9] p-6 md:p-12 font-serif min-h-[800px] ">
          <div className="grid grid-cols-3 grid-rows-3 gap-4 max-w-7xl mx-auto">
            {/* Top Row Images */}
            {images.slice(0, 3).map((src, i) => (
              <div
                key={`top-${i}`}
                className={`${i === 1 ? "col-start-2" : ""}`}
              >
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

            {/* Center Text Block banner*/}

            <div className="col-start-2 row-start-2 flex flex-col justify-center items-center text-center p-4 h-[220px]">
              <h2 className="text-[32px] md:text-[60px] tracking-wide text-[#a08a6c] font-light leading-none">
                FC
              </h2>
              <h1 className="text-[22px] md:text-[48px] text-gray-800 tracking-wider">
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
      </section>

      {/* Shop the Look – Reels Section */}
      <Reel />

      {/* Review Section */}
      <section className="bg-gradient-to-r from-primary to-primary/20 py-12 mb-10 px-4">
      <div className="text-center my-10">
        {/* Subtitle */}
        <p className="text-gray-400 text-sm mb-2">
          Genuine reviews from our lovely shoppers!
        </p>

        {/* Title with underline and lines on both sides */}
        <div className="flex items-center justify-center gap-4">
          <span className="hidden sm:block flex-1 h-px bg-gray-200"></span>

          <div className="inline-block">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wider">
              What Our Customers Say
            </h2>
            <div className="w-10 h-0.5 bg-red-400 mx-auto mt-1"></div>
          </div>

          <span className="hidden sm:block flex-1 h-px bg-gray-200"></span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-2">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition hover:translate-y-[-4px] h-full"
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

      {/* footer */}
      <Footer />
    </motion.div>
  );
};

export default Home;
