import "./wrapper.scss";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper" data-aos="fade-left">
      {children}
    </div>
  );
};

export default Wrapper;
