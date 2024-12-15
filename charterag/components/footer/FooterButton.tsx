"use client";
import ArrowUpIcon from "../../public/assets/ArrowUpIcon";

const FooterButton = () => {
  const handleBackToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <button onClick={handleBackToTop}>
      <span>
        <ArrowUpIcon />
      </span>
    </button>
  );
};

export default FooterButton;
