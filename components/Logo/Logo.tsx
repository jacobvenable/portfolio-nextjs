import Image from "next/image";

import logoSvg from "images/logo.svg";
import styles from "./Logo.module.scss";

const Logo: React.FC = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Image src={logoSvg} alt="logo" className={styles.logo} />
      </div>
    </div>
  );
};

export default Logo;
