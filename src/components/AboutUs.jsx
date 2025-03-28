import React from "react";
import { motion } from "framer-motion";
import aboutUsImage from "../assets/about-us.jpg"

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutUsImage}
            alt="moving forward about us image"
            className="rounded-2xl shadow-lg w-full"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            MOVING FORWARD METAL RESOURCES LIMITED was incorporated in June 10th 2021 with registration number RC: 1804478, our corporate headquarter is at No. 1 King Jaja Street, Plot 85 Bonny Hospital Road Back of Lion Gate, Bonny Island, Rivers State, Nigeria
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are a team of dedicated professionals committed to providing top-quality services.
            Our mission is powering progress through quality solutions.
          </p>
          <a
            href="/about"
            className="inline-block px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            LEARN MORE
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
