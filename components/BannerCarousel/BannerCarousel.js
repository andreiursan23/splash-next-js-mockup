import Image from "next/dist/client/image";
import styles from "./BannerCarousel.module.scss";

function BannerCarousel() {
  return (
    <>
      <div className={styles.carousel_item}>
        <div className={styles.carousel_text}>
          <div className={styles.container}>
            <p className={styles.carousel_title}>
              Welcome to our amazing website
            </p>
            <p className={styles.carousel_subtitle}>
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>

        <Image
          src="/banner_img.jpg"
          alt="Five Splash electric scouters with rainbow stairs in the background"
          layout="responsive"
          priority
          width={1920}
          height={850}
        />
      </div>
    </>
  );
}

export default BannerCarousel;
