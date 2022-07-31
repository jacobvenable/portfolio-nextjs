import Link, { LinkProps } from "components/Link";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./MainNav.module.scss";

interface Props extends LinkProps {
  children: React.ReactNode;
  icon: IconProp;
  isHome?: boolean;
}

const MainNavItem: React.FC<Props> = ({ children, icon, isHome, ...props }) => (
  <li className={`${styles.item}${isHome ? ` ${styles.homeItem}` : ""}`}>
    <Link
      activeClassName={styles.currentLink}
      className={styles.link}
      {...props}
    >
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      {children}
    </Link>
  </li>
);

export default MainNavItem;