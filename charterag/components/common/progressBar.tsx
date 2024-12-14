import "./progressBar.scss";

const ProgressBar = ({
  maxWidth = "",
  progressWidth = "",
  progressBgColor = "",
  progressBgFill = "",
}) => {
  return (
    <div
      className="progress-bar"
      style={{
        backgroundColor: progressBgColor,
        maxWidth: maxWidth,
      }}
    >
      <div
        className="progress-fill"
        style={{ width: progressWidth, backgroundColor: progressBgFill }}
      ></div>
    </div>
  );
};

export default ProgressBar;
