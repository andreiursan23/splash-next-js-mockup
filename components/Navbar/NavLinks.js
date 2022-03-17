import styles from "./NavLinks.module.scss";

function NavLinks() {
  return (
    <ul className={styles.nav_list}>
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
      <li>
        <a href="#" className={styles.cta_btn}>
          Ride me
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;
