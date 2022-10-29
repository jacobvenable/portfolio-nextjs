import ContentContainer from "components/ContentContainer";
import Head from "components/Head";
import Image from "components/Image";
import Typography from "components/Typography";
import type { WorkItemDefinition } from "components/WorkItem";
import WorkOverview from "components/WorkOverview";
import ContentPageScreenshot from "images/boilerLife_content-desktop.png";
import HomePageScreenshot from "images/boilerLife_home-desktop.png";
import OgImage from "images/boilerLife_ogImage.png";
import Thumb from "images/portfolio_boilerLife-thumb.jpg";

export const definition: WorkItemDefinition = {
  title: "Boiler Life",
  roles: ["Front-End Development", "CMS Implementation"],
  blurb:
    "a social media marketing campaign with a custom-designed micro-site, showcasing stories of Purdue students, groups, and alumni",
  route: "/work/boiler-life",
  thumb: Thumb,
  tech: [
    "GulpJS",
    "HTML5",
    "responsive",
    "Bootstrap",
    "SASS",
    "jQuery",
    "lazy loading",
  ],
};

const BoilerLifePage = () => {
  return (
    <ContentContainer>
      <Head
        description="A social media marketing campaign with a custom-designed micro-site, developed by Jacob Venable, showcasing stories of Purdue students, groups, and alumni."
        ogImage={{
          alt: "screenshot of the Boiler Life site",
          src: OgImage.src,
        }}
        title="Boiler Life"
      />
      <Typography variant="h1">Boiler Life</Typography>
      <Typography variant="tagline">
        the campaign featuring Boilermakers that move the world forward
      </Typography>
      <WorkOverview
        responsibilities={[
          "review design for accessibility issues",
          "use Git and GitHub for version control and tracking progress",
          "develop the site based on a given Photoshop document",
          "test for browser inconsistencies",
          "implement the site within the CMS",
          "setup the CMS to output site content as XML to be used in digital signs across campus",
          "train individuals in uploading content for weekly updating",
        ]}
        tech={{
          "Task Runner": "Gulp.js",
          CSS: "combination of Bootstrap and custom SCSS",
          JS: "custom script written using jQuery",
          CMS: "UI built & data stored in Cascade Server and compiled via Apache Velocity",
        }}
      />
      <Image
        alt=""
        caption="the landing page of the site displaying the currently featured Boilers"
        fullPageWidth
        src={HomePageScreenshot}
      />
      <section aria-labelledby="dev">
        <Typography id="dev" variant="h2">
          Development Notes
        </Typography>
        <Typography>
          Developing this site included attempts to modernize my workflow by
          adding new tools:
        </Typography>
        <ul>
          <li>Git + GitHub &#8212; for version control and code backup</li>
          <li>
            <a href="https://gulpjs.com/">Gulp.js</a> &#8212; a task runner I
            used template HTML and compile SASS
          </li>
        </ul>
        <Typography underline variant="h3">
          Git + GitHub
        </Typography>
        <Typography>
          For the duration of this project I was the only developer on our small
          team. While this did create a bottleneck, it also gave me quite a bit
          of freedom to work and experiment with different tools. The first
          tools I felt were absolutely necessary to add to the development
          workflow were Git and GitHub.
        </Typography>
        <Image
          alt=""
          caption="an example of a page telling the story of the featured Boiler"
          fullPageWidth
          src={ContentPageScreenshot}
        />
        <Typography>
          It&apos;s probably uneccessary to argue about the importance of
          version control here, but I&apos;ll say that Git was certainly a large
          step-up from our previous method, e.g., myFilev1.js,
          myFilev2-validation.js, etc. The biggest advantage I found was the
          ability to easily create a branch to experiment with a new feature,
          while being able to continue work on the items that would definitely
          be implemented.
        </Typography>
        <Typography>
          I was also able to get my feet wet with GitHub as well but I
          can&apos;t but feel that I only scratched the surface of its
          capabilities. Being a developer of one, GitHub acted more as a place
          to backup my work rather than as a collaboration tool.
        </Typography>
        <Typography underline variant="h3">
          Gulp.js
        </Typography>
        <Typography>
          The addition of Gulp.js to my workflow was definitely the most
          exciting development. After using it for a few hours, I wondered how I
          survived without a task runner for so long.
        </Typography>
        <Typography>
          For setting up HTML templates locally, I had been writing full HTML
          pages; however, adding{" "}
          <a href="https://www.npmjs.com/package/gulp-file-include">
            gulp-file-include
          </a>{" "}
          gave me the ability to easily create HTML components and automatically
          compile them into one page.
        </Typography>
        <Typography>
          For compiling my SCSS, I no longer had to rely on using{" "}
          <a href="http://koala-app.com/">Koala</a>, a SASS-compiling GUI
          application. Now, I could add even more CSS tools, such as
          autoprefixer, with little difficulty.
        </Typography>
        <Typography>
          The icing on the cake was setting up a local server via{" "}
          <a href="https://www.npmjs.com/package/gulp-connect">gulp-connect</a>{" "}
          and setting up{" "}
          <a href="https://www.npmjs.com/package/gulp-watch">gulp-watch</a>, a
          file watcher. I truly didn&apos;t realize how the amount of time you
          save from automatic refreshes really builds up.
        </Typography>
      </section>
    </ContentContainer>
  );
};

export default BoilerLifePage;
