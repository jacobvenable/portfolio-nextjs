import {
  faBars,
  faEnvelope,
  faFolderOpen,
  faHome,
  faTimes,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import styles from "./MainNav.module.scss";
import MainNavItem from "./MainNavItem";
import ContentContainer from "components/ContentContainer";
import Typography from "components/Typography";

const MainNav: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <nav
      className={`
          ${styles.container}
          ${isMobileNavOpen ? ` ${styles.open}` : ""}
      `}
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
        <MainNavItem href="/" icon={faHome} isHome={true}>
          Home
        </MainNavItem>
        <MainNavItem href="/skills" icon={faUserAlt}>
          Skills
        </MainNavItem>
        <MainNavItem href="/work" icon={faFolderOpen}>
          Work
        </MainNavItem>
        <MainNavItem href="/contact" icon={faEnvelope}>
          Contact
        </MainNavItem>
      </ul>
    </nav>
  );
};

export default MainNav;
