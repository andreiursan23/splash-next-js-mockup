// React imports
import { useState, useEffect } from "react";
// NextJS imports
import Image from "next/dist/client/image";
// Styles imports
import styles from "./BannerCarousel.module.scss";
// Framer Motion imports
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 0,
    title: "Welcome to our amazing website",
    subtitle: "Lorem ipsum dolor sit amet",
    image: "/banner_img1.jpg",
  },
  {
    id: 1,
    title: "Enjoy the most colourful rides with us",
    subtitle:
      "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor, sit amet ipsum dolor sit amet ipsum dolor sit amet",
    image: "/banner_img2.jpg",
  },
  {
    id: 2,
    title: "Again welcome to our amazing website",
    subtitle: "Lorem ipsum dolor sit amet ipsum dolor.",
    image: "/banner_img1.jpg",
  },
  {
    id: 3,
    title: "Welcome to our amazing website",
    subtitle: "Lorem ipsum dolor sit amet ipsum dolor.",
    image: "/banner_img2.jpg",
  },
];

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
            <div className={styles.carousel_text}>
              <div className={`${styles.container} container`}>
                <h1 className={`${styles.carousel_title} title`}>
                  {slide.title}
                </h1>
                <p className={styles.carousel_subtitle}>{slide.title}</p>
              </div>
            </div>
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
                  priority
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
