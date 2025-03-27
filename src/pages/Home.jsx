import React from "react";
import CustomSlider from "../components/CustomSlider";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";

import Services from "../components/Services";
import Contact from "../components/Contact";
import VideoSection from "../components/VideoSection";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <>
      <Hero
        title={"Welcome to Moving Forward"}
        subtitle={
          <>
            Our <span className="font-bold font-primary text-green-500">mission</span> is
            powering progress through quality solutions and our{" "}
            <span className="font-bold text-green-500">vision</span> is to be
            the leader in the solutions we provide.
          </>
        }
      />
      <AboutUs />
      <Services />
      <section className="bg-gray-50 opacity-0">
        <CustomSlider />
      </section>
      <WhyUs />
      <VideoSection />
      <Contact />
    </>
  );
};

export default Home;
