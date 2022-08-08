interface SkipToMainProps {
  mainId: string;
}

import styles from "./SkipToMain.module.scss";

const SkipToMain: React.FC<SkipToMainProps> = ({ mainId }) => {
  return (
    <a className={styles.link} href={`#${mainId}`}>
      Skip to main content
    </a>
  );
};

export default SkipToMain;
