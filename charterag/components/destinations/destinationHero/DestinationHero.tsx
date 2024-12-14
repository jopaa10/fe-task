import AgeRangeIcon from "../../../public/assets/AgeRangeIcon";
import BoatIcon from "../../../public/assets/BoatIcon";
import CalendarIcon from "../../../public/assets/CalendarIcon";
import PeopleIcon from "../../../public/assets/PeopleIcon";
import RatingIcon from "../../../public/assets/RatingIcon";
import WifiIcon from "../../../public/assets/WifiIcon";
import "./destination-hero.scss";

const items = [
  { icon: <BoatIcon />, label: "party vibe" },
  { icon: <PeopleIcon />, label: "up to 40 people" },
  { icon: <AgeRangeIcon />, label: "20 - 40 age range" },
  { icon: <WifiIcon />, label: "Free wifi" },
  { icon: <CalendarIcon />, label: "July | August" },
];

const DestinationHero = () => {
  return (
    <section className="destination">
      <div className="destination__hero">
        <div className="text-section">
          <p className="title">party route</p>
          <p className="text">The best stories are yet to be told</p>
        </div>
      </div>
      <div className="description">
        <div className="book-card">
          <div className="rating">
            <h3>Dubrovnik party route</h3>
            <span className="rating__container">
              <RatingIcon />
              <p>
                <strong>4.9</strong> rating of 461 reviews
              </p>
            </span>
          </div>
          <div className="book-list">
            {items.map((item, index) => (
              <span key={index}>
                {item.icon}
                <p>{item.label}</p>
              </span>
            ))}
          </div>
          <div className="button-container">
            <button>book now</button>
            <p>Prices from €1136 per person</p>
          </div>
        </div>
        <div className="description__text">
          <p>
            From mountains and canyons to fjord-like bays, nostalgic old towns
            to most stunning beaches. Get to now Croatia’s twin sister –
            Montenegro
          </p>
          <p>
            Walk the medieval streets of Kotor, dine the most amazing seafood in
            the Fishermans village. Feel like a millionaire in Porto Montenegro,
            the most luxurious marina in this part of the World. Visit nostalgic
            old towns Perast, Risan and Herceg Novi. Hike mountains in Kotor.
            Get wild in Budva and Tivat. Relax in freshly opened, chic Lazure
            marina.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DestinationHero;
