import Link from "next/link";
import LogoIcon from "../../public/assets/LogoIcon";
import Wrapper from "../common/Wrapper";
import "./footer.scss";
import SocialIcons from "./SocialIcons";
import FooterLinks from "./FooterLinks";
import FooterButton from "./FooterButton";

const Footer = () => {
  return (
    <footer className="footer">
      <Wrapper>
        <div className="footer__container">
          <div className="logo-container">
            <span className="logo">
              <LogoIcon fill="white" />
            </span>
            <FooterButton />
          </div>
          <div className="container">
            <FooterLinks />
            <SocialIcons />
          </div>
          <div className="separator" />
          <div className="footer-bottom">
            <p>
              Copyright © 2024 Charterag Ltd. (company no. 08245801)
              <br />
              Lorem ipsum dolor sit amet lorem ipsum ipsum, United Kingdom.
            </p>
            <div className="links">
              <Link href={"/legal-info"}>Legal info</Link>
              <Link href={"/terms"}>Terms and conditions</Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
