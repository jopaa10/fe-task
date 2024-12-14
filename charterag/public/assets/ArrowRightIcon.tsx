const ArrowRightIcon = ({
  stroke = "white",
  width = "13",
  height = "21",
  strokeWidth = "2.82692",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 13 21`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.2034 2.30786L10.6842 10.7886L2.2034 19.2694"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRightIcon;
