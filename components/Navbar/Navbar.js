// NextJS imports
import Image from "next/image";
// Style imports
import styles from "./Navbar.module.scss";
// Component imports
import NavLinks from "./NavLinks";

// TO DO: this should be used for mobile
// useEffect(() => {
//   const body = document.querySelector("body");
//   showModal
//     ? document.body.classList.add("no-scroll")
//     : document.body.classList.remove("no-scroll");

//   return () => {
//     body.classList.remove("no-scroll");
//   };
// }, [showModal]);

function Navbar() {
  return (
    <div className={styles.nav_body}>
      <div className={`container ${styles.flex_container}`}>
        <div className={styles.logo}>
          <Image
            src="/logo-splash.svg"
            height={40}
            width={138}
            alt="Splash logo"
          />
        </div>

        <nav>
          <NavLinks />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
