import Image from "next/dist/client/image";

import styles from "./Description1.module.scss";

function Description1() {
  return (
    <div className={styles.container}>
      <div className={`${styles.col} ${styles.text}`}>
        <h2 className={`${styles.title} subtitle`}>Nice scooters, right?</h2>
        <p>
          Maecenas eget feugiat augue. Nulla faucibus vitae urna sit amet
          efficitur. Praesent justo mauris, facilisis eu magna et, varius
          lobortis ex. Nunc ultrices ipsum at tincidunt suscipit. Maecenas id
          justo at quam faucibus euismod. Proin eu urna blandit, pharetra enim
          scelerisque, malesuada justo. Sed commodo velit id augue lacinia, quis
          dignissim urna consectetur. Vestibulum et arcu vitae diam ultricies
          tempor. Praesent in posuere ante. Aenean dui mi, imperdiet id placerat
          quis, fringilla et neque. Suspendisse porta justo odio, ut aliquet
          felis volutpat sit amet. Nunc fermentum vel dui ac sodales. Vivamus
          consectetur tortor at mauris vulputate finibus.
        </p>
      </div>
      <Image
        src="/scooters_1.jpg"
        height={738}
        width={738}
        alt="Three Splash electric scouters"
        className={styles.col}
      />
    </div>
  );
}

export default Description1;
