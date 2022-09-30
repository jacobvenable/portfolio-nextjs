import ContentContainer from "components/ContentContainer";
import Head from "components/Head";
import TimeLine from "components/TimeLine";
import Typography from "components/Typography";

const AboutPage = () => {
  return (
    <ContentContainer>
      <Head
        description="More about Jacob Venable's experience and skills."
        title="Experience"
      />
      <Typography variant="h2">Experience</Typography>
      <TimeLine />

      <Typography variant="h2">Technical</Typography>
      <Typography variant="h3">Featured</Typography>
      <ul>
        <li>
          TypeScript &amp; JavaScript - TS 2 years
          <Typography variant="h4">Specifics by Position</Typography>
          <ul>
            <li>Nutrien Senior Software Engineer</li>
            <li>Nutrien Front-End Engineer</li>
            <li>Purdue Senior Web Developer</li>
          </ul>
        </li>
        <li>
          React
          <ul>
            <li>Nutrien Senior Software Engineer</li>
            <li>Nutrien Front-End Engineer</li>
          </ul>
        </li>
        <li>
          React Native
          <ul>
            <li>Nutrien Senior Software Engineer</li>
          </ul>
        </li>
        <li>
          GraphQL
          <ul>
            <li>Nutrien Senior Software Engineer</li>
          </ul>
        </li>
        <li>
          HTML 5
          <ul>
            <li>Nutrien Senior Software Engineer</li>
            <li>Nutrien Front-End Engineer</li>
            <li>Purdue Senior Web Developer</li>
            <li>Purdue Web Developer</li>
            <li>Assistant Web Designer</li>
            <li>Freelance Web Developer/Designer</li>
          </ul>
        </li>
        <li>
          CSS3
          <ul>
            <li>Nutrien Senior Software Engineer</li>
            <li>Nutrien Front-End Engineer</li>
            <li>Purdue Senior Web Developer</li>
            <li>Purdue Web Developer</li>
            <li>Assistant Web Designer</li>
            <li>Freelance Web Developer/Designer</li>
          </ul>
        </li>
        <li>
          Git
          <ul>
            <li>Nutrien Senior Software Engineer</li>
            <li>Nutrien Front-End Engineer</li>
            <li>Purdue Senior Web Developer</li>
            <li>Purdue Web Developer</li>
          </ul>
        </li>
        <li>
          Accessibility
          <ul>
            <li>Nutrien Front-End Engineer</li>
            <li>Purdue Senior Web Developer</li>
            <li>Purdue Web Developer</li>
          </ul>
        </li>
        <li>
          Webpack
          <ul>
            <li>Nutrien Senior Software Engineer</li>
            <li>Nutrien Front-End Engineer</li>
            <li>Purdue Senior Web Developer</li>
          </ul>
        </li>
      </ul>
      <Typography variant="h3">Other</Typography>
      <ul>
        <li>Linting</li>
        <li>PHP</li>
        <li>GulpJS</li>
        <li>public speaking</li>
        <li>presenting</li>
        <li>visual communication</li>
      </ul>
      <Typography variant="h2">Soft</Typography>
      <ul>
        <li>public speaking</li>
        <li>presenting</li>
        <li>visual communication</li>
      </ul>
    </ContentContainer>
  );
};

export default AboutPage;
