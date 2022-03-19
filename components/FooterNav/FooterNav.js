// Style imports
import styles from "./FooterNav.module.scss";

function FooterNav() {
  return (
    <div className={styles.bg}>
      <div className="container">
        <div className={styles.container}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-lg-splash.svg"
            alt="Splash logo"
            className={styles.logo}
          />

          <div className={styles.headline}>
            <h3 className={styles.title}>Some headline</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              consectetur aliquam urna. Lorem ipsum dolor sit amet, adipiscing
              elit. Morbi consectetur aliquam urna.
            </p>
          </div>

          <div className={styles.links}>
            <h3 className={styles.title}>Other links</h3>
            <ul>
              <li>
                <a className={styles.link} href="#">Coffee</a>
              </li>
              <li>
                <a className={styles.link} href="#">Tea</a>
              </li>
              <li>
                <a className={styles.link} href="#">Water</a>
              </li>
              <li>
                <a className={styles.link} href="#">Juice</a>
              </li>
              <li>
                <a className={styles.link} href="#">Beer</a>
              </li>
              <li>
                <a className={styles.link} href="#">Wine</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterNav;
