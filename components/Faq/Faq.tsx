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
            What exactly is it that you do?
          </Accordion.Button>
          <Accordion.Content>
            <Typography>
              In my current role as a senior front-end developer for Purdue
              Marketing and Media, I have a wide range of duties:
            </Typography>
            <ul>
              <li>
                create sites based on mockups provided by UX/UI designers (HTML,
                CSS, and JS)
              </li>
              <li>
                setup sites within the university&apos;s content management
                system (Cascade Server)
              </li>
              <li>train end-users in using the content management system</li>
              <li>
                setup and improve the team&apos;s development workflows and
                standards
              </li>
              <li>guide other web developers on the team</li>
            </ul>
            <Typography>
              In the end, I like to think of myself a problem-solver. If
              something doesn&apos;t work well or efficiently, I like to find
              out how to make it better, and it shows with the changes I&apos;ve
              made while at Purdue:
            </Typography>
            <ul>
              <li>implemented Gulp.js to automate the development workflow</li>
              <li>added SCSS to our toolkit to improve styles management</li>
              <li>
                created reusable patterns using BEM CSS class structuring
                reducing CSS specificity to 1 - 2 levels
              </li>
              <li>improved JS bundling to decrease page load times</li>
              <li>
                instituted and documented the development team’s Git branching
                model creating uniformity and accountability through code
                reviews
              </li>
              <li>
                developed an automatic, custom SVG parser within our CMS to
                eliminate developer intervention when implementing inline SVGs
              </li>
              <li>
                initiated and developed an improved UI within our content
                management system
              </li>
            </ul>
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
