import React from "react";
import { FaTools, FaHardHat, FaIndustry, FaUsers, FaLeaf, FaShoppingCart } from "react-icons/fa";
import Hero from "../components/Hero";

const services = [
  {
    title: "Engineering Services",
    description: "MOVING FORWARD METAL RESOURCES LIMITED offers Comprehensive Electrical, Mechanical, and Civil Maintenance Works.",
    icon: <FaTools className="text-green-500 text-5xl" />, 
    details: [
      "MOVING FORWARD METAL RESOURCES LIMITED undertakes Electrical and Instrumentation, Mechanical and Civil     Maintenance works. ",
      "Electrical & Instrumentation Services – Instrumentation, Control and Automation of Loading System, Power Management System, Electrical Facilities Upgrades, Equipment Systems Earthling, HV/LV Design and Installation",
      "Mechanical Construction Services – Platform Revamp and Upgrade, Surfer Landing Construction, Flow Line Replacement, Spools Fabrication, General Fabrication and Hook Ups, Deck Extensions",
      "Civil Construction Services – Industrial & Office Buildings, Processing Facilities, Warehouses, Structural Maintenance and Upgrade, Structural Integrity Checks and Assessment. "
    ]
  },
  {
    title: "Facilities Operations & Maintenance",
    description: "Maintenance specialist services cover every aspect of operations and maintenance, from construction and commissioning to eventual decommissioning. We offer turn-key services across the life-cycle of a facility within the oil, gas and power industries covering such areas as: ",
    icon: <FaHardHat className="text-green-500 text-5xl" />, 
    details: [
      "Inspection Services & Risk Assessment",
      "Scaffolding & Corrosion Control",
      "Facilities Management ",
      "Hydro and Grit Blasting and Coating",
      "Fabricating/Electroplating",
      "Non Destructive Testing ",
      "Corrosion Control Services ",
      "Risk assessment processes ",
      "Plant rehabilitation "
    ]
  },
  {
    title: "Technical / Specialist Services",
    description: "Pipeline Cleaning, Inspection, and Industrial Services.",
    icon: <FaIndustry className="text-green-500 text-5xl" />, 
    details: [
      "Industrial Services - Scaffolding, Painting, Insulation, Fireproofing.",
      "Road Access (all trades, inclusive of electrical and steel installation) ",
      "Fabrication Maintenance",
      "Electrical design & installation.",
      "Heat Treatment.",
      "Welding.",
      "NDT & Inspections."
    ]
  },
  {
    title: "Manpower Outsourcing Services",
    description: "Provision of Skilled Personnel for Industrial Operations.",
    icon: <FaUsers className="text-green-500 text-5xl" />, 
    details: [
      "Provision of Personnel for Equipment Installation, Commissioning and Maintenance Support Services ",
      "Provision of Specialized Equipment Operators as may be required by Clients  Equipment Operators",
      "Provision of Pre-Commissioning Training, including venue selection and provision of Training Facilitators "
    ]
  },
  {
    title: "Environmental Services",
    description: "Specialist Cleaning, Landscaping, and Pest Control Services.",
    icon: <FaLeaf className="text-green-500 text-5xl" />, 
    details: [
      "Landscaping & Maintenance",
      "Pest Control / Fumigation",
      "Specialist Industrial Cleaning"
    ]
  },
  {
    title: "Procurement Services",
    description: "Procurement & Inventory Management for Industrial Needs.",
    icon: <FaShoppingCart className="text-green-500 text-5xl" />, 
    details: [
      "Steel and Hard Wares Supplies: - Pipes, Flat- Sheets, Angle Iron, Couplers, Reducers, Valves, Elbows, etc. ",
      "Tools/Equipment & Electrodes Supplies: - Electrodes, Area Argon and Structural Welding Rods. ",
      "Petrol and Diesel for Equipment and Industrial Services",
      "Supply of  Safety Equipment/Gadgets",
      "Supply of Furniture for Office and Residential  Purposes",
      "Supply of Furniture for Office and Residential  Purposes",
      "Supply of Building Materials"
    ]
  }
];

const Services = () => {
  return (
    <div className="bg-gray-50">
        <Hero 
        title={'Our Services'}
        subtitle={'Delivering Excellence Across Multiple Industries.'}
        />
      {/* Services Section */}
      <section className="max-w-7xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">What We Offer</h2>
        <p className="mt-2 text-gray-600">Explore our specialized services tailored for your needs.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <section key={index} className="opacity-0 duration-1000 ease-in-out bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <ul className="mt-4 text-gray-700 text-left list-disc list-inside">
                {service.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white text-center py-12 px-6">
        <h2 className="text-3xl font-semibold">Let's Work Together</h2>
        <p className="mt-4 text-lg">Contact us to learn more about our specialized services.</p>
        <a
          href="mailto:contact@movingforwardmetal.com"
          className="mt-6 inline-block bg-white text-green-600 hover:bg-gray-200 px-6 py-3 rounded-lg text-lg transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Services;
