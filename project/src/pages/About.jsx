import React from "react";
import background from "../assets/background.jpg";

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-8"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-white bg-opacity-80 p-10 rounded-2xl shadow-lg max-w-3xl">
        <h1 className="text-5xl font-bold text-blue-600 text-center mb-6">About Our Website</h1>
        <p className="text-lg text-gray-700 text-center mb-4">
          Welcome to our BestElectronics4U! At BestElectronics4U, our mission is simple — to connect customers with the best in modern electronics through a smooth, reliable, and enjoyable online experience.
        </p>
        <p className="text-md text-gray-900 text-center">
        Our goal is to offer a wide selection of quality products, paired with a simple and seamless shopping experience. We are committed to helping you discover the best electronics to fit your needs, whether you're upgrading your gear, searching for the perfect gift, or exploring the latest technology trends.

        Thank you for choosing BestElectronics4U — your satisfaction is our top priority.
        </p>
      </div>
    </div>
  );
};

export default About;
