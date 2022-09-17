import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "components/Button";
import ContactForm from "components/ContactForm";
import ContentContainer from "components/ContentContainer";
import Grid from "components/Grid";
import Head from "components/Head";
import Link, { LinkProps } from "components/Link";
import Stack from "components/Stack";
import Typography from "components/Typography";

const ContactPage = () => {
  return (
    <ContentContainer>
      <Head
        description="Different ways to get in touch with Jacob Venable including a form and social media."
        title="Contact"
      />
      <Typography variant="h1">Want to talk?</Typography>
      <Grid.Container padded>
        <Grid.Item medium={35}>
          <Typography>
            Have an idea for a project, or want to discuss a new opportunity?
            Let&apos;s have a chat!
          </Typography>
          <Typography>
            You can use the form to send me a direct message or connect with me
            through any of the networks below.
          </Typography>
          <Stack padded>
            <Button<LinkProps>
              color="yellow-light"
              component={Link}
              href="https://www.linkedin.com/in/jacob-venable/"
              size="large"
              variant="ghost"
            >
              <Typography variant="sr-only">
                Jacob Venable LinkedIn profile
              </Typography>
              <FontAwesomeIcon icon={faLinkedin} />
            </Button>
            <Button<LinkProps>
              color="yellow-light"
              component={Link}
              href="https://github.com/jacobvenable"
              size="large"
              variant="ghost"
            >
              <Typography variant="sr-only">
                Jacob Venable GitHub profile
              </Typography>
              <FontAwesomeIcon icon={faGithub} />
            </Button>
          </Stack>
        </Grid.Item>
        <Grid.Item medium={65}>
          <ContactForm />
        </Grid.Item>
      </Grid.Container>
    </ContentContainer>
  );
};

export default ContactPage;
