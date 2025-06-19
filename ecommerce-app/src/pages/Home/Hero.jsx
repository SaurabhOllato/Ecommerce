// import { SparklesIcon, StarIcon } from "lucide-react";
// import React from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import hero from "./../../assets/Hero.png";
// import Ring from "./../../assets/Ring.jpeg";
// import Kangan from "./../../assets/Kangan.jpeg";

// const heroImages = [hero, Kangan, Ring];

// export default function Hero() {
//   return (
//     <section className="relative min-h-[60vh] lg:min-h-[85vh]  md:min-h-[60vh] flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16 bg-gradient-to-r from-primary/95 to-primary overflow-hidden">
//       {/* Decorative elements */}

//       {/* Left: Text Content */}
//       <div className="flex-1 text-center md:text-center lg:text-left z-10 space-y-6  md:mt-10">
//         <h1
//           className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 text-heading"
//           data-aos="fade-right"
//           data-aos-delay="100"
//         >
//           Welcome to{" "}
//           <span className="text-accent relative inline-block group">
//             Fashion Craze
//             <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
//           </span>
//         </h1>

//         <p
//           className="text-sm md:text-xl mb-6 max-w-lg mx-auto md:mx-auto lg:mx-0 text-subtext leading-relaxed"
//           data-aos="fade-right"
//           data-aos-delay="200"
//         >
//           Discover premium artificial jewelry at unbeatable prices. Shop our
//           collection of stylish, minimal, and trendy designs perfect for every
//           occasion and vibe!
//         </p>

//         <div
//           className="flex flex-row sm:flex-row gap-4 justify-center md:justify-center lg:justify-start"
//           data-aos="fade-right"
//           data-aos-delay="300"
//         >
//           <Link
//             to="/shop"
//             className="relative overflow-hidden bg-accent text-buttonText px-2 py-3 md:px-4 md:py-3 rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 font-medium group"
//           >
//             <span className="relative z-10">Shop Now</span>
//             <span className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
//           </Link>

//           <Link
//             to="/collections"
//             className="relative overflow-hidden border-2 border-accent text-accent px-8 py-3 rounded-full hover:bg-primary/20 transition-all duration-300 font-medium"
//           >
//             View Collections
//           </Link>
//         </div>

//         <div
//           className="flex items-center justify-center md:justify-start gap-4 mt-8"
//           data-aos="fade-right"
//           data-aos-delay="400"
//         >
//           {/* <div className="flex -space-x-2">
//               {[1, 2, 3].map((item) => (
//                 <img
//                   key={item}
//                   src={`/customer-${item}.jpg`}
//                   alt={`Happy Customer ${item}`}
//                   className="w-10 h-10 rounded-full border-2 border-white"
//                 />
//               ))}
//             </div> */}
//           <div className="text-sm text-subtext">
//             {/* <p>Join 10k+ happy customers</p> */}
//             {/* <div className="flex items-center gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <StarIcon
//                     key={i}
//                     className="w-4 h-4 text-accent fill-current"
//                   />
//                 ))}
//                 <span>5.0 (2.5k reviews)</span>
//               </div> */}
//           </div>
//         </div>
//       </div>

//       {/* Right: Main Hero Image */}
//       <div
//         className="flex-2 mb-10 md:mb-0 relative"
//         data-aos="fade-left"
//         data-aos-delay="100"
//       >
//         <div className="relative w-full max-w-xs sm:max-w-lg md:max-w-xl mx-auto md:mx-0 ">
//           <Swiper
//             modules={[Autoplay, EffectFade]}
//             effect="fade"
//             autoplay={{ delay: 4000, disableOnInteraction: false }}
//             loop={true}
//             className="rounded-none  sm:rounded-2xl"
//           >
//             {heroImages.map((img, i) => (
//               <SwiperSlide key={i}>
//                 <img
//                   src={img}
//                   alt={`Hero ${i + 1}`}
//                   className="w-full h-[300px] sm:h-[450px]  object-cover"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           {/* <img
//               src="/hero.png"
//               alt="Trendy Fashion Jewelry"
//               className="w-full rounded-2xl  transform hover:scale-105 transition-transform duration-500 "
//             /> */}
//           {/* <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-white/30"> */}
//           {/* <div className="flex items-center gap-2">
//                 <SparklesIcon className="w-6 h-6 text-accent" />
//                 <span className="font-medium text-heading">Trending Now</span>
//               </div> */}
//           {/* </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroContent = [
  {
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750316288/pexels-arnold-nagy-195342381-12002672_jd6wpx.jpg",
    title: "Your Fashion, Your Shine.",
    subtitle: "Shine Without Limits.",
    cta: "Explore Our Portfolio",
    // features: [
    //   "✓ Custom Steel Solutions",
    //   "✓ Precision Engineering",
    //   "✓ 10+ Years Experience"
    // ]
  },
  {
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750316287/pexels-heyho-6394590_pacgwu.jpg",
    title: "Luxury Looks. Everyday Prices.",
    subtitle: "Shine Without Limits.",
    cta: "View Our Projects",
    // features: [
    //   "✓ Architectural Metalwork",
    //   "✓ Structural Integrity",
    //   "✓ Sustainable Materials"
    // ]
  },
  {
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750316287/pexels-cottonbro-9428777_zgnh0c.jpg",
    title: "Be the Sparkle in Every Room.",
    subtitle: "Shine Without Limits.",
    cta: "Get a Free Quote",
    // features: [
    //   "✓ Security Integration",
    //   "✓ On-Time Delivery",
    //   "✓ Quality Assurance"
    // ]
  },
  {
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750316287/pexels-anastasiia-chaikovska-206547003-11744651_rczfio.jpg",
    title: "Slay Every Day with Statement Pieces.",
    subtitle: "Shine Without Limits.",
    cta: "Get a Free Quote",
    // features: [
    //   "✓ Security Integration",
    //   "✓ On-Time Delivery",
    //   "✓ Quality Assurance"
    // ]
  },
  {
    image: "https://res.cloudinary.com/dxscy1ixg/image/upload/v1750316286/pexels-settlemania-16940629_gajsr0.jpg",
    title: "Luxury Looks. Everyday Prices.",
    subtitle: "Shine Without Limits.",
    cta: "Explore",
    // features: [
    //   "✓ Security Integration",
    //   "✓ On-Time Delivery",
    //   "✓ Quality Assurance"
    // ]
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

 useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = heroContent[currentIndex];

  // Enhanced animation variants
  const textVariants = {
    enter: (dir) => ({
      y: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    },
    exit: (dir) => ({
      y: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    })
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.6
      }
    })
  };

  const bgVariants = {
    enter: { opacity: 0 },
    center: { 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 1.2, ease: "easeInOut" }
    }
  };

  return (
    <section 
      className="relative h-screen min-h-[90vh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background images with enhanced transition */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${currentContent.image})`,
            backgroundPosition: "center center"
          }}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center flex-col text-center text-white px-4">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={`text-${currentIndex}`}
            custom={direction}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="max-w-4xl mx-auto px-4"
          >
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {currentContent.title}
            </motion.h1>
            <motion.p className="text-xl md:text-2xl mb-8 font-light">
              {currentContent.subtitle}
            </motion.p>
            
            {/* Feature list */}
            {/* <motion.div className="mb-8 flex flex-col items-center">
              {currentContent.features.map((feature, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={featureVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-lg md:text-xl mb-2 flex items-center"
                >
                  <span className="mr-2 text-yellow-400">{feature.split('✓')[0]}</span>
                  {feature.split('✓')[1]}
                </motion.div>
              ))}
            </motion.div> */}

            {/* <motion.a
              href="#contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(255, 214, 0, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {currentContent.cta}
            </motion.a> */}
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots with improved interaction */}
        <div className="absolute bottom-12 flex space-x-3 z-20">
          {heroContent.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-4 h-4 rounded-full transition-colors ${
                index === currentIndex ? "bg-yellow-500" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                width: index === currentIndex ? 24 : 16
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </div>
        
        {/* Scroll indicator */}
        {/* <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;