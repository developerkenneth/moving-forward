import { RiAddFill, RiHome8Fill, RiSecurePaymentFill } from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Services = () => {
  return (
    <section className="opacity-0 transition-opacity duration-1000 ease-in-out">
      <div className=" mt-10 ">
        <div className="text-gray-700 text-center">
          <h1 className="title ">How we can be of help</h1>
          <h2 className="subtitle">
            {" "}
            We provide the following services to interested students
          </h2>
        </div>

        <div className="px-5 md:px-10 text-gray-700">
          <div className="grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-4 lg:gap-4 mt-10">
            <div className=" px-4 py-10 h-full">
              <Card
                link={true}
                title={"ENGINEERING SERVICES"}
                image={"src/assets/svg/engineering_services.svg"}
                subtitle={
                  <ul className="list-disc ml-2">
                    <li>
                      MOVING FORWARD METAL RESOURCES LIMITED undertakes
                      Electrical and Instrumentation, Mechanical and Civil
                      Maintenance works
                    </li>
                    <li>
                      Electrical & Instrumentation Services – Instrumentation,
                      Control and Automation of Loading System, Power Management
                      System, Electrical Facilities Upgrades, Equipment Systems
                      Earthling, HV/LV Design and Installation
                    </li>
                    <li>
                      Mechanical Construction Services – Platform Revamp and
                      Upgrade, Surfer Landing Construction, Flow Line
                      Replacement, Spools Fabrication, General Fabrication and
                      Hook Ups, Deck Extensions.
                    </li>
                  </ul>
                }
              />
            </div>

            <div className=" px-4 py-10 h-full">
              <Card
                link={true}
                image={"src/assets/svg/maintenance-services.svg"}
                title={"FACILITIES OPERATIONS & MAINTENANCE SERVICES"}
                subtitle={
                  <>
                    <h3>
                      MOVING FORWARD METAL RESOURCES LIMITED Operations and
                      Maintenance specialist services cover every aspect of
                      operations and maintenance, from construction and
                      commissioning to eventual decommissioning. We offer
                      turn-key services across the life-cycle of a facility
                      within the oil, gas and power industries covering such
                      areas as:
                    </h3>
                    <ul className="list-disc ml-2">
                      <li>Inspection Services </li>
                      <li>Facilities Management </li>
                      <li>Hydro and Grit Blasting and Coating</li>
                      <li>Scaffolding Services</li>
                      <li>Corrosion Control Services </li>
                      <li>These and more...</li>
                    </ul>
                  </>
                }
              />
            </div>

            <div className=" px-4 py-10 h-full">
              <Card
                link={true}
                image={"src/assets/svg/technical_services.svg"}
                alt={"technical/specialist services"}
                title={"TECHNICAL/SPECIALIST SERVICES"}
                subtitle={
                  <ul className="list-disc ml-2">
                    <li>Pipeline Cleaning </li>
                    <li>Pipeline in-Line inspection </li>
                    <li>Pipeline external coating inspection and recovery </li>
                    <li>
                      Pipeline Cathodic Protection, inspection and evaluation
                    </li>
                    <li>
                      Installation and Management of Pipeline remote-measuring
                      system of Cathodic Protection, pipeline inspection and
                      evaluation of corrosion defect.
                    </li>
                    <h2 className="font-bold">
                      Industrial & Technical Services{" "}
                    </h2>
                    <li>
                      Industrial Services - Scaffolding, Painting, Insulation,
                      Fireproofing
                    </li>
                    <li>
                      Road Access (all trades, inclusive of electrical and steel
                      installation) ...
                    </li>
                  </ul>
                }
              />
            </div>

            <div className=" px-4 py-10 h-full">
              <Card
                link={true}
                image={"src/assets/svg/procurement_services.svg"}
                alt={"technical/procurement services"}
                title={"PROCUREMENT SERVICES"}
                subtitle={
                  <ul className="list-disc ml-2">
                    <li>Steel and Hard Wares Supplies: - Pipes, Flat- Sheets, Angle Iron, Couplers, Reducers, Valves, Elbows, etc. </li>
                    <li>Tools/Equipment & Electrodes Supplies: - Electrodes, Area Argon and Structural Welding Rods. </li>
                    <li>Petrol and Diesel for Equipment and Industrial Services </li>
                    <li>Supply of  Safety Equipment/Gadgets</li>
                    <li>Supply of Furniture for Office and Residential  Purposes</li>
                    <li>Fresh Water Supply to Locations Platform </li>
                    <li>Supply of Building Materials</li>
                  </ul>
                }
              />
            </div>
            
            <div className=" px-4 py-10 h-full">
              <Card
                link={true}
                image={"src/assets/svg/manpower_services.svg"}
                alt={"Man power outsourcing services"}
                title={"MANPOWER OUTSOURCING SERVICES"}
                subtitle={
                  <>
                    
                    <ul className="list-disc ml-2">
                      <li>Provision of Personnel for Equipment Installation, Commissioning and Maintenance Support Services </li>
                      <li>Provision of Specialized Equipment Operators as may be required by Clients </li>
                      <li>Provision of Pre-Commissioning Training, including venue selection and provision of Training Facilitators </li>
                    </ul>
                  </>
                }
              />
            </div>

            <div className=" px-4 py-10 h-full">
              <Card
                link={true}
                image={"src/assets/svg/environment_services.svg"}
                alt={"Environmental services"}
                title={"ENVIRONMENTAL SERVICES"}
                subtitle={
                  <ul className="list-disc ml-2">
                    <li>Specialist Cleaning </li>
                    <li>Landscaping & Maintenance</li>
                    <li>Pest Control /Fumigation </li>
                  </ul>
                }
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
