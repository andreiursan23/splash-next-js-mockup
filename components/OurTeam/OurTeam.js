// Styles imports
import styles from "./OurTeam.module.scss";
// Component imports
import TeamMemberCard from "./TeamMemberCard";
// Database imports
import { members } from "./members-db";

function OurTeam() {
  const previousSlide = () => {
    console.log("prev slide");
  };

  const nextSlide = () => {
    console.log("next slide");
  };

  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} subtitle`}>Our fantastic team</h2>

      <div className={styles.members_container}>
        {members.map((member) => (
          <TeamMemberCard
            key={member.id}
            image={member.image}
            name={member.name}
            subtitle={member.subtitle}
            description={member.description}
          />
        ))}
      </div>

      <div className={styles.carousel_controls}>
        <button
          aria-label="Go to previous slide"
          className={styles.btn}
          onClick={previousSlide}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/left-arrow.png" alt="left arrow" />
        </button>
        <button
          aria-label="Go to next slide"
          className={styles.btn}
          onClick={nextSlide}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/right-arrow.png" alt="right arrow" />
        </button>
      </div>
    </div>
  );
}

export default OurTeam;
