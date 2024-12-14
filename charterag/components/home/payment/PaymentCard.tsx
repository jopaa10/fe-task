import ProgressBar from "../../common/progressBar";
import { PaymentCardProps } from "../../types/components";

const PaymentCard = ({
  icon,
  percentText,
  percent,
  label,
  cardBgColor,
  color,
  boxShadow,
}: PaymentCardProps & { boxShadow?: string }) => {
  return (
    <div
      className="payment__card"
      style={{
        backgroundColor: cardBgColor ? cardBgColor : "",
        color: color ? color : "",
        boxShadow: boxShadow,
      }}
    >
      <span className="payment__card__icon">{icon}</span>
      <p className="percent">{percentText}</p>
      <p>{label}</p>
      <ProgressBar
        maxWidth="20.8rem"
        progressWidth={percent}
        progressBgColor="#F5F5F6"
        progressBgFill="#1DC072"
      />
    </div>
  );
};

export default PaymentCard;
