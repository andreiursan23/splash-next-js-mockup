// Styles imports
import styles from "./NavLinks.module.scss";
// Framer Motion imports
import { motion } from "framer-motion";

function NavLinks() {
  return (
    <motion.ul
      className={styles.nav_list}
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 },
      }}
      transition={{ duration: 0.7, ease: [0.04, 0.62, 0.23, 0.98] }}
    >
      <li className={styles.nav_list_item}>
        <a href="#" className={styles.nav_link}>
          About
        </a>
      </li>
      <li className={styles.nav_list_item}>
        <a href="#" className={styles.nav_link}>
          Jobs
        </a>
      </li>
      <li className={styles.nav_list_item}>
        <a href="#" className={styles.nav_link}>
          Cities
        </a>
      </li>
      <li className={styles.nav_list_item}>
        <a href="#" className={styles.nav_link}>
          Charging
        </a>
      </li>
      <li className={styles.nav_list_item}>
        <a href="#" className={styles.cta_btn}>
          Ride me
        </a>
      </li>
    </motion.ul>
  );
}

export default NavLinks;
