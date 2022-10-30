import classNames from "classnames";
import { useState } from "react";

import styles from "./Switch.module.scss";
import Typography from "components/Typography";

type SwitchProps = {
  id: string;
  isToggled?: boolean;
  label: string;
  untoggledAdornment?: React.ReactNode;
  onToggle?: (boolean) => void;
  toggledAdornment?: React.ReactNode;
};

const noop = () => undefined;

const Switch: React.FC<SwitchProps> = ({
  isToggled: isToggledProp,
  id,
  label,
  untoggledAdornment,
  onToggle = noop,
  toggledAdornment,
}) => {
  const [isToggledInternal, setIsToggledInternal] = useState(isToggledProp);
  const isToggled = isToggledProp ?? isToggledInternal;

  return (
    <>
      <button
        aria-checked={isToggledProp ?? isToggled}
        className={styles.container}
        id={id}
        onClick={() => {
          onToggle(!isToggledInternal);
          setIsToggledInternal((isToggled) => !isToggled);
        }}
        role="switch"
      >
        {untoggledAdornment && untoggledAdornment}
        <div
          className={classNames(styles.switch, { [styles.toggled]: isToggled })}
        />
        {toggledAdornment && toggledAdornment}
      </button>

      <Typography component="label" htmlFor={id} variant="sr-only">
        {label}
      </Typography>
    </>
  );
};

export default Switch;
