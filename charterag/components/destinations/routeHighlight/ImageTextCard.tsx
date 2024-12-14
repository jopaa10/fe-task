import Image from "next/image";
import { ImageText } from "../../types/components";

const ImageTextCard = ({ src, name, text }: ImageText) => {
  return (
    <div className="image-text__card-container__card">
      <Image src={src} alt={name} width={376} height={251} />
      <h3 className="card-title">{name}</h3>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default ImageTextCard;
