import Accordion from "components/Accordion";
import Stack from "components/Stack";
import Typography from "components/Typography";

const Faq = () => {
  return (
    <>
      <Typography component="h2" variant="sr-only">
        FAQ
      </Typography>
      <Accordion.Group idPrefix="faq">
        <Stack direction="vertical">
          <Accordion.Button aria-level={3} role="heading">
            Where are you based?
          </Accordion.Button>
          <Accordion.Content>
            <Typography>
              I currently live in Boulder, Colorado. I have been working
              remotely for Nutrien Ag Solutions, which is based in Loveland,
              Colorado since March 2019.
            </Typography>
          </Accordion.Content>
          <Accordion.Button aria-level={3} role="heading">
            How did you get into development?
          </Accordion.Button>
          <Accordion.Content>
            <Typography>
              Since my first programming class in high school, I&apos;ve known
              that I&apos;ve wanted to have a career in development. To move in
              that direction, I applied to and was accepted into Purdue
              University&apos;s Computer Science program.
            </Typography>
            <Typography>
              After a year in the program I learned there was a caveat to my
              career choice; it needed to be visually-rewarding. While the
              Computer Science program gave me a great foundation, I felt I was
              missing out on applying it. I looked around for something a bit
              more practical and decided to take an introduction to web
              development, which was part of the Computer Graphics Technology
              (CGT) program.
            </Typography>
            <Typography>
              Long story short, I fell in love with web development, switched to
              the CGT program, and the rest is history.
            </Typography>
          </Accordion.Content>
          <Accordion.Button aria-level={3} role="heading">
            What do you love about software engineering?
          </Accordion.Button>
          <Accordion.Content>
            <Typography>
              During my time at Purdue and Nutrien, I was exposed to and
              practiced various skillsets involved with creating a final
              product:
            </Typography>
            <ul>
              <li>UI/UX research and design</li>
              <li>front-end development</li>
              <li>back-end development</li>
              <li>project management</li>
            </ul>
            <Typography>
              While each of these skillsets have some overlap and are
              interesting in their own way, development was where I found a
              home. It is the perfect combination of <mark>creativity</mark> and{" "}
              <mark>logic</mark> while also having a{" "}
              <mark>visually-rewarding</mark> product as the end-result.
            </Typography>
          </Accordion.Content>
          <Accordion.Button aria-level={3} role="heading">
            How do you take your coffee?
          </Accordion.Button>
          <Accordion.Content>
            <Typography>
              Black&hellip; but sometimes you just need a dessert-in-a-cup
              mocha.
            </Typography>
          </Accordion.Content>
          <Accordion.Button aria-level={3} role="heading">
            Would you rather fight a horse-sized duck or a hundred duck-sized
            horses?
          </Accordion.Button>
          <Accordion.Content>
            <Typography>
              I would definitely fight a horse-sized duck. Battling a hundred of
              anything would be tiring.
            </Typography>
          </Accordion.Content>
        </Stack>
      </Accordion.Group>
    </>
  );
};

export default Faq;
