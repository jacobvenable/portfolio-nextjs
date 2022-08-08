import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

import styles from "./MainNav.module.scss";
import Link, { LinkProps } from "components/Link";

interface Props extends LinkProps {
  children: React.ReactNode;
  icon: IconProp;
}

const MainNavItem: React.FC<Props> = ({
  children,
  className,
  icon,
  ...props
}) => (
  <li className={classnames(styles.item, className)}>
    <Link
      activeClassName={styles.currentLink}
      className={styles.link}
      {...props}
    >
      <FontAwesomeIcon className={styles.icon} icon={icon} />
      {children}
    </Link>
  </li>
);

export default MainNavItem;
