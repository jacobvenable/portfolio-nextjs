import Image from "next/image";

import styles from "./Logo.module.scss";
import logoSvg from "images/logo.svg";

const Logo: React.FC = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Image alt="logo" className={styles.logo} src={logoSvg} />
      </div>
    </div>
  );
};

export default Logo;
