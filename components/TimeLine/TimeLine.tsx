import styles from "./TimeLine.module.scss";
import Accordion from "components/Accordion";
import Button from "components/Button";
import Tags from "components/Tags";
import Typography from "components/Typography";

type Item = {
  date: string;
  title: string;
  company: string;
  bullets: string[];
  tech: string[];
};

const items: Item[] = [
  {
    date: "July 2021 - present",
    title: "Senior Software Engineer",
    company: "Nutrien Ag Solutions",
    bullets: [
      "Created platform application and utilities to serve as base for transition from React to React Native",
      "Supported React Native transition through researching and implementing process for publishing our React Native features to our released React web applications.",
      "Actively developed and reviewed re-usable view components of our design system.",
      "Collaborated with UI/UX to consistently take an iterative approach to feature development.",
    ],
    tech: [
      "TypeScript",
      "React Native",
      "React Native Web",
      "Jest",
      "Internationalization (i18n)",
      "CSS in JS",
      "Node",
      "GraphQl",
      "Git + GitHub",
    ],
  },
  {
    date: "March 2019 - July 2021",
    title: "Software Engineer",
    company: "Nutrien Ag Solutions",
    bullets: [
      "Designed and created system to support legacy auth handling while moving to new OAuth system.",
      "Implemented utilities for managing dynamic routes and query parameters in our React Web applications.",
      "Encouraged and participated in numerous pairing sessions throughout sprints.",
    ],
    tech: [
      "JavaScript (ES6)",
      "React",
      "Jest",
      "CSS in JS",
      "Node",
      "Express",
      "Git + GitHub",
    ],
  },
  {
    date: "July 2016 - March 2019",
    title: "Senior Front-End Web Developer",
    company: "Purdue University",
    bullets: [
      "Improved accessibility of the university's templates through updates to color contrast, keyboard support, and markup for screen readers according to WCAG 2.0 standards.",
      "Created a library for UI components within the CMS used to read and write standard patterns minimizing repetitive code.",
      "Instigated the use of the JS bundling tools, decreasing the number of HTTP requests and page load times.",
      "Instituted and documented the development team's Git branching model creating uniformity and accountability through code reviews.",
      "Established our team's presence on GitHub sharing our code base and collaborating with all web developers at the university",
    ],
    tech: [
      "HTML5",
      "SASS",
      "PostCSS",
      "JavaScript (ES6)",
      "A11y",
      "Gulp.JS",
      "Uglify",
      "PHP",
      "Git + GitHub",
      "Cascade Server",
      "Velocity",
    ],
  },
  {
    date: "June 2014 - July 2016",
    title: "Web Developer",
    company: "Purdue University",
    bullets: [
      "Initiated the use of Git version control improving project management.",
      "Implemented the Gulp.js task runner automating common development tasks and decreasing project development time.",
      "Converted global CSS files into SCSS modules expanding style reuseability and decreasing the size of the final, processed CSS file by ~60%.",
    ],
    tech: [
      "HTML5",
      "SASS",
      "JavaScript (ES6)",
      "A11y",
      "Gulp.js",
      "PHP",
      "Git + GitHub",
      "Cascade Server",
      "Velocity",
    ],
  },
  {
    date: "May 2012 - May 2014",
    title: "Assistant Web Designer",
    company: "Purdue University",
    bullets: [
      "Developed interactive pages using Javascript + JQuery which included slide shows and dynamic feeds",
      "Created and optimized new web pages based on given content using HTML/CSS",
      "Managed prioritizing and completing numerous page updates in a timely manner",
      "Designed and edited images including photos, banners, and site assets with Adobe Photoshop and Illustrator",
    ],
    tech: ["HTML5", "CSS", "JavaScript", "jQuery", "Photoshop", "Illustrator"],
  },
  {
    date: "Jan 2013 - Nov 2013",
    title: "Web Developer/Designer",
    company: "Freelance",
    bullets: [
      "Developed sites using HTML/CSS , Javascript (JQuery), and PHP to create user-friendly content management.",
      "Effectively communicated with clients about requirements of each site and provided regular updates on project progress.",
      "Designed each web page in Adobe Photoshop and gained client approval before continuing.",
    ],
    tech: ["HTML5", "CSS", "JavaScript", "PHP", "Photoshop"],
  },
];

const TimeLine: React.FC = () => {
  return (
    <Accordion.Group idPrefix="timeline">
      {items.map((item) => (
        <div className={styles.item} key={`${item.title} ${item.company}`}>
          <Typography className={styles.title} id={item.title} variant="h3">
            {item.title}
          </Typography>
          <Typography className={styles.date} component="p" variant="h5">
            {item.date}
          </Typography>
          <Typography className={styles.company} component="p" variant="h6">
            {item.company}
          </Typography>
          <Tags.List className={styles.tags}>
            {item.tech.map((techItem) => (
              <Tags.Item key={techItem}>{techItem}</Tags.Item>
            ))}
          </Tags.List>
          <div className={styles.button}>
            <Accordion.Button
              aria-describedby={item.title}
              color="primary"
              component={Button}
              size="small"
              variant="hollow"
            >
              Highlights
            </Accordion.Button>
          </div>
          <Accordion.Content className={styles.description}>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Accordion.Content>
        </div>
      ))}
    </Accordion.Group>
  );
};

export default TimeLine;
