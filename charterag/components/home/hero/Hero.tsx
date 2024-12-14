import "./hero.scss";
import SoftStarIcon from "../../../public/assets/SoftStarIcon";

const HeroText = [
  {
    name: "adventure",
    icon: <SoftStarIcon />,
  },
  {
    name: "relax",
    icon: <SoftStarIcon />,
  },
  {
    name: "explore",
    icon: <SoftStarIcon />,
  },
  {
    name: "fun",
    icon: <SoftStarIcon />,
  },
  {
    name: "dance",
    icon: <SoftStarIcon />,
  },
];

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__text">
        <p>Sail your way with</p>
        <h1>CHARTERAG</h1>
        <ul className="hero__list">
          {HeroText.map((item, index) => {
            return (
              <li key={item.name}>
                <p>{item.name}</p>
                {index < HeroText.length - 1 && <span>{item.icon}</span>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
