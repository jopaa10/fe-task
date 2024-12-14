import FacebookIconBg from "../../../public/assets/FacebookIconBg";
import GoogleIcon from "../../../public/assets/GoogleIcon";
import StarIcon from "../../../public/assets/StarIcon";
import Title from "../../common/Title";
import Wrapper from "../../common/Wrapper";
import "./experience.scss";
import ExperienceImages from "./ExperienceImages";

const Reviews = [
  {
    icon: <StarIcon />,
    rating: "4.8/5",
    text: "Based on 325 reviews",
  },
  {
    icon: <FacebookIconBg />,
    rating: "4.8/5",
    text: "Based on 325 reviews",
  },
  {
    icon: <GoogleIcon />,
    rating: "4.8/5",
    text: "Based on 325 reviews",
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <Wrapper>
        <ul className="reviews-list">
          {Reviews.map((item, index) => (
            <li key={index}>
              <span>{item.icon}</span>
              <div>
                <p className="experience__rating">{item.rating}</p>
                <p className="experience__text">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="experience__container">
          <Title
            buttonTitle="welcome"
            textTitle="What is Charterag experience"
            text="Join us for a week of sailing, unique adventures and exclusive parties in stunning locations. Explore new places daily. Dive into local culture. Dance the nights away. Leave with new friends and lifelong memories."
          />
          <ExperienceImages />
        </div>
      </Wrapper>
    </section>
  );
};

export default Experience;
