// React import
import { useState } from "react";
// Framer motion imports
import { AnimatePresence } from "framer-motion";
// Styles imports
import styles from "./CallToAction2.module.scss";
// Component imports
import Modal from "./Modal";

function CallToAction2() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Some more boring text, <span className={styles.block}>also good for SEO</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi
          eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
          efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet
          tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus,
          pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat
          suscipit nec.
        </p>

        <button className={styles.btn} onClick={() => setShowModal(true)}>
          Do it
        </button>

        <AnimatePresence>
          {showModal && <Modal setShowModal={setShowModal} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default CallToAction2;
