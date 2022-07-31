import Link from "components/Link";

import styles from "./About.module.scss";

const About = () => (
  <div className={styles.containerOuter}>
    <div className={styles.containerInner}>
      <h1 className="sr-only">Jacob Venable</h1>
      <p className="heading-2">Hello,</p>
      <p>
        I&apos;m Jacob, a front-end web developer. I&apos;ve been developing
        since high school, but found a love for the practicality and reach of
        the web.
      </p>
      <p>
        Currently, I&apos;m a senior front-end web developer at Purdue
        University&apos;s Office of Marketing and Media. Boiler Up!
      </p>
      <div className="container__row">
        <div className="container__column">
          <Link
            href="/work"
            className="button button--yellow-light about__button"
          >
            View my Work
          </Link>
        </div>
        <div className="container__column">
          <Link
            href="/contact"
            className="button button--blue-dark-reverse about__button"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default About;
