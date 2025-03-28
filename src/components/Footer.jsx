import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Footer() {
  const home = "home";
  return (
    <section className="opacity-0 transition-opacity duration-1000 ease-in-out">
      <motion.footer
        className="bg-gray-900 text-white py-8 mt-10 flex flex-col justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand Section */}

          <motion.div
            className="text-lg font-semibold tracking-wide text-center md:text-left"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-3">
              <NavLink to={"/"}>
                <img
                  className="bg-white rounded-md"
                  src={logo}
                  alt="moving forward logo"
                />
              </NavLink>
            </div>
            &copy; {new Date().getFullYear()} Moving Forward. All Rights
            Reserved.
          </motion.div>

          {/* Navigation Links */}
          <nav className="flex justify-center space-x-6 text-sm">
            {["Home", "About", "Services", "Contact"].map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <NavLink
                  to={`/${link != "Home" ? link : ""}`}
                  className={({ isActive }) =>
                    `transition px-4 py-2 ${
                      isActive
                        ? "text-blue-500 font-bold"
                        : "text-gray-700 hover:text-blue-400"
                    }`
                  }
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Company Address */}
          <div className="text-center md:text-right text-sm text-gray-400">
            <p>Moving Forward HQ</p>
            <p>
              No. 1 King Jaja Street, Plot 85 Bonny Hospital Road Back of Lion
              Gate, Bonny Island
            </p>
            <p>Rivers state, Nigeria</p>
            <p>Email: contact@movingforward.org.ng</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-6">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
            (Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            )
          )}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="text-center text-gray-400 text-xs mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Mission: Powering progress through quality solutions.
        </motion.div>
      </motion.footer>
    </section>
  );
}
