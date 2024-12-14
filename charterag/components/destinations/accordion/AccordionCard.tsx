import Image from "next/image";
import ProgressBar from "../../common/progressBar";
import ArrowDownIcon from "../../../public/assets/ArrowDownIcon";
import { AccordionItem } from "../../types/components";
import { progressData } from "../../../utils/mockData";

const AccordionCard = ({
  showAccordion,
  handleShowAccordion,
  image,
  name,
}: AccordionItem & {
  showAccordion: boolean;
  handleShowAccordion: () => void;
}) => {
  return (
    <>
      <button
        onClick={handleShowAccordion}
        className={showAccordion ? "show" : ""}
      >
        {name} <ArrowDownIcon />
      </button>
      <div className={`${showAccordion ? "panel--show" : "panel"}`}>
        <Image src={image} width={406} height={276} alt={name} />
        <div className="panel__progress-container">
          {progressData.map((item, index) => (
            <div key={index} className="panel__progress-container__progress">
              <p>{item.label}</p>
              <ProgressBar
                progressWidth={item.progressWidth}
                progressBgFill={item.progressBgFill}
                progressBgColor={item.progressBgColor}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AccordionCard;
