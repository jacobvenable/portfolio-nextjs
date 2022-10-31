import styles from "./Header.module.scss";
import ContentContainer from "components/ContentContainer";
import LightModeSwitch from "components/LightModeSwitch";
import Link from "components/Link";
import Logo from "components/Logo";
import MainNav from "components/MainNav";
import Typography from "components/Typography";

const Header = () => {
  return (
    <header className={styles.containerOuter}>
      <ContentContainer className={styles.containerInner}>
        <Link className={styles.linkLogo} href="/">
          <Logo />
          <div className={styles.heading}>
            <span className={styles.name}>Jacob Venable </span>
            <Typography variant="sr-only">&#8212;</Typography>
            <span className={styles.title}>Web Software Engineer</span>
          </div>
        </Link>
        <MainNav />
        <LightModeSwitch />
      </ContentContainer>
    </header>
  );
};

export default Header;
