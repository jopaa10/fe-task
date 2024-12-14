import "./notFound.scss";
import ActionButton from "../../../../components/common/ActionButton";

const NotFound = () => {
  return (
    <section className="not-found">
      <h2>🚧 404 - Page Under Construction 🚧</h2>
      <p>We are working hard to bring this page to life. Check back soon!</p>
      <ActionButton text="Go back home" redirectRoute="/" />
    </section>
  );
};

export default NotFound;
