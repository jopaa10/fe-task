"use client";
import ArrowRightIcon from "../../public/assets/ArrowRightIcon";
import "./arrowButton.scss";

function ArrowButton({ buttonText }: { buttonText: string }) {
  const handleClick = () => {
    window.open("https://google.com", "_blank");
  };
  return (
    <button className="arrow-button" onClick={handleClick}>
      {buttonText}
      <span>
        <ArrowRightIcon
          stroke="var(--charterag-icon-bg-color-blue-dark)"
          width="4"
          height="8"
          strokeWidth="4"
        />
      </span>
    </button>
  );
}

export default ArrowButton;
