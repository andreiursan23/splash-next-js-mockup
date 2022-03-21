// Style imports
import styles from "./ContactUs.module.scss";

function ContactUs() {
  const contactUs = (e) => {
    e.preventDefault();
    console.log("Message sent!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <p className={`${styles.form_title} subtitle`}>What about you?</p>
        <form onSubmit={contactUs} className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Full name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            required
            className={styles.input}
          />

          <label htmlFor="fruit" className={styles.label}>
            Favorite fruit
          </label>
          <input
            id="fruit"
            type="text"
            autoComplete="fruit"
            required
            className={styles.input}
          />

          <label htmlFor="message" className={styles.label}>
            How can we help you?
          </label>
          <textarea
            id="message"
            rows={5}
            autoComplete="message"
            required
            className={styles.input_textarea}
          />

          <button className={styles.btn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
