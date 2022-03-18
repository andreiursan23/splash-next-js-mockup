// Style imports
import styles from "./Features.module.scss";
// Component imports
import FeaturesCard from "./FeaturesCard";

import { features } from "./features-db";

function Features() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our main features</h2>

      <div className={styles.cards_container}>
        <div className={styles.row}>
          {features.map((feature) => (
            <FeaturesCard
              key={feature.id}
              content={feature.content}
              type={feature.new}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
