import Image from "next/image";
import ActionButton from "../../common/ActionButton";
import Title from "../../common/Title";
import "./cta.scss";
import Wrapper from "../../common/Wrapper";

const Cta = () => {
  return (
    <section className="cta">
      <Wrapper>
        <div className="images-container">
          <div className="composition">
            <Image
              src={"/images/partyBoat.png"}
              alt=""
              width={233}
              height={349}
              className="composition composition--photo-one"
            />
            <Image
              src={"/images/partyHeart.png"}
              alt=""
              width={262}
              height={273}
              className="composition composition--photo-two"
            />
            <Image
              src={"/images/partyCrew.png"}
              alt=""
              width={412}
              height={274}
              className="composition composition--photo-three"
            />
          </div>
        </div>
        <Title
          textTitle="Check Charterag off your bucket list"
          text="Lorem ipsum dolor sit amet consectetur. 
                Tellus lectus non purus odio amet"
        />
        <div className="buttons">
          <ActionButton text={"explore"} redirectRoute="/explore" />
          <ActionButton
            text={"Follow us"}
            redirectRoute="/follow-us"
            displayIcon={true}
            bgColor="#fff"
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default Cta;
