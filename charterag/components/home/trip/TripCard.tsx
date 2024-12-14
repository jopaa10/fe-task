import { TripCard as TripCardType } from "../../types/components";

const TripCard = ({ icon, header, text }: TripCardType) => {
  return (
    <div className="vacations__card" data-aos="flip-left">
      <div className="card-container">
        <span>{icon}</span>
        <h3>{header}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default TripCard;
