import styles from "./Logo.module.scss";
import Image from "components/Image";
import logoSvg from "images/logo.svg";

const Logo: React.FC = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Image
          alt="logo"
          className={styles.logo}
          loading="eager"
          placeholder="empty"
          priority
          src={logoSvg}
        />
      </div>
    </div>
  );
};

export default Logo;
