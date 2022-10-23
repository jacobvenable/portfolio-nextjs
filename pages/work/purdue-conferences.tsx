import CodeSectionGulpFileInclude from "code-sections/html-gulp-file-include-1.mdx";
import CodeSectionHandleBars from "code-sections/html-handlebars-1.mdx";
import CodeSectionScssGrid1 from "code-sections/scss-grid-1.mdx";
import Button from "components/Button";
import ContentContainer from "components/ContentContainer";
import Head from "components/Head";
import Image from "components/Image";
import Link, { LinkProps } from "components/Link";
import Typography from "components/Typography";
import type { WorkItemDefinition } from "components/WorkItem";
import WorkOverview from "components/WorkOverview";
import Thumb from "images/portfolio_purdueConferences-thumb.png";
import ImageContentDesktop from "images/purdueConferences_content-desktop.png";
import ImageHomeDesktop from "images/purdueConferences_home-desktop.png";
import ImageOg from "images/purdueConferences_ogImage.png";

export const definition: WorkItemDefinition = {
  title: "Purdue Conferences",
  roles: ["Front-End Development", "CMS Implementation"],
  blurb: "the main landing site for Purdue Conferences",
  route: "/work/purdue-conferences",
  tech: [
    "GulpJS",
    "HTML5",
    "responsive",
    "flexbox",
    "grid",
    "SCSS",
    "PostCSS",
    "BEM",
    "ITCSS",
    "vanilla JS",
    "lazy loading",
    "Browserify",
    "Watchify",
    "Handlebars",
  ],
  thumb: Thumb,
};

const PurdueConferencesPage = () => {
  return (
    <ContentContainer>
      <Head
        description="The main landing site for Purdue Conferences, which was developed by Jacob Venable."
        ogImage={{
          alt: "screenshot of the Purdue Conferences site",
          src: ImageOg.src,
        }}
        title="Purdue Conferences"
      />
      <Typography variant="h1">Purdue Conferences</Typography>
      <Button<LinkProps>
        color="blue-dark"
        component={Link}
        href="https://www.purdue.edu/conferences/"
        variant="solid"
      >
        View Live Site
      </Button>
      <WorkOverview
        responsibilities={[
          "review design for accessibility issues",
          "use Git and GitHub for version control and tracking progress",
          "develop reusable components and templates based on design",
          "test for browser inconsistencies",
          "implement the site within the CMS",
        ]}
        tech={{
          "Task Runner": "Gulp.js",
          CSS: "flexbox and grid layout structured with BEM and ITCSS",
          JS: "vanilla JS bundled with Browserify and Watchify",
          CMS: "UI built & data stored in Cascade Server and compiled via Apache Velocity",
          Templating: "reusable components generated via Handlebars",
        }}
      />
      <Image alt="" src={ImageContentDesktop} />
      <section aria-labelledby="dev">
        <Typography id="dev" variant="h2">
          Development Notes
        </Typography>
        <Typography>
          The layouts proposed in the design of this site were trickier than
          others I&apos;ve done in the past. This and difficulties with past
          projects called for some new approaches:
        </Typography>
        <ul>
          <li>using CSS grid and flexbox</li>
          <li>
            implementing{" "}
            <Link href="https://handlebarsjs.com/">Handlebars</Link> to handle
            templating
          </li>
        </ul>
        <Typography underline variant="h3">
          Using CSS Grid and Flexbox
        </Typography>
        <Typography>
          CSS flexbox had been in my toolset for over a year since the start of
          this project; however, the overlapping rows of the home page along
          with the desired order of content didn&apos;t really work for flexbox.
        </Typography>
        <Image
          alt=""
          caption="the home page of the site, which implements CSS grid"
          src={ImageHomeDesktop}
        />
        <Typography>
          Instead, I decided to use CSS grid to create this layout. I had
          avoided grid in the past because it had proven difficult to manage
          within IE11, the oldest browser we needed to support. Most of the
          layouts we created in the past could be handled with flexbox anyways,
          so there was no point in spending extra time to implement grid. Grid
          was acceptable to use in this instance since flexbox wouldn&apos;t
          work.
        </Typography>
        <Typography>
          As a fallback for IE11, I decided to take a similar{" "}
          <Link href="https://slack.engineering/rebuilding-slack-com-b124c405c193">
            approach
          </Link>{" "}
          that the Slack team used in their latest redesign. This called for
          wrapping any use of grid within{" "}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/@supports">
            @supports rule
          </Link>
          . Since IE doesn&apos;t understand @supports, I was free to provide a
          flexbox backup.
        </Typography>
        <CodeSectionScssGrid1 />
        <Typography>
          This approach did mean that IE11 would not have the desired layout,
          but still have a usable, appealing fallback.
        </Typography>
        <Typography underline variant="h3">
          Implementing Handlebars
        </Typography>
        <Typography>
          The reason for using{" "}
          <Link href="https://handlebarsjs.com/">Handlebars</Link> during
          development was to have the ability to create more flexible
          components. In the past, I had simply used{" "}
          <Link href="https://github.com/coderhaoxin/gulp-file-include">
            gulp-file-include
          </Link>{" "}
          in order to handle templating various components and page types. The
          problem with this plugin is that it didn&apos;t provide enough
          flexibility with its conditionals. For example, if I wanted to include
          a button that has four different looks depending on the used
          modifiers, I&apos;d have to have multiple conditionals.
        </Typography>
        <CodeSectionGulpFileInclude />
        <Typography>
          This meant that I could need to have a conditional for every possible
          class combination. Gross, right?
        </Typography>
        <Typography>
          Writing the same thing using Handlebars would be much shorter.
        </Typography>
        <CodeSectionHandleBars />
        <Typography>
          Using Handlebars did have a drawback though. There were some
          components that didn&apos;t have a large level of customization, which
          meant they didn&apos;t need various conditionals assigned to
          properties; however, the way it was built meant that that I still
          needed to create the Handlebars partial, import the partial into the
          template, and pass properties to the component.
        </Typography>
        <Typography>
          In the end, I decided that Handlebars is a good for creating flexible
          components when we&apos;re not also implementing the site within a
          CMS. Otherwise, it&apos;s easier to create quicker, simple HTML
          snippets.
        </Typography>
      </section>
    </ContentContainer>
  );
};

export default PurdueConferencesPage;
