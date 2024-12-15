import Link from "next/link";
import { sections } from "../../utils/mockData";

const FooterLinks = () => {
  return (
    <div className="sections">
      {sections.map((section, index) => (
        <div key={index}>
          <h3>{section.title}</h3>
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx}>
                <Link href={`/${item.toLowerCase().replace(/ + /g, "")}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
