import { useEffect, useState } from "react";
import "./Hero.css";

const images = [
  // "/images/bg2.webp",
  // "/images/bg5.jpeg",
  // "/images/bg8.jpg",
  "/images/bg4.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % images.length);
  //   }, 3000); 

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <section className="hero-slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-overlay">
        <h1>Discover Sports Events Across India</h1>
        <p>
          Marathons, walkathons, trekking, cycling and more —
          find your next challenge with Active Pulse.
        </p>
      </div>

      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
