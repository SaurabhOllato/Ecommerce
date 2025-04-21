import React, { useEffect, useRef, useState } from 'react'

export default function Reel() {
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
  return (
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
  )
}
