// Framer motion imports
import { motion } from "framer-motion";
// Style imports
import styles from "./Modal.module.scss";

function Modal({ setShowModal }) {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.modal_container}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi
          eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
          efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet
          tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus,
          pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat
          suscipit nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum.
          Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
          efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet
          tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus,
          pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat
          suscipit nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum.
          Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
          efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet
          tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus.
        </p>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="./close_icon.svg"
          alt="close icon"
          className={styles.close_icon}
          onClick={() => setShowModal(false)}
        />
      </div>
    </motion.div>
  );
}

export default Modal;
