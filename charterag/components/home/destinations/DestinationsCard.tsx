"use client";
import Image from "next/image";
import ArrowRightIcon from "../../../public/assets/ArrowRightIcon";
import ProgressBar from "../../common/progressBar";
import { DestinationInfo } from "../../types/components";
import { redirect } from "next/navigation";

function DestinationsCard({
  img,
  price,
  routeText,
  progressWidthParty,
  progressWidthAdventure,
}: DestinationInfo) {
  return (
    <div className="destinations__card">
      <Image src={img} alt="" width={1000} height={404} />
      <div className="overlay">
        <div className="route-info">
          <p className="from-text">From €{price}/person</p>
          <button
            className="route-text"
            onClick={() => redirect(`/${routeText}`)}
          >
            {routeText} route
            <span>
              <ArrowRightIcon />
            </span>
          </button>
        </div>
        <div className="progress-container">
          <div className="progress-item">
            <span className="label">Party</span>
            <ProgressBar progressWidth={`${progressWidthParty}`} />
          </div>
          <div className="progress-item">
            <span className="label">Adventure</span>
            <ProgressBar progressWidth={`${progressWidthAdventure}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationsCard;
