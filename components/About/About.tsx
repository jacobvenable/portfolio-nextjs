import styles from "./About.module.scss";
import Button from "components/Button";
import Link, { LinkProps } from "components/Link";
import Stack from "components/Stack";
import Typography from "components/Typography";

const About = () => (
  <div className={styles.containerOuter}>
    <div className={styles.containerInner}>
      <Typography component="h1" variant="sr-only">
        Jacob Venable
      </Typography>
      <Typography className={styles.heading} component="p" variant="h2">
        Hello,
      </Typography>
      <Typography>
        I&apos;m Jacob, a front-end web developer. I&apos;ve been developing
        since high school, but found a love for the practicality and reach of
        the web.
      </Typography>
      <Typography>
        Currently, I&apos;m a senior front-end web developer at Purdue
        University&apos;s Office of Marketing and Media. Boiler Up!
      </Typography>
      <Stack>
        <Button<LinkProps> color="yellow-light" component={Link} href="/work">
          View my Work
        </Button>
        <Button<LinkProps>
          color="blue-dark"
          component={Link}
          href="/contact"
          variant="solid"
        >
          Contact Me
        </Button>
      </Stack>
    </div>
  </div>
);

export default About;
