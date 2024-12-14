import Link from "next/link";
import LogoIcon from "../../public/assets/LogoIcon";

const Logo = ({ pathname }: { pathname: string }) => {
  return (
    <Link href={"/"} className="logo" aria-label="logo">
      <LogoIcon fill={pathname !== "/" ? "#062949" : "#fff"} />
    </Link>
  );
};

export default Logo;
