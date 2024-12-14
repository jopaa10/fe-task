import Accordion from "../../../../components/destinations/accordion/Accordion";
import CrewSlider from "../../../../components/destinations/crewSlider/CrewSlider";
import DestinationCta from "../../../../components/destinations/cta/DestinationCta";
import DestinationHero from "../../../../components/destinations/destinationHero/DestinationHero";
import ImageWithText from "../../../../components/destinations/routeHighlight/ImageWithText";
import Payment from "../../../../components/home/payment/Payment";
import { links } from "../../../../utils/links";
import NotFound from "./notFound";

const DestionationPage = ({ params }: { params: { id: string } }) => {
  const isValidLink = links.some((link) => link.href === `/${params.id}`);

  if (!isValidLink) {
    return <NotFound />;
  }

  return (
    <>
      <DestinationHero />
      <ImageWithText />
      <Accordion />
      <CrewSlider />
      <Payment
        buttonTitle={"step 3"}
        textTitle="Pay and sail"
        text={`We make it easy to split the cost between your crew 
                and pay in instalments.
                `}
        bgColor={`var(--charterag-section-background-blue-light)`}
        color="#062949"
        cardBgColor="#C5E5EA"
      />
      <DestinationCta />
    </>
  );
};

export default DestionationPage;
