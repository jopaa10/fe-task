import Compare from "../../components/home/compare/Compare";
import Cta from "../../components/home/cta/Cta";
import Destinations from "../../components/home/destinations/Destinations";
import Experience from "../../components/home/experience/Experience";
import Hero from "../../components/home/hero/Hero";
import Payment from "../../components/home/payment/Payment";
import Testimonial from "../../components/home/testimonials/Testimonial";
import Trip from "../../components/home/trip/Trip";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Destinations />
      <Testimonial />
      <Trip />
      <Compare />
      <Payment displayNote={true} />
      <Cta />
    </>
  );
}
