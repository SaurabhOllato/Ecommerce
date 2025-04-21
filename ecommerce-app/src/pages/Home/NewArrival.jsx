import React from 'react'
import { Link } from 'react-router-dom'

export default function NewArrival() {
  return (
    <section className=" py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-heading">
            <span className="text-accent">✨</span> New Arrivals{" "}
            <span className="text-accent">✨</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 rounded-sm">
            {/* Product Cards */}
            {[
              {
                name: "Elegant Pearl Earrings",
                price: "₹499",
                image: "/Ring.jpeg",
              },
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
              {
                name: "Stylish Layered Bracelet",
                price: "₹649",
                image: "/Bracelet.jpeg",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm border first-letter: border-primary/20  overflow-hidden  transition duration-300 group"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <div className="relative overflow-hidden h-60 ">
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
                  <button className="w-full bg-gray/90 border text-buttonText py-2.5 rounded-lg  transition-all font-medium shadow-sm hover:shadow-accent/20">
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
              Explore
            </Link>
          </div>
        </div>
      </section>
  )
}
