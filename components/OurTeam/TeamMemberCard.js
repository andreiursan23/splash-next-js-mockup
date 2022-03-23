// Style imports
import styles from "./TeamMemberCard.module.scss";

function TeamMemberCard({
  id,
  image,
  name,
  subtitle,
  description,
  visibleSlides,
}) {
  return (
    <div
      className={
        id === visibleSlides[0] || id === visibleSlides[1]
          ? styles.container_visible
          : styles.container
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt="Person on electric scouter"
        className={styles.image}
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.subtitle}>{subtitle}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default TeamMemberCard;
