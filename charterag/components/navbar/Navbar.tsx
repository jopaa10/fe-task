"use client";

import Link from "next/link";
import { links } from "../../utils/links";
import Logo from "./Logo";
import "./navbar.scss";
import Login from "./Login";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isChecked, setIsChecked] = useState(false);
  const [startedScrolling, setStartedScrolling] = useState(false);

  const handleRouteSelection = () => {
    setIsChecked(false);
  };

  useEffect(() => {
    const handleResizeOrScroll = () => {
      if (window.scrollY > 0 && !isChecked) {
        setStartedScrolling(true);
      } else {
        setStartedScrolling(false);
      }
    };

    window.addEventListener("resize", handleResizeOrScroll);
    window.addEventListener("scroll", handleResizeOrScroll);

    return () => {
      window.removeEventListener("resize", handleResizeOrScroll);
      window.removeEventListener("scroll", handleResizeOrScroll);
    };
  }, [isChecked]);

  return (
    <header className="navbar">
      <input
        type="checkbox"
        className="navbar__checkbox"
        id="navi-toggle"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label
        htmlFor="navi-toggle"
        className="navbar__button"
        style={{
          position: isChecked ? "fixed" : "relative",
        }}
      >
        <span className="navbar__icon">&nbsp;</span>
      </label>
      <div
        className="navbar__background"
        style={{
          position: !startedScrolling ? "fixed" : "absolute",
        }}
      >
        &nbsp;
      </div>
      <Logo pathname={pathname} />
      <nav>
        <ul>
          {links.map((navItem) => {
            return (
              <li key={navItem.label}>
                <Link
                  href={navItem.href}
                  className={`${pathname == navItem.href ? "active" : ""}`}
                  onClick={handleRouteSelection}
                  aria-label={`${
                    pathname == navItem.href
                      ? `current page ${navItem.label}`
                      : ""
                  }`}
                >
                  {navItem.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Login pathname={pathname} />
    </header>
  );
};

export default Navbar;
