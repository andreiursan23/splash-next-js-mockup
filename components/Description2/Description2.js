import Image from "next/dist/client/image";

import styles from "./Description2.module.scss";

function Description2() {
  return (
    <div className={styles.container}>
      <div className={`${styles.col} ${styles.text}`}>
        <h2 className={styles.title}>Still nice, right?</h2>
        <p>
          Maecenas eget feugiat augue. Nulla faucibus vitae urna sit amet
          efficitur. Praesent justo mauris, facilisis eu magna et, varius
          lobortis ex. Nunc ultrices ipsum at tincidunt suscipit. Maecenas id
          justo at quam faucibus euismod. Proin eu urna blandit, pharetra enim
          scelerisque, malesuada justo. Sed commodo velit id augue lacinia, quis
          dignissim urna consectetur. Vestibulum et arcu vitae diam ultricies
          tempor.
        </p>
      </div>
      <Image
        src="/scooters_2.jpg"
        height={575}
        width={575}
        alt="Three Splash electric scouters"
        className={styles.col}
      />
    </div>
  );
}

export default Description2;
