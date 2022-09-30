import {
  faBars,
  faEnvelope,
  faFolderOpen,
  faHome,
  faTimes,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import { useState } from "react";

import styles from "./MainNav.module.scss";
import MainNavItem from "./MainNavItem";
import ContentContainer from "components/ContentContainer";
import Typography from "components/Typography";

const MainNav: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <nav
      className={classnames(styles.container, {
        [styles.open]: isMobileNavOpen,
      })}
      role="navigation"
    >
      <ContentContainer className={styles.mobileToggler}>
        <button onClick={() => setIsMobileNavOpen((o) => !o)}>
          <FontAwesomeIcon
            className={styles.togglerIcon}
            fixedWidth
            icon={isMobileNavOpen ? faTimes : faBars}
          />
          <Typography variant="sr-only">
            {isMobileNavOpen ? "close navigation" : "open navigation"}
          </Typography>
        </button>
      </ContentContainer>
      <ul className={styles.list}>
        <MainNavItem className={styles.homeItem} href="/" icon={faHome}>
          Home
        </MainNavItem>
        <MainNavItem href="/experience" icon={faUserAlt}>
          Experience
        </MainNavItem>
        <MainNavItem href="/work" icon={faFolderOpen}>
          My Work
        </MainNavItem>
        <MainNavItem href="/contact" icon={faEnvelope}>
          Contact
        </MainNavItem>
      </ul>
    </nav>
  );
};

export default MainNav;
