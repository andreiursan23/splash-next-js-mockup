// Styles imports
import styles from "./OurTeam.module.scss";
// Component imports
import TeamMemberCard from "./TeamMemberCard";

import { members } from "./members-db";

function OurTeam() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our fantastic team</h2>

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
    </div>
  );
}

export default OurTeam;
