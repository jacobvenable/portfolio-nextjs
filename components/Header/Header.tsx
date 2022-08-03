import styles from "./Header.module.scss";
import ContentContainer from "components/ContentContainer";
import Link from "components/Link";
import Logo from "components/Logo";
import MainNav from "components/MainNav";

const Header = () => {
  return (
    <header className={styles.containerOuter}>
      <ContentContainer className={styles.containerInner}>
        <Link className={styles.linkLogo} href="/">
          <Logo />
          <div className={styles.heading}>
            <span className={styles.name}>Jacob Venable </span>
            <span className="sr-only">&#8212;</span>
            <span className={styles.title}>Front-End Web Developer</span>
          </div>
        </Link>
        <MainNav />
      </ContentContainer>
    </header>
  );
};

export default Header;
