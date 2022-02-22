import React, { FC, useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import styles from "./NavBarComponent.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";

type NavBarComponentProps = {};

const NavBarComponent: FC<NavBarComponentProps> = (props) => {
  const [fixed, setFixed] = useState(false);
  const [hide, setHide] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      setFixed(scrollY > 800);
      setHide(scrollY > 80);
      setHidden(scrollY > 200);
    });
  }, []);

  const menu = [
    { link: "/vlog", text: "Vlog" },
    { link: "/blog", text: "Blog" },
    { link: "/contact", text: "Contact" },
    { link: "/donate", text: "Help ons" },
  ];

  return (
    <div
      className={
        styles.NavBarComponent +
        " " +
        (fixed ? styles.fixed : null) +
        " " +
        (hide ? styles.hide : null) +
        " " +
        (hidden ? styles.hidden : null)
      }
      data-testid="NavBarComponent"
    >
      <Container>
        <div className={styles.navBarContainer}>
          <div className={styles.homeOption}>
            <Link to={"/"}>Joris&Tyrone</Link>
            <span className={styles.pink}>&Baby</span>
            <span className={styles.blue}>Zeehond</span>
          </div>
          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FontAwesomeIcon icon={faClose} className={styles.bars} />
            ) : (
              <FontAwesomeIcon icon={faBars} className={styles.bars} />
            )}
          </div>
          <div
            className={
              styles.menuOptions + " " + (menuOpen ? styles.menuOpen : null)
            }
            aria-controls="basic-navbar-nav"
          >
            {menu.map((menuItem, index) => (
              <Link
                key={index}
                to={menuItem.link}
                onClick={() => setMenuOpen(false)}
              >
                {menuItem.text}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBarComponent;
