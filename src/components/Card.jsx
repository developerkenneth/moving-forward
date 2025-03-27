import Tilt from "react-parallax-tilt";
import { NavLink } from "react-router-dom";

const Card = ({ title, subtitle, image, alt, link }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionSpeed={500}
    >
      <section className=" opacity-0 transition-opacity duration-1000 ease-in-out lg:w-full bg-white rounded-xl shadow-lg overflow-hidden p-4 transform h-full">
        <img
          src={image}
          alt={alt}
          className="w-full h-40 object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-3 mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>

        {link ? (
          <div className="my-6 text-center">
            <NavLink
              to={"/about"}
              className="btn bg-green-500 mt-6 text-gray-100 text-xs"
            >
              Learn More
            </NavLink>
          </div>
        ) : null}
      </section>
    </Tilt>
  );
};

export default Card;
