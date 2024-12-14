import Title from "../../common/Title";
import "./trip.scss";
import BoatIcon from "../../../public/assets/BoatIcon";
import BeachIcon from "../../../public/assets/BeachIcon";
import CoctailIcon from "../../../public/assets/CoctailIcon";
import Wrapper from "../../common/Wrapper";
import { TripCard as TripCardType } from "../../types/components";
import { galleryData } from "../../../utils/mockData";
import GalleryItem from "./GalleryItem";
import TripCard from "./TripCard";

const tripCardData: TripCardType[] = [
  {
    icon: <BoatIcon />,
    header: "A trip like no other",
    text: "Spend unforgettable 7 days at sea with your crew at your own pace",
  },
  {
    icon: <BeachIcon />,
    header: "Active vacation",
    text: "Indulge yourself in dozen of parties and activities on your trip",
  },
  {
    icon: <CoctailIcon />,
    header: "Bonding",
    text: "Meet people from all over the world, discover new friends",
  },
];

const Trip = () => {
  return (
    <section className="vacations">
      <Wrapper>
        <Title
          textTitle="Come live your best life"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam."
        />
        <div className="gallery-container">
          <div className="gallery">
            {galleryData.map((galleryItem) => (
              <GalleryItem key={galleryItem.alt} {...galleryItem} />
            ))}
          </div>
        </div>
        <div className="vacations__container">
          {tripCardData.map((tripItem) => (
            <TripCard key={tripItem.header} {...tripItem} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Trip;
