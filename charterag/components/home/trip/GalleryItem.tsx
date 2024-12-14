import Image from "next/image";
import { GalleryItem as GalleryItemType } from "../../types/components";

const GalleryItem = ({ src, alt, width, height }: GalleryItemType) => {
  return (
    <div className="gallery__item">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default GalleryItem;
