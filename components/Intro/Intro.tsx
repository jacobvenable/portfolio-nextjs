import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Intro.module.scss";
import Button from "components/Button";
import Link, { LinkProps } from "components/Link";
import Stack from "components/Stack";
import Typography from "components/Typography";

const Intro = () => (
  <div className={styles.containerOuter}>
    <div className={styles.containerInner}>
      <Typography component="h1" variant="sr-only">
        Jacob Venable
      </Typography>
      <Typography className={styles.heading} component="p" variant="h2">
        Hello,
      </Typography>
      <Typography>
        I&apos;m Jacob, a web software engineer. I&apos;ve been developing since
        high school, but found a love for the practicality and reach of the web.
      </Typography>
      <Typography>
        Currently, I&apos;m feeding the future as a senior software engineer at
        Nutrien Ag Solutions.
      </Typography>
      <Stack direction="vertical" padded>
        <Stack
          direction={{
            mobile: "vertical",
            tablet: "horizontal",
          }}
        >
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

        <Button<LinkProps>
          color="yellow-light"
          component={Link}
          href="/about"
          iconProps={{
            icon: faChevronRight,
          }}
          variant="ghost"
        >
          Learn More About Me
        </Button>
      </Stack>
    </div>
  </div>
);

export default Intro;
