"use client";
import Image from "next/image";
import { ImageText } from "../../types/components";
import { redirect } from "next/navigation";

const ImageTextCard = ({ src, name, text }: ImageText) => {
  return (
    <button
      className="image-text__card-container__card"
      onClick={() => redirect(`/${name}`)}
      aria-label="image card"
      data-aos="flip-left"
    >
      <Image src={src} alt={name} width={376} height={251} />
      <h3 className="card-title">{name}</h3>
      <p className="card-text">{text}</p>
    </button>
  );
};

export default ImageTextCard;
