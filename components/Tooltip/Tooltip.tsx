import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import classNames from "classnames";

import styles from "./Tooltip.module.scss";

interface TooltipProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  iconProps?: FontAwesomeIconProps;
  visible?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  iconProps,
  visible = false,
  ...props
}) => {
  return (
    <p
      className={classNames([
        styles.tooltip,
        {
          [styles.visible]: visible,
        },
      ])}
      {...props}
    >
      {iconProps && <FontAwesomeIcon {...iconProps} className={styles.icon} />}
      {children}
    </p>
  );
};

export default Tooltip;
