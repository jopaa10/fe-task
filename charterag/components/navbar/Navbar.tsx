import Link from "next/link";
import { links } from "../../utils/links";

const Navbar = () => {
  return (
    <nav>
      {links.map((navItem) => {
        return (
          <Link key={navItem.label} href={navItem.href}>
            {navItem.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
