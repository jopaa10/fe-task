"use client";

import Image from "next/image";
import ArrowLeftIcon from "../../../public/assets/ArrowLeftIcon";
import ArrowRightIcon from "../../../public/assets/ArrowRightIcon";
import { SliderData as SliderDataType } from "../../types/components";
import { useState } from "react";
import ArrowButton from "../../common/ArrowButton";
import { sliderData } from "../../../utils/mockData";

const CrewSliderCard = ({
  changeFlexDirection = false,
  imageSrc,
  title,
  imageTitle,
  imageDescription,
  description,
  buttonText,
}: SliderDataType) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handlePrevious = () => {
    setHasInteracted(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setHasInteracted(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImage = sliderData[currentIndex];

  return (
    <div
      className="slider-container"
      style={{ flexDirection: changeFlexDirection ? "row-reverse" : "row" }}
    >
      <div className="slider-image">
        <button
          className="arrow-left"
          onClick={handlePrevious}
          aria-label="previous button"
        >
          <ArrowLeftIcon />
        </button>
        <Image
          src={hasInteracted && currentImage ? currentImage.imageSrc : imageSrc}
          width={555}
          height={500}
          alt=""
        />
        <button
          className="arrow-right"
          onClick={handleNext}
          aria-label="next button"
        >
          <ArrowRightIcon
            stroke="#5D5A88"
            width="24"
            height="24"
            strokeWidth="2"
          />
        </button>
        <p className="title">{imageTitle}</p>
        <p className="description">{imageDescription}</p>
      </div>
      <div className="slider-text">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <ArrowButton buttonText={buttonText} />
      </div>
    </div>
  );
};

export default CrewSliderCard;
