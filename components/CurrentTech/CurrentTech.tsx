import { faReact, faCss3Alt, faNode } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./CurrentTech.module.scss";
import Image from "components/Image";
import ImageJest from "images/jest.svg";
import ImageTypeScript from "images/typescript.svg";

const CurrentTech = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <div className={styles.icon}>
          <Image alt="" placeholder="empty" src={ImageTypeScript} />
        </div>
        <span className={styles.content}>TypeScript, JavaScript</span>
      </li>
      <li className={styles.item}>
        <FontAwesomeIcon
          className={styles.icon}
          color="#61dafb"
          icon={faReact}
        />
        <span className={styles.content}>
          React, React Native + React Native Web
        </span>
      </li>
      <li className={styles.item}>
        <div className={styles.icon}>
          <Image alt="" placeholder="empty" src={ImageJest} />
        </div>
        <span className={styles.content}>Jest, React Testing Library</span>
      </li>
      <li className={styles.item}>
        <FontAwesomeIcon
          className={styles.icon}
          color="#264de4"
          icon={faCss3Alt}
        />
        <span className={styles.content}>CSS in JS, SASS</span>
      </li>
      <li className={styles.item}>
        <FontAwesomeIcon
          className={styles.icon}
          color="#66cc33"
          icon={faNode}
        />
        <span className={styles.content}>Node, GraphQl, Express</span>
      </li>
    </ul>
  );
};

export default CurrentTech;
