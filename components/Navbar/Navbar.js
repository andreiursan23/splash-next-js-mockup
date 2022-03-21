// React imports
import { useState, useEffect } from "react";
// NextJS imports
import Image from "next/image";
// Style imports
import styles from "./Navbar.module.scss";
// Framer Motion imports
import { AnimatePresence } from "framer-motion";
// Component imports
import NavLinks from "./NavLinks";

function Navbar() {
  // Mobile navigation
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  // Change navigation on scroll
  // const [navColor, setNavColor] = useState(false);
  // const changeNavColor = () => {
  //   if (window.scrollY >= 300) {
  //     setNavColor(true);
  //   } else {
  //     setNavColor(false);
  //   }
  // };
  // (typeof window !== "undefined") && window.addEventListener("scroll", changeNavColor);

  // No scroll when hamburger menu is opened
  // useEffect(() => {
  //   const body = document.querySelector("body");
  //   isMenuOpened
  //     ? document.body.classList.add("no-scroll")
  //     : document.body.classList.remove("no-scroll");

  //   return () => {
  //     body.classList.remove("no-scroll");
  //   };
  // }, [isMenuOpened]);

  return (
    <div className={styles.nav_body}>
      <div className={`container ${styles.flex_container}`}>
        <div className={styles.logo}>
          <Image
            src={"/logo-splash.png"}
            height={40}
            width={138}
            alt="Splash logo"
          />
        </div>

        <button
          className={styles.hamburger_menu}
          onClick={() => setIsMenuOpened(!isMenuOpened)}
          aria-label="Main Menu"
        >
          <svg width="70" height="70" viewBox="0 0 100 100">
            <path
              className={
                isMenuOpened
                  ? `${styles.line} ${styles.line1} ${styles.opened_line1}`
                  : `${styles.line} ${styles.line1}`
              }
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path
              className={
                isMenuOpened
                  ? `${styles.line} ${styles.line1} ${styles.opened_line1}`
                  : `${styles.line} ${styles.line1}`
              }
              d="M 20,50 H 80"
            />
            <path
              className={
                isMenuOpened
                  ? `${styles.line} ${styles.line1} ${styles.opened_line1}`
                  : `${styles.line} ${styles.line1}`
              }
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>

        <nav className={styles.hide_for_mobile}>
          <NavLinks />
        </nav>
      </div>

      <AnimatePresence>{isMenuOpened && <NavLinks />}</AnimatePresence>
    </div>
  );
}

export default Navbar;
