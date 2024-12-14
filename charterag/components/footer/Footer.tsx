"use client";

import Link from "next/link";
import ArrowUpIcon from "../../public/assets/ArrowUpIcon";
import FacebookIcon from "../../public/assets/FacebookIcon";
import InstagramIcon from "../../public/assets/InstagramIcon";
import LogoIcon from "../../public/assets/LogoIcon";
import YoutubeIcon from "../../public/assets/YoutubeIcon";
import { sections } from "../../utils/mockData";
import Wrapper from "../common/Wrapper";
import "./footer.scss";

const socialIcons = [
  { icon: <InstagramIcon />, href: "https://instagram.com" },
  { icon: <FacebookIcon />, href: "https://facebook.com" },
  { icon: <YoutubeIcon />, href: "https://youtube.com" },
];

const Footer = () => {
  const handleBackToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <Wrapper>
        <div className="footer__container">
          <div className="logo-container">
            <span className="logo">
              <LogoIcon fill="white" />
            </span>
            <button onClick={handleBackToTop}>
              <span>
                <ArrowUpIcon />
              </span>
            </button>
          </div>
          <div className="container">
            <div className="sections">
              {sections.map((section, index) => (
                <div key={index}>
                  <h3>{section.title}</h3>
                  <ul>
                    {section.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="socialIcons">
              {socialIcons.map((social, index) => (
                <Link href={social.href} key={index} target="_blank">
                  <span className="icon">{social.icon}</span>
                </Link>
              ))}
            </div>
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
