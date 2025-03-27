import {React, useEffect} from "react";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const PagesLayout = () => {

  const location = useLocation(); // ✅ This will now work

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, [location.pathname]); // Runs when route changes

  return (
    <>
      <Header />
      <main className='font-primary'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PagesLayout;
