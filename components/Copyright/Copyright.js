// Style imports
import styles from "./Copyright.module.scss";

function Copyright() {
  return <div className={styles.container}>
    <div className="container">
      <p className={styles.copyright}>&copy; Copyright 2022 Codezilla</p>
    </div>
  </div>;
}

export default Copyright;
