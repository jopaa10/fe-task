import Link from "next/link";
import InstagramIcon from "../../public/assets/InstagramIcon";
import FacebookIcon from "../../public/assets/FacebookIcon";
import YoutubeIcon from "../../public/assets/YoutubeIcon";

const socialIcons = [
  { icon: <InstagramIcon />, href: "https://instagram.com" },
  { icon: <FacebookIcon />, href: "https://facebook.com" },
  { icon: <YoutubeIcon />, href: "https://youtube.com" },
];

const SocialIcons = () => {
  return (
    <div className="socialIcons">
      {socialIcons.map((social, index) => (
        <Link href={social.href} key={index} target="_blank">
          <span className="icon">{social.icon}</span>
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
