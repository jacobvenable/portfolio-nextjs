import styles from "./Logo.module.scss";
import Image from "components/Image";
import { useLightMode } from "context/LightMode";
import logoDarkSvg from "images/logo-dark.svg";
import logoLightSvg from "images/logo-light.svg";

const Logo: React.FC = () => {
  const [isLightMode] = useLightMode();
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Image
          alt="logo"
          className={styles.logo}
          loading="eager"
          placeholder="empty"
          priority
          src={isLightMode ? logoLightSvg : logoDarkSvg}
        />
      </div>
    </div>
  );
};

export default Logo;
