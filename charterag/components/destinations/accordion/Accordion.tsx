"use client";
import Title from "../../common/Title";
import "./accordion.scss";
import { useState } from "react";
import AccordionCard from "./AccordionCard";
import { AccordionData } from "../../../utils/mockData";
import Wrapper from "../../common/Wrapper";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleShowAccordion = (index: number) => {
    setActiveIndex((prevIndex: number | null) =>
      prevIndex === index ? 0 : index
    );
  };

  return (
    <section className="accordion">
      <Wrapper>
        <Title
          buttonTitle="step 1"
          textTitle="Choose your route"
          text="Explore what you can get for in each route"
        />
        <div className="accordion__container">
          {AccordionData.map((item, index) => (
            <AccordionCard
              key={index}
              {...item}
              handleShowAccordion={() => handleShowAccordion(index)}
              showAccordion={activeIndex === index}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Accordion;
