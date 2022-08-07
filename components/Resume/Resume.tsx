import {
  faBriefcase,
  faGraduationCap,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Resume.module.scss";
import Stack from "components/Stack";
import Typography from "components/Typography";

const Resume = () => {
  return (
    <Stack direction="horizontal" itemProps={{ className: styles.column }}>
      <div>
        <Typography iconProps={{ icon: faBriefcase }} variant="h3">
          Work Experience
        </Typography>
        <Typography component="h4" variant="h6">
          Senior Software Engineer
        </Typography>
        <ul>
          <li>July 2021 - present</li>
          <li>Nutrien Ag Solutions</li>
        </ul>
        <Typography component="h4" variant="h6">
          Software Engineer
        </Typography>
        <ul>
          <li>March 2019 - July 2021</li>
          <li>Nutrien Ag Solutions</li>
        </ul>
        <Typography component="h4" variant="h6">
          Senior Front-End Web Developer
        </Typography>
        <ul>
          <li>July 2016 - March 2019</li>
          <li>Purdue University Office of Marketing and Media</li>
        </ul>
        <Typography component="h4" variant="h6">
          Web Developer
        </Typography>
        <ul>
          <li>June 2014 - July 2016</li>
          <li>Purdue University Office of Marketing and Media</li>
        </ul>
        <Typography component="h4" variant="h6">
          Assistant Web Designer
        </Typography>
        <ul>
          <li>May 2012 - May 2014</li>
          <li>Purdue Department of Forestry and Natural Resources</li>
        </ul>
        <Typography component="h4" variant="h6">
          Freelance Web Developer/Designer
        </Typography>
        <ul>
          <li>January 2013 - November 2013</li>
          <li>Various Client Work</li>
        </ul>
      </div>
      <div>
        <Typography iconProps={{ icon: faGraduationCap }} variant="h3">
          Education
        </Typography>
        <dl>
          <dt>Diploma</dt>
          <dd>
            BS &#8212; Computer Graphics Technology (focused in web development)
          </dd>
          <dt>school</dt>
          <dd>Purdue University &#8212; College of Technology</dd>
          <dt>Minors</dt>
          <dd>Computer Science</dd>
          <dd>History</dd>
        </dl>
        <Typography iconProps={{ icon: faStar }} variant="h3">
          Hobbies
        </Typography>
        <ul>
          <li>
            Reading: Believe it or not, I only just recently finished the entire
            Harry Potter series over the summer.
          </li>
          <li>
            CrossFit: I’ve been going to crossfit since February 2018 because I
            need someone to yell at me to work out.
          </li>
          <li>
            Hiking: Being originally a flat-lander from Indiana, I love soaking
            in the views of the Rocky Mountains.
          </li>
        </ul>
      </div>
    </Stack>
  );
};

export default Resume;
