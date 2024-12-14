"use client";

import "./testimonial.scss";
import { useEffect, useState } from "react";
import StarRatingIcon from "../../../public/assets/StarRatingIcon";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../../utils/mockData";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleRenderStars = (rating: number) => {
    const totalStars = 5;
    const filledStars = Array(rating).fill(<StarRatingIcon />);
    const unfilledStars = Array(totalStars - rating).fill("☆");
    return [...filledStars, ...unfilledStars].map((star, index) => (
      <span key={index}>{star}</span>
    ));
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="testimonial">
      <div className="testimonial__cards">
        <div className="testimonial__cards__header">
          <h3 className="header-title">Our guests loved it!</h3>
        </div>
        <div className="testimonial__cards__container">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              index={index}
              activeIndex={activeIndex}
              handleRenderStars={handleRenderStars}
            />
          ))}
        </div>
        <div className="testimonial__cards__dots">
          {testimonials.map((_, index) => (
            <span
              key={`dot-${index}`}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
