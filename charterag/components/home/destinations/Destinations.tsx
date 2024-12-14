import { DestinationsInfo } from "../../../utils/mockData";
import Title from "../../common/Title";
import Wrapper from "../../common/Wrapper";
import "./destinations.scss";
import DestinationsCard from "./DestinationsCard";
import { DestinationInfo as DestinationInfoType } from "../../types/components";

const Destinations = () => {
  return (
    <section className="destinations">
      <Wrapper>
        <Title
          buttonTitle="destinations"
          textTitle="Whether it’s a bash or bliss — the choice is yours"
          text="On our customized sailing adventures, embracing the thrill of our party routes or unwinding on our relaxing voyages — crafting your perfect journey at sea has never been easier"
        />
        <div className="destinations__images">
          {DestinationsInfo.map((item: DestinationInfoType) => (
            <DestinationsCard
              key={item.routeText}
              img={item.img}
              price={item.price}
              routeText={item.routeText}
              progressWidthParty={item.progressWidthParty}
              progressWidthAdventure={item.progressWidthAdventure}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Destinations;
