import Image from "next/image";
import { ExpImages } from "../../../utils/mockData";

const ExperienceImages = () => {
  return (
    <div className="image-container">
      {ExpImages.map((item, index) => {
        return (
          <div key={index} className={"card"} data-aos="flip-left">
            <div className={"overlay"}>
              <p className={"text"}>{item.text}</p>
            </div>
            <Image
              src={item.image}
              alt={item.text}
              className="image"
              width={270}
              height={370}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceImages;
