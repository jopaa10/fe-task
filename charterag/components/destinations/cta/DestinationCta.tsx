import ArrowButton from "../../common/ArrowButton";
import "./destinationCta.scss";

const DestinationCta = () => {
  return (
    <section className="destination-cta">
      <div className="destination-cta__background">
        <div className="text-container">
          <h3>Ready to go?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio
            amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc.
          </p>
          <ArrowButton buttonText="Explore our destinations" />
        </div>
      </div>
    </section>
  );
};

export default DestinationCta;
