import CheckIcon from "../../../public/assets/CheckIcon";
import { CompareItem } from "../../types/components";

const CompareCard = ({
  title,
  displayButton = true,
  bgColor = "#c4e3e8",
  compareList,
}: {
  title?: string;
  displayButton?: boolean;
  bgColor?: string;
  compareList: CompareItem[];
}) => {
  return (
    <div
      className="compare__card"
      data-aos="flip-left"
      style={{ background: bgColor }}
    >
      <div className="title">
        <h3>{title}</h3>
        {displayButton && <span className="button">from 787€</span>}
      </div>
      <div className="list">
        <ul>
          {compareList.map((item, index) => (
            <li key={index}>
              <CheckIcon fill={item.disabled ? "#CDD1CC" : "#062949"} />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompareCard;
