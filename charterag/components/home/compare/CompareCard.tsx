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
    <div className="compare__card" style={{ background: bgColor }}>
      <div className="title">
        <p>{title}</p>
        {displayButton && <span className="button">from 787€</span>}
      </div>
      <div className="list">
        <ul>
          {compareList.map((item) => (
            <li key={item.label}>
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
