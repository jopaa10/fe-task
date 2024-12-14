import Link from "next/link";
import PaymentIcon1 from "../../../public/assets/PaymentIcon1";
import PaymentIcon2 from "../../../public/assets/PaymentIcon2";
import PaymentIcon3 from "../../../public/assets/PaymentIcon3";
import Title from "../../common/Title";
import Wrapper from "../../common/Wrapper";
import "./payment.scss";
import PaymentCard from "./PaymentCard";

const PaymentList = [
  {
    icon: <PaymentIcon1 />,
    percent: "10%",
    percentText: "10%",
    label: "pay when booking",
  },
  {
    icon: <PaymentIcon2 />,
    percent: "50%",
    percentText: "40%",
    label: "pay 30 days after booking",
  },
  {
    icon: <PaymentIcon3 />,
    percent: "100%",
    percentText: "50%",
    label: "pay 60 days before trip",
  },
];

const Payment = ({
  textTitle = "Flexible payment",
  buttonTitle = "",
  text = "",
  displayNote = false,
  bgColor = "",
  color = "",
  cardBgColor = "",
}) => {
  return (
    <section
      className="payment"
      style={{
        backgroundColor: bgColor ? bgColor : "",
        color: color ? color : "",
      }}
    >
      <Wrapper>
        <Title textTitle={textTitle} buttonTitle={buttonTitle} text={text} />
        <div className="payment__card-container">
          {PaymentList.map((item, index) => (
            <PaymentCard
              key={index}
              cardBgColor={cardBgColor}
              color={color}
              {...item}
            />
          ))}
        </div>
        {displayNote && (
          <p className="note">
            NOTE: Only applies to bookings made a minimum of 95 days before the
            trip. For bookings made within 95 days before the trip, see our{" "}
            <Link href="/terms">Terms and conditions</Link>.
          </p>
        )}
      </Wrapper>
    </section>
  );
};

export default Payment;
