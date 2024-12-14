import { individualList, sailWeekList } from "../../../utils/mockData";
import Title from "../../common/Title";
import Wrapper from "../../common/Wrapper";
import "./compare.scss";
import CompareCard from "./CompareCard";

const Compare = () => {
  return (
    <section className="compare">
      <Wrapper>
        <Title
          buttonTitle="payment"
          textTitle="You don’t have to break the bank"
          text="See how lorem ipsum dolor sit"
          background={"var(--charterag-button-bg-color-blue-grey)"}
          color="var(--charterag-button-text-color-blue-dark)"
        />
        <div className="compare__container">
          <CompareCard
            title={"Sailweek experience"}
            compareList={sailWeekList}
          />
          <CompareCard
            title={"Individual experience"}
            displayButton={false}
            bgColor="#fff"
            compareList={individualList}
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default Compare;
