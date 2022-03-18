// React imports
import { useState } from "react";
// Style imports
import styles from "./FrequentlyAskedQuestions.module.scss";
// Components imports
import Accordion from "./Accordion";

const FAQ = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.",
    p2: "",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.",
    p2: "",
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elit?",
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.",
    p2: "",
  },
];

function FrequentlyAskedQuestions() {
  const [expanded, setExpanded] = useState(0);

  return (
    <div className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>FAQ</h2>

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
