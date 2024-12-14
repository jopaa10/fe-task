import Image from "next/image";

const ExpImages = [
  {
    text: "sail",
    image: "/images/sail.png",
  },
  {
    text: "party",
    image: "/images/party.png",
  },
  {
    text: "explore",
    image: "/images/explore.png",
  },
  {
    text: "relax",
    image: "/images/relax.png",
  },
];

const ExperienceImages = () => {
  return (
    <div className="image-container">
      {ExpImages.map((item, index) => {
        return (
          <div key={index} className={"card"}>
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
