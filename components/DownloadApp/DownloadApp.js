// Styles imports
import styles from "./DownloadApp.module.scss";

function DownloadApp() {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} subtitle`}>Bored to stay in traffic?</h2>
      <p className={styles.subtitle}>Download the app</p>

      <div className={styles.btn_container}>
        <button className={styles.btn}>Download 1</button>
        <button className={styles.btn}>Download 2</button>
      </div>
    </div>
  );
}

export default DownloadApp;
