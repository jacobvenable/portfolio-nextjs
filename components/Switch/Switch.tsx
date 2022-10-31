import classNames from "classnames";
import { useState } from "react";

import styles from "./Switch.module.scss";
import Typography from "components/Typography";

type SwitchProps = {
  className?: string;
  id: string;
  isToggled?: boolean;
  label: string;
  untoggledAdornment?: React.ReactNode;
  onToggle?: (boolean) => void;
  toggledAdornment?: React.ReactNode;
};

const noop = () => undefined;

const Switch: React.FC<SwitchProps> = ({
  className,
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
        className={classNames(styles.container, className)}
        id={id}
        onClick={() => {
          onToggle(!isToggled);
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
