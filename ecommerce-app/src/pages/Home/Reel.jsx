import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Reel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  const reels = [
    {
      id: 1,
      video: "/videos/Video-346.mp4",
      title: "Rose Gold Bridal Set",
      collection: "bridal-collection",
    },
    {
      id: 1,
      video: "/videos/Video-346.mp4",
      title: "Rose Gold Bridal Set",
      collection: "bridal-collection",
    },
    {
      id: 1,
      video: "/videos/Video-346.mp4",
      title: "Rose Gold Bridal Set",
      collection: "bridal-collection",
    },
    {
      id: 1,
      video: "/videos/Video-346.mp4",
      title: "Rose Gold Bridal Set",
      collection: "bridal-collection",
    },
    {
      id: 1,
      video: "/videos/Video-346.mp4",
      title: "Rose Gold Bridal Set",
      collection: "bridal-collection",
    },
    {
      id: 2,
      video: "/videos/Video-346.mp4",
      title: "Diamond Stud Earrings",
      collection: "earrings-collection",
    },
    {
      id: 3,
      video: "/videos/Video-346.mp4",
      title: "Pearl Necklace Set",
      collection: "necklace-collection",
    },
    {
      id: 4,
      video: "/videos/Video-346.mp4",
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
  return (
    <section className="px-4 mb-10 relative">
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
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        className="!px-4 !pb-10"
      >
        {reels.map((reel) => (
          <SwiperSlide key={reel.id}>
            <div className="bg-white rounded-xl hover:shadow-lg transition duration-300 overflow-hidden">
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
                  onClick={() => (window.location.href = `/shop/${reel.collection}`)}
                >
                  🛒 Shop Collection
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev !absolute left-2 top-1/2 -translate-y-1/2 z-10  rounded-full p-2  transition">
          <ChevronLeft className="text-heading" size={10} />
        </div>
        <div className="swiper-button-next !absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2  transition">
          <ChevronRight className="text-heading" size={10} />
        </div>
      </Swiper>
    </div>
  </section>
  );
}
