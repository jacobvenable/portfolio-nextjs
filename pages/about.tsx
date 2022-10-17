import { faGraduationCap, faStar } from "@fortawesome/free-solid-svg-icons";

import Accordion from "components/Accordion";
import ContentContainer from "components/ContentContainer";
import Faq from "components/Faq";
import Grid from "components/Grid";
import Head from "components/Head";
import Stack from "components/Stack";
import TimeLine from "components/TimeLine";
import Typography from "components/Typography";

const AboutPage = () => {
  return (
    <ContentContainer>
      <Head
        description="More about Jacob Venable's experience and skills."
        title="Experience"
      />
      <Typography variant="h1">About</Typography>
      <Grid.Container>
        <Grid.Item medium={50}>
          <Typography>
            Ever since my sophomore year of high school, I knew that I wanted to
            make my living through some kind of programming. After being exposed
            to multiple avenues that could scratch that itch, I found my love of
            the web where my work could reach millions in an instant.
          </Typography>
          <Typography>
            Since then I&apos;ve created a features for numerous types of
            people: students, researchers, professors, farmers, crop
            consultants, and even developers. Building these features required
            various toolsets, but here&apos;s a list of what I enjoy working
            with now:
          </Typography>
        </Grid.Item>
        <Grid.Item medium={50}>
          <ul>
            <li>TypeScript</li>
            <li>React</li>
            <li>React Native + React Native Web</li>
            <li>Jest</li>
            <li>CSS in JS</li>
            <li>SASS</li>
            <li>Node</li>
            <li>GraphQl</li>
            <li>Express</li>
          </ul>
        </Grid.Item>
      </Grid.Container>
      <Typography variant="h2">Experience</Typography>
      <Stack direction="vertical" padded>
        <TimeLine />
        <Grid.Container direction="horizontal">
          <Grid.Item mobile={100} tablet={50}>
            <Typography
              component="h2"
              iconProps={{ icon: faGraduationCap }}
              variant="h3"
            >
              Education
            </Typography>
            <dl>
              <dt>Diploma</dt>
              <dd>
                BS &#8212; Computer Graphics Technology (focused in web
                development)
              </dd>
              <dt>school</dt>
              <dd>Purdue University &#8212; College of Technology</dd>
              <dt>Minors</dt>
              <dd>Computer Science</dd>
              <dd>History</dd>
            </dl>
          </Grid.Item>
          <Grid.Item mobile={100} tablet={50}>
            <Typography
              component="h2"
              iconProps={{ icon: faStar }}
              variant="h3"
            >
              Hobbies
            </Typography>
            <ul>
              <li>
                Reading: Believe it or not, I only just recently finished the
                entire Harry Potter series over the summer.
              </li>
              <li>
                CrossFit: I&apos;ve been going to crossfit since February 2018
                because I need someone to yell at me to work out.
              </li>
              <li>
                Hiking: Being originally a flat-lander from Indiana, I love
                soaking in the views of the Rocky Mountains.
              </li>
            </ul>
          </Grid.Item>
        </Grid.Container>
        <Accordion.Group idPrefix="learn-more">
          <Stack direction="vertical" padded>
            <Accordion.Button color="blue-dark" variant="solid">
              I need to know more
            </Accordion.Button>
            <Accordion.Content>
              <Faq />
            </Accordion.Content>
          </Stack>
        </Accordion.Group>
      </Stack>
    </ContentContainer>
  );
};

export default AboutPage;