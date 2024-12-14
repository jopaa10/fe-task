import Image from "next/image";
import { Testimonial } from "../../types/components";
import { JSX } from "react";

const TestimonialCard = ({
  index,
  activeIndex,
  name,
  rating,
  text,
  title,
  handleRenderStars,
}: Testimonial & {
  activeIndex: number;
  index: number;
  handleRenderStars: (rating: number) => JSX.Element[];
}) => {
  return (
    <div
      className={`testimonial__cards__card ${
        index === activeIndex ? "active" : ""
      }`}
      key={index}
      style={{
        transform: `translateX(-${activeIndex * 100}%)`,
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <div className="card-header">
        <Image src={"/images/avatar.png"} alt="avatar" width={40} height={40} />
        <p className="name">{name}</p>
        <div className="star-rating">{handleRenderStars(rating)}</div>
      </div>
      <div className="card-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
