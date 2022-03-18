// Style imports
import styles from "./FooterNav.module.scss";

function FooterNav() {
  return (
    <div className={styles.bg}>
      <div className="container">
        <div className={styles.container}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-lg-splash.svg" alt="Splash logo" />

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
              <li>Coffee</li>
              <li>Tea</li>
              <li>Water</li>
              <li>Juice</li>
              <li>Beer</li>
              <li>Wine</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterNav;
