import { sliderData } from "../../../utils/mockData";
import Title from "../../common/Title";
import Wrapper from "../../common/Wrapper";
import "./crew-slider.scss";
import CrewSliderCard from "./CrewSliderCard";

const CrewSlider = () => {
  return (
    <section className="crew-slider">
      <Wrapper>
        <Title
          buttonTitle="step 2"
          textTitle="Choose your crew"
          text="Lorem ipsum dolor sit amet"
        />
        {sliderData.map((slider) => (
          <CrewSliderCard key={slider.title} {...slider} />
        ))}
      </Wrapper>
    </section>
  );
};

export default CrewSlider;
