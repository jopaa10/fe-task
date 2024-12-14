const TripCard = ({ icon, header, text }) => {
  return (
    <div className="vacations__card">
      <div className="card-container">
        <span>{icon}</span>
        <h3>{header}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default TripCard;
