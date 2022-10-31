import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./LightModeSwitch.module.scss";
import Switch from "components/Switch";
import { useLightMode } from "context/LightMode";

const LightModeSwitch = () => {
  const [isLightMode, setIsLightMode] = useLightMode();

  return (
    <Switch
      className={styles.switch}
      id="lightMode"
      isToggled={isLightMode}
      label="light mode"
      onToggle={setIsLightMode}
      toggledAdornment={<FontAwesomeIcon icon={faSun} />}
      untoggledAdornment={<FontAwesomeIcon icon={faMoon} />}
    />
  );
};

export default LightModeSwitch;
