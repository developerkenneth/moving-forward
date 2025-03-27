import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    title: "Slide One",
    text: "This is the first slide description.",
    image: "src/assets/slide-image1.jpg",
  },
  {
    id: 2,
    title: "Slide Two",
    text: "This is the second slide description.",
    image: "src/assets/slide-image2.jpg",
  },
  {
    id: 3,
    title: "Slide Three",
    text: "This is the third slide description.",
    image: "src/assets/slide-image3.jpg",
  },
];

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="w-full max-w-3xl mx-auto p-6 opacity-0 transition-opacity duration-1000 ease-in-out">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img src={slide.image} alt={slide.title} className="w-full rounded-xl shadow-lg h-auto" />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-4 rounded-lg">
              <h2 className="text-xl font-bold">{slide.title}</h2>
              <p className="text-sm">{slide.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CustomSlider;
