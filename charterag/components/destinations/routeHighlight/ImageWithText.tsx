import { ImageTextData } from "../../../utils/mockData";
import Wrapper from "../../common/Wrapper";
import "./image-text.scss";

import ImageTextCard from "./ImageTextCard";

const ImageWithText = () => {
  return (
    <section className="image-text">
      <Wrapper>
        <h3>route highlight</h3>
        <div className="image-text__card-container">
          {ImageTextData.map((item) => (
            <ImageTextCard key={item.name} {...item} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default ImageWithText;
