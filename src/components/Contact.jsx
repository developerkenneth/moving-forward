import React from "react";
import contactBg from "../assets/contact-bg.jpg";

const Contact = () => {
  return (
    <section
      className="opacity-0 transition-opacity duration-1000 ease-in-out min-h-screen flex items-center justify-center bg-cover bg-center relative p-6"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-4xl w-full bg-white bg-opacity-90 shadow-xl rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Get in Touch</h2>
        <p className="text-gray-600 text-center mb-8">
          Have questions? Feel free to reach out to us.
        </p>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
            <i className="ri-phone-fill text-blue-500 text-3xl mb-2"></i>
            <p className="font-semibold">Call Us</p>
            <p className="text-gray-600">+2349030960326</p>
          </div>
          <a
            href="mailto:contact@example.com"
            className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition hover:bg-green-50"
          >
            <i className="ri-mail-fill text-red-500 text-3xl mb-2"></i>
            <p className="font-semibold">Send Us an Email</p>
            <p className="text-gray-600">contact@movingforward.org.ng</p>
          </a>
          <div className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
            <i className="ri-map-pin-fill text-green-500 text-3xl mb-2"></i>
            <p className="font-semibold">Visit Us</p>
            <p className="text-gray-600">
            No. 1 King Jaja street, Plot 85 Bonny hospital road back of Lion gate, Bonny island, Rivers State, Nigeria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
