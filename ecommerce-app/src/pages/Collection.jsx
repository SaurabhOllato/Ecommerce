import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const collections = [
  {
    name: "Necklaces",
    image: "/Bracelet.jpeg",
    description: "Elegant neckpieces for every occasion",
    items: 42,
    newArrival: true
  },
  {
    name: "Earrings",
    image: "/Bracelet1.jpeg",
    description: "Statement pieces to frame your face",
    items: 36,
    newArrival: false
  },
  {
    name: "Bracelets",
    image: "/Kangan.jpeg",
    description: "Delicate adornments for your wrists",
    items: 28,
    newArrival: true
  },
  {
    name: "Rings",
    image: "/Ring.jpeg",
    description: "Perfect circles of beauty for your fingers",
    items: 54,
    newArrival: false
  },
  {
    name: "Anklets",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToyRg_0ie6g7gkt4ALb0_i_623Dqpp-mEvzA&s",
    description: "Subtle charms for your graceful steps",
    items: 18,
    newArrival: true
  },
  {
    name: "Hair Accessories",
    image: "data:image/jpeg;base64,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",
    description: "Sparkling accents for your tresses",
    items: 23,
    newArrival: false
  },
  {
    name: "Bridal Sets",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToyRg_0ie6g7gkt4ALb0_i_623Dqpp-mEvzA&s",
    description: "Complete looks for your special day",
    items: 15,
    newArrival: false
  },
  
];

const CollectionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Discover Our <span className="text-pink-600">Collections</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our carefully curated jewelry collections designed to complement every style and occasion.
        </p>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {collections.map((collection, index) => (
          <Link 
            to={`/collections/${collection.name.toLowerCase().replace(/\s+/g, '-')}`}
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Collection Image */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* New Arrival Badge */}
              {collection.newArrival && (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-sm">
                  <Sparkles className="h-4 w-4 text-pink-600 mr-1" />
                  <span className="text-xs font-medium text-pink-600">New</span>
                </div>
              )}
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Collection Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold tracking-wide mb-1">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-white/80 mb-2">
                    {collection.description}
                  </p>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {collection.items} items
                  </span>
                </div>
                <div className="bg-pink-600 group-hover:bg-pink-700 p-2 rounded-full transition-colors duration-300">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Can't Find What You're Looking For?
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-pink-600 hover:bg-pink-700 transition-colors duration-300"
        >
          Contact Our Stylists
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default CollectionPage;