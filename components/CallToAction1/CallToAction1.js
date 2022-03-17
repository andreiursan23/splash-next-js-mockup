// React import
import { useState } from "react";
// Framer motion import
import { motion } from "framer-motion";
// Styles imports
import styles from "./CallToAction1.module.scss";

function CallToAction1() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Some boring text, good for SEO</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi
          eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
          efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet
          tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus,
          pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat
          suscipit nec.
        </p>
        <p>
          Maecenas eget feugiat augue. Nulla faucibus vitae urna sit amet
          efficitur. <span className="text-bold">Praesent</span> justo mauris,
          facilisis eu magna et, varius lobortis ex. Nunc ultrices ipsum at
          tincidunt suscipit. Maecenas id justo at quam faucibus euismod. Proin
          eu urna blandit, pharetra enim scelerisque, malesuada justo. Sed
          commodo velit id augue lacinia, quis dignissim urna consectetur.
          Vestibulum et arcu vitae diam ultricies tempor.Praesent in posuere
          ante. Aenean dui mi, imperdiet id placerat quis, fringilla et n eque.
          Suspendisse porta justo odio, ut aliquet felis volutpat sit amet. Nunc
          fermentum vel dui ac sodales. Vivamus consectetur tortor at mauris
          vulputate finibus.
        </p>
        <button className={styles.btn} onClick={handleShowModal}>
          Do something
        </button>

        {showModal && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className={styles.modal_container}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                consectetur aliquam urna. Pellentesque et ullamcorper ipsum.
                Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem
                magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis
                sapien sit amet tempus commodo. Phasellus nec libero laoreet,
                finibus libero rhoncus, pellentesque elit. Mauris facilisis
                commodo justo, eget venenatis erat suscipit nec. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Morbi consectetur
                aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget
                hendrerit purus, in tempor lectus. Curabitur lorem magna,
                efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien
                sit amet tempus commodo. Phasellus nec libero laoreet, finibus
                libero rhoncus, pellentesque elit. Mauris facilisis commodo
                justo, eget venenatis erat suscipit nec. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Morbi consectetur aliquam
                urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit
                purus, in tempor lectus. Curabitur lorem magna, efficitur et
                molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus
                commodo. Phasellus nec libero laoreet, finibus libero rhoncus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                consectetur aliquam urna. Pellentesque et ullamcorper ipsum.
                Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem
                magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis
                sapien sit amet tempus commodo. Phasellus nec libero laoreet,
                finibus libero rhoncus, pellentesque elit. Mauris facilisis
                commodo justo, eget venenatis erat suscipit nec. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Morbi consectetur
                aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget
                hendrerit purus, in tempor lectus. Curabitur lorem magna,
                efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien
                sit amet tempus commodo. Phasellus nec libero laoreet, finibus
                libero rhoncus, pellentesque elit.
              </p>

              <img
                src="./close_icon.svg"
                alt="close icon"
                className={styles.close_icon}
                onClick={handleHideModal}
              />
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default CallToAction1;
