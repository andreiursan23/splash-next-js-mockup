import Image from "next/dist/client/image";
// Styles import
import styles from "./FeaturesCard.module.scss";

function FeaturesCard({ content, type }) {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src="/logo-sm-splash.png"
          alt="Splash logo small"
          height={71}
          width={68}
        />
      </div>
      <p className={styles.text}>{content}</p>
      {type && <p className={styles.new}>New</p>}
    </div>
  );
}

export default FeaturesCard;
