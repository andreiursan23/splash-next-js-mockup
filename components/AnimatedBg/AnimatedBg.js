// NextJS imports
import Image from "next/dist/client/image";
// Styles imports
import styles from "./AnimatedBg.module.scss";

function AnimatedBg() {
  return (
    <div className={styles.parallax}>
      <img
        className={styles.image}
        src={"/scooters_parallax.jpg"}
        alt="two Splash electric scooters"
      />
    </div>
  );
}

export default AnimatedBg;
