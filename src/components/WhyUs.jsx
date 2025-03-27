import React from "react";
import { motion } from "framer-motion";
import { RiShieldCheckLine, RiCustomerService2Line, RiSpeedLine, RiStarSmileLine } from "react-icons/ri";

const features = [
  {
    icon: <RiShieldCheckLine className="text-5xl text-green-500" />,
    title: "Trusted & Secure",
    description: "With us you can be 100% sure that your job is safe hands",
  },
  {
    icon: <RiCustomerService2Line className="text-5xl text-green-500" />,
    title: "24/7 Support",
    description: "Our dedicated team is available round the clock to assist you anytime, anywhere.",
  },
  {
    icon: <RiSpeedLine className="text-5xl text-green-500" />,
    title: "Fast & Reliable",
    description: "We provide quick solutions with high reliability to meet your needs efficiently.",
  },
  {
    icon: <RiStarSmileLine className="text-5xl text-green-500" />,
    title: "Customer Satisfaction",
    description: "Our priority is your satisfaction. We strive to exceed your expectations.",
  },
];

const WhyUs = () => {
  return (
    <section className=" opacity-0 transition-opacity duration-1000 ease-in-out py-16 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>
        <p className="text-gray-600 mb-12">
          We stand out because of our commitment to excellence, reliability, and customer satisfaction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
