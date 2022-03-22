// React imports
import { useState, useEffect } from "react";
// NextJS imports
import Image from "next/dist/client/image";
// Styles imports
import styles from "./BannerCarousel.module.scss";
// Database imports
import { slides } from "./slides-db";

function BannerCarousel() {
  const [slideCounter, setSlideCounter] = useState(0);
  const [slideTitle, setSlideTitle] = useState(slides[0].title);
  const [slideSubtitle, setSlideSubtitle] = useState(slides[0].subtitle);
  const [slideImage, setSlideImage] = useState(slides[0].image);

  useEffect(() => {
    if (slideCounter < slides.length - 1) {
      setTimeout(() => {
        setSlideTitle(slides[slideCounter + 1].title);
        setSlideSubtitle(slides[slideCounter + 1].subtitle);
        setSlideImage(slides[slideCounter + 1].image);
        setSlideCounter(slideCounter + 1);
      }, 6000);
    } else {
      setTimeout(() => {
        setSlideTitle(slides[0].title);
        setSlideSubtitle(slides[0].subtitle);
        setSlideImage(slides[0].image);
        setSlideCounter(0);
      }, 6000);
    }
  }, [slideCounter]);

  return (
    <>
      <div className={styles.carousel}>
        {slides.map((slide) => (
          <div key={slide.id}>
            {/* Slide text */}
            <div
              className={
                slideCounter === slide.id
                  ? styles.carousel_text_visible
                  : styles.carousel_text
              }
            >
              <div className={`${styles.container} container`}>
                <h1 className={`${styles.carousel_title} title`}>
                  {slide.title}
                </h1>
                <p className={styles.carousel_subtitle}>{slide.title}</p>
              </div>
            </div>
            {/* Slide images */}
            <div
              className={
                slideCounter === slide.id
                  ? styles.carousel_item_visible
                  : styles.carousel_item
              }
            >
              <div className={styles.image}>
                <Image
                  src={slide.image}
                  alt="Five Splash electric scouters with rainbow stairs in the background"
                  layout="responsive"
                  width={1920}
                  height={850}
                />
              </div>
            </div>
          </div>
        ))}

        <div className={styles.dots_container}>
          {slides.map((slide) => (
            <span
              className={
                slideCounter === slide.id ? styles.dot_selected : styles.dot
              }
              key={slide.id}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}

export default BannerCarousel;
