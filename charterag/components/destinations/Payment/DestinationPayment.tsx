import PaymentIcon1 from "../../../public/assets/PaymentIcon1";
import PaymentIcon2 from "../../../public/assets/PaymentIcon2";
import PaymentIcon3 from "../../../public/assets/PaymentIcon3";
import Title from "../../common/Title";
import PaymentCard from "../../home/payment/PaymentCard";

const PaymentList = [
  {
    icon: <PaymentIcon1 />,
    percent: "10%",
    label: "pay when booking",
  },
  {
    icon: <PaymentIcon2 />,
    percent: "40%",
    label: "pay 30 days after booking",
  },
  {
    icon: <PaymentIcon3 />,
    percent: "50%",
    label: "pay 60 days before trip",
  },
];

const DestinationPayment = () => {
  return (
    <>
      <Title
        buttonTitle="step 3"
        textTitle="Pay and sail"
        text="We make it easy to split the cost between your crew 
              and pay in instalments.
              "
      />
      <div className="payment__card-container">
        {PaymentList.map((item) => (
          <PaymentCard key={item.label} {...item} />
        ))}
      </div>
    </>
  );
};

export default DestinationPayment;
