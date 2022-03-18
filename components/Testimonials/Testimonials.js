// Style imports
import styles from "./Testimonials.module.scss";

function Testimonials() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Don’t trust us, <span className={styles.block}>trust them</span>
      </h1>

      <div className={styles.quote_container}>
        <p className={styles.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi
          eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
          efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet
          tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus,
          pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat
          suscipit nec.
        </p>
        <p className={styles.author}>Ion Luca Caragiale</p>
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img src="/left-quote-sign.png" alt="Opening double quotes" className={styles.left_quote} />
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img src="/right-quote-sign.png" alt="Closing double quotes" className={styles.right_quote} />
      </div>
    </div>
  );
}

export default Testimonials;
