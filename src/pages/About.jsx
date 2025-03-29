import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import aboutStory from "../assets/about-story.jpg";
import missionSvg from "../assets/svg/mission.svg";
import visionSvg from "../assets/svg/vision.svg";
import coreValuesSvg from "../assets/svg/core-values.svg";
import goalsSvg from "../assets/svg/goals.svg";
import cooperateImg from "../assets/corporate.jpg"
import aboutPolicies from "../assets/about-policies.jpg"
import ceo from "../assets/CEO.jpg";
import cfo from "../assets/lucky samuel-CFO.jpg";
import cao from "../assets/Kelvin Kareem-CAO.jpg";
import chiefFinancialOfficer from "../assets/Oliver Michael -CFO.jpg";



const About = () => {
  return (
    <div className="bg-gray-50">
      <Hero
        title={"About us"}
        subtitle={"Learn more about our journey and values."}
      />
      {/* Company Story Section */}
      <section className="max-w-6xl mx-auto p-4 py-12 md:px-6 grid grid-cols-1 gap-2 md:gap-x-4 md:grid-cols-2 my-6">
        <div className="pt-4 relative">
          <article>
            <header className="block">
              <h2 className="text-3xl font-semibold text-gray-800">
                Our Story
              </h2>
              <div className="border-2 border-gray-600 w-10"></div>
            </header>

            <p className="mt-4 text-gray-600 leading-relaxed">
              <span className="font-bold">
                MOVING FORWARD METAL RESOURCES LIMITED
              </span>{" "}
              was incorporated in June 10th 2021 with registration number RC:
              1804478, our corporate headquarter is at No. 1 King Jaja Street,
              Plot 85 Bonny Hospital Road Back of Lion Gate, Bonny Island,
              Rivers State, Nigeria
            </p>

            <footer className=" hidden md:block p-4 my-4 font-extralight italic absolute bottom-2">
              Our story
            </footer>
          </article>
        </div>

        <div>
          <img
            src={aboutStory}
            alt="about moving forward story"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className=" max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 gap-4 lg:gap-10 md:grid-cols-2 my-6">
        <div>
          <Card
            title={"OUR MISSION"}
            subtitle={"Powering progress through quality solutions."}
            link={false}
            image={missionSvg}
            alt={"card image for our mission"}
          />
        </div>

        <div>
          <Card
            title={"OUR VISION"}
            subtitle={"To be the leader in the solutions we provide"}
            link={false}
            image={visionSvg}
            alt={"card image for our vision"}
          />
        </div>

        <Card
          title={"OUR CORE VALUES"}
          subtitle={
            <div className="p-6">
              <ul className="list-disc">
                <li>
                  Innovation: We create an environment for the development of
                  innovative ideas that facilitate diversification and delivery
                  of value added services
                </li>
                <li>
                  Respect: Demonstrate regard for people and the environment
                </li>
                <li>
                  Integrity: We deliver what we promise within agreed behavioral
                  codes
                </li>
                <li>Safety: No harm to people and environment</li>
                <li>Excellence: We strive for the best in all we do</li>
                <li>Resilience: We deliver against all odds</li>
              </ul>
            </div>
          }
          link={false}
          image={coreValuesSvg}
          alt={"SVG of moving forward core values card"}
        />

        <Card
          title={"OUR GOALS"}
          subtitle={
            <div className="p-6">
              <ul className="list-disc">
                <li>
                  Client satisfaction is our future business, our goal is to
                  move beyond client satisfaction to client loyalty by
                  completing our work on schedule, within budget and by
                  exceeding our customer expectation.
                </li>
                <li>
                  We use our expertise and creativity to enhance the value of
                  the services we provide to our clients and our company.
                </li>
                <li>
                  To provide a customer focused service that delivers high
                  quality engineering projects in a safe, professional and
                  timely manner.
                </li>
                <li>
                  Our clients deserve to have their job executed properly the
                  first time. Quality is a requirement, not only of the final
                  product, but also in our relationships with our clients and
                  business partners.
                </li>
                <li>
                  We are a disciplined company that focuses on market areas
                  where we have expertise and where we are or can be market
                  leaders
                </li>
                <li>
                  To deliver sustainable and energy efficient solution that
                  embrace innovation, quality and value.
                </li>
              </ul>
            </div>
          }
          link={false}
          image={goalsSvg}
          alt={""}
        />
      </section>

      {/* for corperate policies section */}

      <section className="max-w-6xl mx-auto">
        <div className="p-6 md:p-16 lg:p-26"
          style={{
            backgroundImage: `url(${cooperateImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 rounded-2xl"></div>
          <div className="relative z-10 rounded-2xl">
            <article className="p-6 bg-black/60 rounded-2xl">
              <header className="block">
                <h2 className="text-3xl font-semibold text-gray-400">
                Policies Strategic Objectives
                </h2>
                <div className="border-2 border-gray-300 w-10"></div>
              </header>

              <p className="mt-4 text-gray-200 leading-relaxed">
                <span className="font-bold">
                  MOVING FORWARD METAL RESOURCES LIMITED
                </span>
                has a comprehensive policies statement. Which served as a governing principle upon which our operations are revolves, in addition to the <span className="font-bold">
                  MOVING FORWARD METAL RESOURCES LIMITED
                </span> HSE Policy, there are polices that exists for specific aspects of HSE management system, such as the Driving/Night driving policy, seat belt policy, personal protective equipment policy, waste management policy, drugs and Alcohol policy, no smoking policy, Reward/ Sanction policy, Access control policy, Sub-Contractor policy, Audit inspection policy, Community Affairs policy, and Emergency response policy. These are displayed at strategic locations at office and site. No activity is to commence if full compliance with the HSE policy cannot be guaranteed. Ongoing activities are to be suspended if it is recognized that such a guarantee can no longer be maintained. <span className="font-bold">
                  MOVING FORWARD METAL RESOURCES LIMITED
                </span> is committed to developing an active HSE program, supported by management and staff.
              </p>

              <footer className=" hidden md:block p-4 my-4 font-extralight italic absolute bottom-2">
                Our story
              </footer>
            </article>
          </div>
        </div>
      </section>


      {/* co-operate policies section */}

      <section className="max-w-6xl mx-auto p-4 py-12 md:px-6 grid grid-cols-1 gap-2 md:gap-x-4 md:grid-cols-2 my-6">
        <div className=" relative ">
          <article>
            <header className="block">
              <h2 className="text-3xl font-semibold text-gray-800">
              Corporate Policies
              </h2>
              <div className="border-2 border-gray-600 w-10"></div>
            </header>

            <p className="mt-4 text-gray-600 leading-relaxed">
              
              Our governing principle: To excel in growth, profitability and customer loyalty. In its company policy, <span className="font-bold">
                MOVING FORWARD METAL RESOURCES LIMITED
              </span> expresses the fundamental values and long-term objectives that apply to all employees. In the course of their professional activities, each and every employee should think and act in accordance with this company policy so as to achieve the aim we all share: business success
            </p>

            <footer className=" hidden md:block p-4 my-4 font-extralight italic absolute bottom-2">
              Our story
            </footer>
          </article>
        </div>

        <div>
          <img className="rounded-2xl"
            src={aboutPolicies}
            alt="coporate policies"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {[
            {
              name: "Audu Kareem Samuel",
              role: "CEO",
              img:ceo,
            },
            {
              name: "Lucky samuel",
              role: "CFO",
              img:cfo,
            },
            {
              name: "Kelvin Kareem",
              role: "CAO",
              img: cao,
            },
            {
              name: "Oliver udor Micheal",
              role: "Chief Financial Officer",
              img:chiefFinancialOfficer,
            },
          ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={member.img}
                alt={member.name}
                className="w-50 h-50 rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white text-center py-12 px-6">
        <h2 className="text-3xl font-semibold">Join Our Journey</h2>
        <p className="mt-4 text-lg">
          Want to work with us or learn more? Get in touch today.
        </p>
        <a
          href="mailto:contact@company.com"
          className="mt-6 inline-block bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg transition"
        >
          CONTACT US
        </a>
      </section>
    </div>
  );
};

export default About;
