import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import contactImage from "../assets/contact-image.jpg"

const Contact = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${contactImage})` }}
      >
        <div className="bg-black/70 p-8 rounded-lg text-center max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-6">
            We'd love to hear from you! Reach out via email or phone.
          </p>

          <div className="flex flex-col space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-green-400 text-2xl" />
              <a
                href="mailto:contact@movingforwardmetal.com"
                className="text-lg hover:text-green-300"
              >
                contact@movingforwardmetal.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-green-400 text-2xl" />
              <p className="text-lg">+2349030960326</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-green-400 text-2xl" />
              <p className="text-lg">
                No. 1 King Jaja Street, Plot 85 Bonny Hospital Road Back of Lion
                Gate, Bonny Island
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/+2349030960326"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-lg transition text-white"
          >
            <FaWhatsapp className="mr-2 text-2xl" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
