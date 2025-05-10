import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

export default function Reel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [selectedReel, setSelectedReel] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [likedReels, setLikedReels] = useState({});

  const reels = [
    {
      id: 1,
      video: "videos/Video-346.mp4",
      title: "Rose Gold Bridal Set",
      collection: "bridal-collection",
    },
    {
      id: 2,
      video: "videos/Video-346.mp4",
      title: "Diamond Stud Earrings",
      collection: "earrings-collection",
    },
    {
      id: 3,
      video: "videos/Video-346.mp4",
      title: "Pearl Necklace Set",
      collection: "necklace-collection",
    },
    {
      id: 4,
      video: "videos/Video-346.mp4",
      title: "Silver Anklet Collection",
      collection: "anklet-collection",
    },
    {
      id: 4,
      video: "videos/Video-346.mp4",
      title: "Silver Anklet Collection",
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

  const handleLike = (id) => {
    setLikedReels((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleShare = (collection) => {
    const link = `${window.location.origin}/shop/${collection}`;
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const openFullScreen = (reel) => {
    setSelectedReel(reel);
    setShowFullScreen(true);
  };

  const closeFullScreen = () => {
    setShowFullScreen(false);
    setSelectedReel(null);
    setIsMuted(true);
  };

  return (
    <section className="px-4 lg:mb-3 mb-0 relative">
      <div className="text-center my-10">
        <p className="text-gray-400 text-sm mb-2">
          Scroll through style videos & grab your fav pieces!
        </p>
        <div className="flex items-center justify-center gap-4">
          <span className="hidden sm:block flex-1 h-px bg-gray-200"></span>
          <div className="inline-block">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wider">
              Shop the Look
            </h2>
            <div className="w-10 h-0.5 bg-red-400 mx-auto mt-1"></div>
          </div>
          <span className="hidden sm:block flex-1 h-px bg-gray-200"></span>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="hidden md:flex button-prev z-10 absolute left-[-20px] top-[39%] -translate-y-1/2 cursor-pointer bg-white shadow-md rounded-full p-2 hover:bg-accent  transition-all duration-200">
          <ChevronLeft className="text-accent hover:text-white w-6 h-6  transition-all duration-300" />
        </div>

        <div className="hidden md:flex button-next z-10 absolute right-[-20px] top-[39%] cursor-pointer -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-accent transition-all duration-200">
          <ChevronRight className="text-accent w-6 h-6 hover:text-white transition-all duration-300" />
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.pagination.init();
              swiper.pagination.update();
            }, 0);
          }}
          className="!px-4 !pb-10"
        >
          {reels.map((reel) => (
            <SwiperSlide key={reel.id}>
              <div
                className="bg-white rounded-xl hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer"
                onClick={() => openFullScreen(reel)}
              >
                <video
                  src={reel.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-4 text-center bg-white">
                  <h4 className="font-semibold text-heading text-lg mb-2">
                    {reel.title}
                  </h4>
                  <button
                    className="text-sm font-medium text-amber-600 hover:text-amber-800 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `/shop/${reel.collection}`;
                    }}
                  >
                    🛒 Shop Collection
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <div className="button-prev !absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2">
            <ChevronLeft className="text-heading" size={16} />
          </div>
          <div className="button-next !absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2">
            <ChevronRight className="text-heading" size={16} />
          </div> */}
           <div className="custom-swiper-pagination mt-6 flex justify-center" />  
        </Swiper>
       
      </div>

      {/* Fullscreen Reel Modal */}
      {showFullScreen && selectedReel && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col justify-center items-center">
          <video
            src={selectedReel.video}
            autoPlay
            loop
            muted={isMuted}
            className="w-full h-full object-cover"
          />

          {/* Controls on top right */}
          <div className="absolute top-5 right-5 flex flex-col gap-4">
            <button
              onClick={() => handleLike(selectedReel.id)}
              className="text-white"
            >
              <Heart
                size={30}
                fill={likedReels[selectedReel.id] ? "red" : "none"}
                stroke="white"
              />
            </button>
            <button
              onClick={() => handleShare(selectedReel.collection)}
              className="text-white"
            >
              <Share2 size={30} />
            </button>
            <button onClick={handleMuteToggle} className="text-white">
              {isMuted ? <VolumeX size={30} /> : <Volume2 size={30} />}
            </button>
            <button onClick={closeFullScreen} className="text-white mt-4">
              <X size={30} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
