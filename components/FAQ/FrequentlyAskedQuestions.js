// React imports
import { useState } from "react";
// Style imports
import styles from "./FrequentlyAskedQuestions.module.scss";
// Components imports
import Accordion from "./Accordion";
// Database imports
import { FAQ } from "./faq-db";

function FrequentlyAskedQuestions() {
  const [expanded, setExpanded] = useState(0);

  return (
    <div className={styles.container}>
      <div className="container">
        <h2 className={`${styles.title} subtitle`}>FAQ</h2>

        {FAQ.map((question) => (
          <Accordion
            key={question.id}
            id={question.id}
            title={question.title}
            p1={question.p1}
            p2={question.p2}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;
