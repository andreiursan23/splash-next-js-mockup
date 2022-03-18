// Style imports
import styles from "./Accordion.module.scss";
// Framer Motion imports
import { motion, AnimatePresence } from "framer-motion";

function Accordion({ id, title, p1, p2, expanded, setExpanded }) {
  const isOpen = id === expanded;

  return (
    <>
      <motion.div initial={false} className={styles.container}>
        <p className={styles.question}>{title}</p>
        <button
          className={isOpen ? `${styles.button_pressed}` : `${styles.button}`}
          onClick={() => setExpanded(isOpen ? false : id)}
        ></button>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.7, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className={styles.details_container}>
              <p>{p1}</p>
              <p>{p2}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Accordion;
