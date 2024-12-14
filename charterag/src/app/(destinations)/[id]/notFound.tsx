import "./notFound.scss";
import ActionButton from "../../../../components/common/ActionButton";
import Wrapper from "../../../../components/common/Wrapper";

const NotFound = () => {
  return (
    <section className="not-found">
      <Wrapper>
        <h2>🚧 404 - Page Under Construction 🚧</h2>
        <p>We are working hard to bring this page to life. Check back soon!</p>
        <ActionButton text="Go back home" redirectRoute="/" />
      </Wrapper>
    </section>
  );
};

export default NotFound;
