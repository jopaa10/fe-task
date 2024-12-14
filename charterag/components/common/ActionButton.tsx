"use client";

import { redirect } from "next/navigation";
import InstagramIcon from "../../public/assets/InstagramIcon";
import "./actionButton.scss";

function ActionButton({
  text = "",
  displayIcon = false,
  bgColor = "#FFD60A",
  redirectRoute = "",
}) {
  return (
    <button
      className="action-button"
      style={{ backgroundColor: bgColor }}
      onClick={() => redirect(`${redirectRoute}`)}
    >
      {text}
      {displayIcon && (
        <span>
          <InstagramIcon fill="#000" />
        </span>
      )}
    </button>
  );
}

export default ActionButton;
