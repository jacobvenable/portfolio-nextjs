import { faClipboardList, faToolbox } from "@fortawesome/free-solid-svg-icons";

import Button from "components/Button";
import ContentContainer from "components/ContentContainer";
import Grid from "components/Grid";
import Head from "components/Head";
import Image from "components/Image";
import Link, { LinkProps } from "components/Link";
import Typography from "components/Typography";
import type { WorkItemDefinition } from "components/WorkItem";
import HomeCoverImage from "images/life360_home-cover-desktop.png";
import HomeFeaturedImage from "images/life360_home-featured-desktop.png";
import HomeHighlightsImage from "images/life360_home-highlights-desktop.png";
import OgImage from "images/life360_ogImage.png";
import Thumb from "images/portfolio_life360-thumb.jpg";

export const definition: WorkItemDefinition = {
  title: "Life 360",
  roles: ["Front-End Development"],
  blurb:
    "custom-built magazine site to showcase people, places and events from across the College of Health and Human Sciences",
  route: "/work/life-360",
  thumb: Thumb,
  tech: [
    "GulpJS",
    "HTML5",
    "responsive",
    "PostCSS",
    "cssnext",
    "vanilla JS",
    "lazy loading",
  ],
};

const Life360Page = () => {
  return (
    <ContentContainer>
      <Head
        description="A custom-built magazine site, developed by Jacob Venable, to showcase people, places and events from across the College of Health and Human Sciences."
        ogImage={{
          alt: "screenshot of the Life 360 site",
          src: OgImage.src,
        }}
        title="Life 360"
      />
      <Typography variant="h1">Life 360</Typography>
      <Typography variant="tagline">
        the online magazine of the Purdue College of Health and Human Sciences
        (HHS)
      </Typography>
      <Button<LinkProps>
        color="blue-dark"
        component={Link}
        href="https://www.purdue.edu/hhs/life360/"
        variant="solid"
      >
        View Live Site
      </Button>
      <section aria-labelledby="overview">
        <Typography id="overview" variant="h2">
          Overview
        </Typography>
        <Grid.Container>
          <Grid.Item medium={50} mobile={100}>
            <Typography iconProps={{ icon: faToolbox }} variant="h3">
              Tech
            </Typography>
            <dl>
              <dt>Task Runner</dt>
              <dd>Gulp.js</dd>
              <dt>CSS</dt>
              <dd>structured with BEM and processed by PostCSS-cssnext</dd>
              <dt>JS</dt>
              <dd>vanilla JS linted by JSHint and minified via UglifyJS</dd>
              <dt>CMS</dt>
              <dd>
                UI built & data stored in Cascade Server and compiled via Apache
                Velocity
              </dd>
            </dl>
          </Grid.Item>
          <Grid.Item medium={50} mobile={100}>
            <Typography iconProps={{ icon: faClipboardList }} variant="h3">
              Responsibilities
            </Typography>
            <ul>
              <li className="overview__item">
                review design for accessibility issues
              </li>
              <li className="overview__item">
                use Git and GitHub for version control and tracking progress
              </li>
              <li className="overview__item">
                develop reusable components and templates based on design
              </li>
              <li className="overview__item">
                test for browser inconsistencies
              </li>
              <li className="overview__item">
                implement the site within the CMS
              </li>
            </ul>
          </Grid.Item>
        </Grid.Container>
      </section>
      <Image
        alt=""
        caption='the main "cover" story of the home page'
        src={HomeCoverImage}
      />
      <section aria-labelledby="dev">
        <Typography id="dev" variant="h2">
          Development Notes
        </Typography>
        <Typography>
          After being inspired at the University of Illinois&apos;{" "}
          <a href="http://webcon.illinois.edu/">Webcon</a>, I decided this site
          was an opportunity to implement new methodology and tech:
        </Typography>
        <ul>
          <li>
            using <a href="http://getbem.com/">BEM</a> to structure CSS classes
          </li>
          <li>
            using <a href="http://cssnext.io/">PostCSS-cssnext</a> to compile
            CSS
          </li>
        </ul>
        <Typography underline variant="h3">
          BEM &#8212; Block Element Modifier
        </Typography>
        <Typography>
          Implementing BEM in this project was my first, hands-on experience
          with using a CSS methodology, and I&apos;m not sure how I survived
          without one. While I tried using descriptive class names before,
          having a clear organization to the type of element being styled was a
          game-changer.
        </Typography>
        <Image
          alt="example of desktop version of featured stories section of home page"
          caption="BEM was especially helpful when styling the various components that shared elements."
          src={HomeFeaturedImage}
        />
        <Image
          alt="example of desktop version of highlighted and other stories sections of home page"
          caption=""
          src={HomeHighlightsImage}
        />
        <Typography underline variant="h3">
          PostCSS-cssnext
        </Typography>
        <Typography>
          cssnext was pitched as an alternative to SASS or LESS that, instead,
          compile the future spec of CSS into CSS that is available now. Using
          it seemed like a no-brainer. The point of using a CSS preprocessor was
          to fill-in the shortcomings of the current state language. Why not use
          the future spec of the language rather than using an entirely
          different one?
        </Typography>
        <Typography>
          As I continued through the project, I started noticing that even the
          future spec didn&apos;t have some features I used in SCSS:
        </Typography>
        <ul>
          <li>mixins with parameter support</li>
          <li>
            functions with the ability to return a value rather than a CSS
            property
          </li>
        </ul>
        <Typography>
          For example, I usually convert my font-sizes, usually received as a
          pixel value, to rems in order to allow the user to resize them via the
          browser.
        </Typography>
        {/* <CodeSection language="css" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('css-cssnext');
					}).node.html
				}/> */}
        <Typography>
          Setting something as simple as converting the font-size is quite wordy
          in cssnext. In contrast, SCSS allows me to create a function that I
          can name in a friendlier manner.
        </Typography>
        {/* <CodeSection language="scss" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('scss-vs');
					}).node.html
				}/> */}
        <Typography>
          While I could have used a mixture of SCSS and cssnext, I believe that
          it would have defeated the purpose of using cssnext in the first
          place. Overall, it was an interesting experiment, but I don&apos;t
          think cssnext will be added to my preferred toolset.
        </Typography>
      </section>
    </ContentContainer>
  );
};

export default Life360Page;
