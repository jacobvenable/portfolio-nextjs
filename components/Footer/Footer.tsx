import styles from "./Footer.module.scss";
import ContentContainer from "components/ContentContainer";

const Footer: React.FC = () => {
  const today = new Date();
  return (
    <footer className={styles.footer}>
      <ContentContainer>
        <p className={styles.text}>
          Copyright &copy; {today.getFullYear()} Jacob Venable
        </p>
      </ContentContainer>
    </footer>
  );
};

export default Footer;
