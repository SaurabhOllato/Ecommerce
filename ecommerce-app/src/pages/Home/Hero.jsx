import { SparklesIcon, StarIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import hero from "./../../assets/Hero.png";
import Ring from "./../../assets/Ring.jpeg";
import Kangan from "./../../assets/Kangan.jpeg";

const heroImages = [hero, Kangan, Ring];

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[85vh]  md:min-h-[60vh] flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16 bg-gradient-to-r from-primary/95 to-primary overflow-hidden">
      {/* Decorative elements */}

      {/* Left: Text Content */}
      <div className="flex-1 text-center md:text-center lg:text-left z-10 space-y-6  md:mt-10">
        <h1
          className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 text-heading"
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
          className="text-sm md:text-xl mb-6 max-w-lg mx-auto md:mx-auto lg:mx-0 text-subtext leading-relaxed"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Discover premium artificial jewelry at unbeatable prices. Shop our
          collection of stylish, minimal, and trendy designs perfect for every
          occasion and vibe!
        </p>

        <div
          className="flex flex-row sm:flex-row gap-4 justify-center md:justify-center lg:justify-start"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <Link
            to="/shop"
            className="relative overflow-hidden bg-accent text-buttonText px-2 py-3 md:px-4 md:py-3 rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 font-medium group"
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
          {/* <div className="flex -space-x-2">
              {[1, 2, 3].map((item) => (
                <img
                  key={item}
                  src={`/customer-${item}.jpg`}
                  alt={`Happy Customer ${item}`}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div> */}
          <div className="text-sm text-subtext">
            {/* <p>Join 10k+ happy customers</p> */}
            {/* <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-4 h-4 text-accent fill-current"
                  />
                ))}
                <span>5.0 (2.5k reviews)</span>
              </div> */}
          </div>
        </div>
      </div>

      {/* Right: Main Hero Image */}
      <div
        className="flex-2 mb-10 md:mb-0 relative"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <div className="relative w-full max-w-xs sm:max-w-lg md:max-w-xl mx-auto md:mx-0 ">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="rounded-none  sm:rounded-2xl"
          >
            {heroImages.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Hero ${i + 1}`}
                  className="w-full h-[300px] sm:h-[450px]  object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <img
              src="/hero.png"
              alt="Trendy Fashion Jewelry"
              className="w-full rounded-2xl  transform hover:scale-105 transition-transform duration-500 "
            /> */}
          {/* <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-white/30"> */}
          {/* <div className="flex items-center gap-2">
                <SparklesIcon className="w-6 h-6 text-accent" />
                <span className="font-medium text-heading">Trending Now</span>
              </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
