import "./title.scss";

const Title = ({
  buttonTitle,
  textTitle,
  text,
  background,
  color,
}: {
  buttonTitle?: string;
  textTitle: string;
  text?: string;
  background?: string;
  color?: string;
}) => {
  return (
    <div className="title-container" data-aos="fade-right">
      {buttonTitle && (
        <div className="button" style={{ background: background }}>
          <p className="button__title" style={{ color: color }}>
            {buttonTitle}
          </p>
        </div>
      )}
      <h2>{textTitle}</h2>
      <p className="text">{text}</p>
    </div>
  );
};

export default Title;
