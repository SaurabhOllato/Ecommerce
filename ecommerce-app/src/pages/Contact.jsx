import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactPage = () => {
  // Sample coordinates for Mumbai (you can replace with your actual location)
  const mapLocation = {
    lat: 19.0760,
    lng: 72.8777,
    zoom: 15
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-4 py-12 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="How can we help you?"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition-all hover:shadow-pink-200 hover:translate-y-[-2px] w-full"
            >
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-start">
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Our Store
                </h3>
                <p className="text-gray-600">
                  123 Bloom Lane, Fashion Street<br />
                  Mumbai, Maharashtra – 400001
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-start">
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-gray-600">+91 87654 32109</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-start">
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600">support@elegantaura.in</p>
                <p className="text-gray-600">sales@elegantaura.in</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-start">
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Business Hours
                </h3>
                <p className="text-gray-600">Mon-Sat: 10am – 8pm</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Map Integration */}
          <div className="h-80 w-full rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Our Location"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${mapLocation.lat},${mapLocation.lng}&zoom=${mapLocation.zoom}`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Social Media Links (optional) */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Connect With Us
        </h3>
        <div className="flex justify-center space-x-6">
          {['facebook', 'instagram', 'twitter', 'pinterest'].map((social) => (
            <a
              key={social}
              href="#"
              className="bg-white p-3 rounded-full shadow-md hover:bg-pink-50 transition-colors"
              aria-label={social}
            >
              <img 
                src={`/icons/${social}.svg`} 
                alt={social} 
                className="h-6 w-6"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;