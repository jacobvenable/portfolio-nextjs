import styles from "./About.module.scss";
import Link from "components/Link";
import Stack from "components/Stack";

const About = () => (
  <div className={styles.containerOuter}>
    <div className={styles.containerInner}>
      <h1 className="sr-only">Jacob Venable</h1>
      <p className={`heading-2 ${styles.heading}`}>Hello,</p>
      <p>
        I&apos;m Jacob, a front-end web developer. I&apos;ve been developing
        since high school, but found a love for the practicality and reach of
        the web.
      </p>
      <p>
        Currently, I&apos;m a senior front-end web developer at Purdue
        University&apos;s Office of Marketing and Media. Boiler Up!
      </p>
      <Stack>
        <Link
          className={`button button--yellow-light ${styles.button}`}
          href="/work"
        >
          View my Work
        </Link>
        <Link
          className={`button button--blue-dark-reverse ${styles.button}`}
          href="/contact"
        >
          Contact Me
        </Link>
      </Stack>
    </div>
  </div>
);

export default About;
